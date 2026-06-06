const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function timestamp() {
  const d = new Date();
  return d.toISOString().replace(/[:.]/g, '-');
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function runCommand(cmd, args, opts, outFile) {
  return new Promise((resolve) => {
    const proc = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'], ...opts });
    const outStream = fs.createWriteStream(outFile);
    proc.stdout.pipe(outStream);
    proc.stderr.pipe(outStream);
    proc.on('close', (code) => resolve(code));
  });
}

async function runWorkflow(workflow) {
  const baseArtifacts = path.join(process.cwd(), 'artifacts', workflow, timestamp());
  ensureDir(baseArtifacts);

  const runs = [];
  if (workflow === 'smoke') {
    runs.push({ name: 'JS Playwright (agent-tests)', cmd: 'npx', args: ['playwright', 'test', 'agent-tests/example.spec.js', '--reporter=list'] });
  } else if (workflow === 'full') {
    runs.push({ name: 'JS Playwright (all)', cmd: 'npx', args: ['playwright', 'test', '--reporter=list'] });
  } else {
    console.error('Unknown workflow:', workflow);
    process.exit(2);
  }

  let overallCode = 0;
  for (const r of runs) {
    console.log('Running:', r.name, r.cmd, r.args.join(' '));
    const outFile = path.join(baseArtifacts, `${r.name.replace(/[^a-z0-9]/gi, '_')}.log`);
    const code = await runCommand(r.cmd, r.args, { cwd: process.cwd(), shell: true }, outFile);
    console.log(`${r.name} exited with ${code} (logs: ${outFile})`);
    if (code !== 0) overallCode = code;
  }

  console.log('Artifacts saved to', baseArtifacts);
  process.exit(overallCode);
}

const args = process.argv.slice(2);
const workflowArg = args.find(a => a.startsWith('--workflow='));
const workflow = workflowArg ? workflowArg.split('=')[1] : 'smoke';
runWorkflow(workflow).catch(err => { console.error(err); process.exit(1); });
