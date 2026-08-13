# LTIMindtree Mock Interview — Complete Answer Guide
### Role: Offshore QE | Playwright TypeScript | AI & Agentic Testing
### Prepared for: Ravindra | Senior QA Automation Engineer | Xceedance

---

## SECTION 1 — Playwright Automation (25%)

---

### Q1 (Easy) — How does Playwright's auto-waiting work? Why don't we need sleep()?

**Your Answer:**

Playwright performs automatic actionability checks before executing any action on an element. Before a `.click()`, `.fill()`, or `.hover()`, it waits for the element to be:

- **Visible** — not hidden or `display:none`
- **Stable** — not animating or moving
- **Enabled** — not disabled
- **Receiving events** — not covered by another element

Instead of sleeping for a fixed time, Playwright polls the DOM continuously until all these conditions are met — or until the configured timeout (default 30s) is exceeded.

**In my DuckCreek project**, the application loads inside an iframe. Without auto-waiting, every interaction would need a manual sleep after the iframe loads. With Playwright, I just scope into the frame and act — it waits automatically until elements inside the frame are ready.

**Why sleep() is dangerous:**
- Too short → test fails on slow CI machines
- Too long → test suite becomes unnecessarily slow
- Masks real problems — you're waiting blindly, not waiting *smartly*

The only times I use explicit waits are for custom conditions — like `waitForLoadState('networkidle')` after a heavy page navigation, or `waitFor({ state: 'visible' })` for an element that appears after an API call.

---

### Q2 (Medium) — Explain POM in your framework. How do you avoid duplicate locators?

**Your Answer:**

*(Already answered in detail — use that answer. Key points to repeat verbally:)*
In our Playwright TypeScript framework for the DuckCreek Claims application, we follow the Page Object Model pattern where every screen or major component has its own class. Locators are defined once as class properties and reused across all tests. Since DuckCreek has an iframe-heavy UI, we also have a base class that handles iframe context switching centrally, so no test ever deals with that directly.
  
- One class per page/component in `pages/` folder
- Locators defined as `readonly` properties in the constructor — **single source of truth**
- Methods expose **actions**, not raw locators — tests call `loginPage.login()`, never `page.locator('#username')`
- `BasePage.ts` handles iframe context once — `this.frame = page.frameLocator('#duckCreekFrame')` — no child page repeats this
- If a locator is needed on two pages, it goes into `BasePage` or a shared `Component` class
- Tests contain **zero selectors** — only method calls and assertions

**Result:** When DuckCreek updates a selector, I change one line in one file — not 30 lines across 15 test files.

---

### Q3 (Medium) — Browser vs BrowserContext vs Page? Why does context isolation matter?

**Your Answer:**

Think of it like a web browser on your desktop:

| Playwright Object | Real-world Equivalent |
|---|---|
| `Browser` | The browser application (Chrome process) |
| `BrowserContext` | An incognito window — isolated cookies, storage, cache |
| `Page` | A tab inside that window |

**Browser** — the actual browser process. One browser can have many contexts.

**BrowserContext** — completely isolated session. Has its own cookies, localStorage, sessionStorage, HTTP credentials. Like opening a private/incognito window. This is the key to parallel test isolation.

**Page** — a single tab within a context. One context can have multiple pages/tabs.

**Why context isolation matters for parallel runs:**

In my DuckCreek suite, tests run in parallel across multiple workers. If two tests shared the same context, a login in Test A would affect the session in Test B — they'd fight over cookies. By giving each test its own `BrowserContext`, they are completely isolated. Test A's login, session data, and local storage never bleed into Test B, even when running simultaneously.

This is also why `storageState` works — you save the authenticated context from one run and replay it in a new isolated context for each test.

---

### Q4 (Medium) — How do you handle authentication once and reuse across tests?

**Your Answer:**

I use Playwright's `storageState` feature — a two-step approach:

**Step 1 — Global Setup (runs once before the entire suite):**
```typescript
// global-setup.ts
import { chromium } from '@playwright/test';

async function globalSetup() {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page    = await context.newPage();

  // Login once
  await page.goto('https://duckcreek.app/login');
  await page.fill('#username', process.env.TEST_USER!);
  await page.fill('#password', process.env.TEST_PASS!);
  await page.click('#login-btn');
  await page.waitForURL('**/dashboard');

  // Save cookies + localStorage to file
  await context.storageState({ path: 'auth/storageState.json' });
  await browser.close();
}
export default globalSetup;
```

**Step 2 — Reuse in playwright.config.ts:**
```typescript
use: {
  storageState: 'auth/storageState.json', // every test starts already logged in
}
```

**Benefits:**
- Login happens exactly once per suite run — not once per test
- Each test still gets its own isolated BrowserContext — no session leakage
- Reduces suite runtime significantly (no repeated login flows)
- Tests that need a *fresh* unauthenticated state simply override `storageState: undefined`

---

### Q5 (Medium — TypeScript) — Three assertions depending on async API calls. How do you structure to avoid race conditions?

**Your Answer:**

There are two scenarios — sequential dependency vs. true independence:

**Scenario A — Each call depends on the previous result (use sequential await):**
```typescript
test('claim workflow', async ({ page, request }) => {
  // Each step depends on the previous — must be sequential
  const user    = await request.post('/api/login', { data: creds });
  const token   = (await user.json()).token;                  // needs user result

  const claim   = await request.post('/api/claims', {
    headers: { Authorization: `Bearer ${token}` },           // needs token
    data: claimPayload
  });
  const claimId = (await claim.json()).id;                    // needs claim result

  const detail  = await request.get(`/api/claims/${claimId}`); // needs claimId
  expect((await detail.json()).status).toBe('OPEN');
});
```

**Scenario B — All three calls are independent (use Promise.all for speed):**
```typescript
test('dashboard loads all panels', async ({ request }) => {
  // All three are independent — run in parallel, wait for all
  const [userResp, claimsResp, notifsResp] = await Promise.all([
    request.get('/api/user'),
    request.get('/api/claims'),
    request.get('/api/notifications')
  ]);

  expect(userResp.ok()).toBeTruthy();
  expect(claimsResp.ok()).toBeTruthy();
  expect(notifsResp.ok()).toBeTruthy();
});
```

**The anti-pattern to avoid — fire-and-forget:**
```typescript
// ❌ WRONG — assertion runs before promise resolves!
const resp = request.get('/api/claims'); // missing await
expect(resp).toBeDefined(); // asserting a Promise object, not the response!
```

**Rule of thumb:** If B needs A's result → sequential await. If they're independent → `Promise.all`. Never fire-and-forget before an assertion.

---

### Q6 (Hard) — Test fails intermittently in CI, passes locally 10/10. Debug process?

**Your Answer:**

I follow a structured debugging process — never just add a retry and move on.

**Step 1 — Identify CI vs local differences:**
- Headless mode in CI vs headed locally — some selectors behave differently
- Slower network/CPU in CI — timing-sensitive assertions may fail
- Parallel workers in CI — could be shared test data collision
- Environment variables / base URLs different

**Step 2 — Capture evidence on failure:**
```typescript
// playwright.config.ts
use: {
  screenshot: 'only-on-failure',
  video:      'retain-on-failure',
  trace:      'on-first-retry',
}
```
The **Trace Viewer** shows me a timeline of every action, network call, console log, and DOM snapshot at each step — I can pinpoint exactly where it diverged.

**Step 3 — Common root causes I investigate:**
- **Race condition** — assertion fires before navigation or API response completes → fix with proper `await` or `waitFor`
- **Shared test data** — two parallel tests create a claim with the same policy number → fix with unique data per test (`Date.now()` suffix)
- **Selector instability** — CSS class changes between builds → move to `data-testid` attributes
- **DuckCreek-specific** — iframe not fully loaded before interaction → add `waitForLoadState` after frame navigation

**Step 4 — Fix the root cause, then verify:**
Run the test 20x in CI (`--repeat-each=20`) to confirm it's stable before removing the quarantine tag.

**Short-term mitigation:** Tag as `@flaky`, move to a nightly-only bucket so it doesn't block the main pipeline — but track it as technical debt with a fix deadline.

---

### Q7 (Hard) — Testing UI inside Shadow DOM or third-party iframe?

**Your Answer:**

**For iframes (relevant to my DuckCreek work):**

Playwright requires you to scope into the frame before locating elements inside it:
```typescript
// Scope into the iframe first
const frame = page.frameLocator('#duckCreekFrame');

// Now locate elements INSIDE the iframe
await frame.locator('#claimantName').fill('Ravi');
await frame.locator('button[type="submit"]').click();
```

In my BasePage, I do this once in the constructor so every page object inherits the correct frame context automatically.

For **nested iframes** (frame inside frame):
```typescript
const outerFrame = page.frameLocator('#outerFrame');
const innerFrame = outerFrame.frameLocator('#innerFrame');
await innerFrame.locator('#field').fill('value');
```

**For Shadow DOM:**

Playwright **automatically pierces open Shadow DOM** — standard locators work without any special handling:
```typescript
// Playwright finds this even inside a shadow root
await page.locator('custom-element >> input').fill('value');
// or simply:
await page.locator('input[name="cardNumber"]').fill('4111111111111111');
```

**Closed Shadow DOM** is harder — the browser blocks external access. Options:
- Use `page.evaluate()` to run JavaScript inside the page context
- Work with the dev team to change to open Shadow DOM for testability
- Use CDP (Chrome DevTools Protocol) for lower-level access

**For payment widgets (third-party iframes like Stripe/Razorpay):**
- Scope with `frameLocator` by iframe `src` URL or `name` attribute
- Some payment providers intentionally block automation — in that case, mock the payment API at the network layer instead of testing the iframe UI

---

### Q8 (Hard) — Designing suite so smoke, in-sprint, and regression don't slow each other down?

**Your Answer:**

I use a **tagging + pipeline triggering** strategy:

**Step 1 — Tag every test:**
```typescript
test('@smoke @claims — create claim successfully', ...)
test('@regression @claims — claim with invalid policy number', ...)
test('@sprint-23 @claims — new endorsement field validation', ...)
```

**Step 2 — Separate pipeline triggers in Azure DevOps:**

| Pipeline | Trigger | Tests Run | Duration Target |
|---|---|---|---|
| PR Gate | Every pull request | `@smoke` only | < 5 min |
| Nightly | Scheduled 2am | `@regression` | < 45 min |
| In-Sprint | Manual / sprint end | `@sprint-XX` | < 15 min |
| Release | Pre-prod deploy | `@smoke @regression` | < 60 min |

**Step 3 — Parallelisation and sharding:**
```typescript
// playwright.config.ts
workers: process.env.CI ? 4 : 2,  // more workers in CI

// For large regression suites — split across CI agents
// Run: npx playwright test --shard=1/4 on agent 1
//      npx playwright test --shard=2/4 on agent 2... etc.
```

**Step 4 — Flaky/slow test isolation:**
- Tests consistently > 2 minutes → nightly bucket only, tagged `@slow`
- Known-flaky tests → `@quarantine` tag, excluded from all pipelines, tracked as bugs

**Result:** PR gate never slows a developer down. Regression runs in parallel overnight. In-sprint tests run only for the relevant sprint's features.

---

## SECTION 2 — API Testing (15%)

---

### Q9 (Easy) — POST request with JSON body and Bearer token?

**Your Answer (TypeScript — Playwright APIRequestContext):**

```typescript
test('create claim via API', async ({ request }) => {
  const response = await request.post('https://api.duckcreek.com/claims', {
    headers: {
      'Authorization': `Bearer ${process.env.API_TOKEN}`,
      'Content-Type':  'application/json',
    },
    data: {
      claimantName: 'Ravi Kolate',
      policyNumber: 'POL-2024-001',
      lossDate:     '2024-01-15',
      claimType:    'Auto'
    }
  });

  expect(response.status()).toBe(201);
  const body = await response.json();
  expect(body.claimId).toBeDefined();
  expect(body.status).toBe('OPEN');
});
```

I prefer Playwright's built-in `APIRequestContext` because it shares the same authenticated session as the browser context — useful for combined UI + API tests. For standalone API testing, I also use **Axios** or **Supertest**.

---

### Q10 (Medium) — Test B needs token/ID generated by Test A. How do you handle?

**Your Answer:**

I never share mutable global state between parallel tests — that's a race condition waiting to happen.

**The right pattern — use fixtures or setup steps:**

```typescript
// Option 1: Test-scoped fixture (Playwright recommended)
const test = base.extend<{ authToken: string; claimId: string }>({
  authToken: async ({ request }, use) => {
    const resp  = await request.post('/api/login', { data: credentials });
    const token = (await resp.json()).token;
    await use(token); // provide to test
  },

  claimId: async ({ request, authToken }, use) => {
    const resp = await request.post('/api/claims', {
      headers: { Authorization: `Bearer ${authToken}` },
      data: claimPayload
    });
    const id = (await resp.json()).claimId;
    await use(id); // provide to test
  }
});

test('validate claim detail', async ({ request, authToken, claimId }) => {
  const resp = await request.get(`/api/claims/${claimId}`, {
    headers: { Authorization: `Bearer ${authToken}` }
  });
  expect((await resp.json()).status).toBe('OPEN');
});
```

Each test gets its own token and claimId — no sharing, no race conditions. If one test fails, it doesn't poison another test's data.

---

### Q11 (Medium) — Validate API response matches expected schema?

**Your Answer:**

Spot-checking a few fields is not enough — I validate the full response structure.

**Approach 1 — TypeScript interface + type-safe assertions:**
```typescript
interface ClaimResponse {
  claimId:      string;
  status:       'OPEN' | 'CLOSED' | 'PENDING';
  claimantName: string;
  policyNumber: string;
  createdAt:    string; // ISO date string
  amount:       number;
}

test('claim response schema is correct', async ({ request }) => {
  const resp = await request.get('/api/claims/CLM-001');
  const body = await resp.json() as ClaimResponse;

  // Structure validation
  expect(typeof body.claimId).toBe('string');
  expect(['OPEN','CLOSED','PENDING']).toContain(body.status);
  expect(typeof body.amount).toBe('number');
  expect(body.amount).toBeGreaterThan(0);
  // Date format
  expect(new Date(body.createdAt).toString()).not.toBe('Invalid Date');
});
```

**Approach 2 — JSON Schema validation with `ajv`:**
```typescript
import Ajv from 'ajv';
const ajv  = new Ajv();
const schema = {
  type: 'object',
  required: ['claimId', 'status', 'claimantName', 'amount'],
  properties: {
    claimId:  { type: 'string' },
    status:   { type: 'string', enum: ['OPEN','CLOSED','PENDING'] },
    amount:   { type: 'number', minimum: 0 },
  }
};
const validate = ajv.compile(schema);
expect(validate(body)).toBe(true);
```

Schema validation catches missing fields, wrong types, and invalid enum values — things that field-by-field spot-checking misses.

---

### Q12 (Hard) — Negative API scenarios for P&C insurance quoting API?

**Your Answer:**

For a P&C insurance quoting API, I test across multiple failure categories:

**Authentication & Authorization:**
- Expired JWT token → expect 401
- Valid token but wrong role (e.g., agent accessing admin endpoint) → expect 403
- Missing Authorization header → expect 401

**Invalid Payloads:**
- Missing required fields (no `policyNumber`) → expect 400 with field-level error message
- Wrong data types (`lossDate: 12345` instead of ISO string) → expect 400
- Payload exceeding size limits → expect 413

**Insurance-Domain Specific (P&C):**
- Invalid policy number format → expect 422 with "Invalid policy number"
- Policy already expired at time of claim → expect 422
- `effectiveDate` after `expiryDate` → expect 400
- State not supported by the rating rule (e.g., quoting in a state the carrier isn't licensed in) → expect 422
- Premium calculation with out-of-range deductible → expect 400
- Malformed VIN for auto claims → expect 422

**Rate Limiting & Concurrency:**
- Rapid repeated requests → expect 429 with Retry-After header
- Concurrent requests with same policy number → no duplicate claims created

**"Good" coverage means:** Every HTTP status code your API can return has at least one test. Every business rule violation has a test. Not just the happy path.

---

## SECTION 3 — DB Testing / SQL (10%)

---

### Q13 (Easy) — Query to find duplicate policy numbers?

```sql
SELECT   PolicyNumber,
         COUNT(*) AS DuplicateCount
FROM     Policies
GROUP BY PolicyNumber
HAVING   COUNT(*) > 1
ORDER BY DuplicateCount DESC;
```

To see the full rows of duplicates:
```sql
SELECT *
FROM   Policies
WHERE  PolicyNumber IN (
    SELECT PolicyNumber
    FROM   Policies
    GROUP BY PolicyNumber
    HAVING COUNT(*) > 1
)
ORDER BY PolicyNumber;
```

---

### Q14 (Medium) — Validate backend data after a UI claim status update?

**Your Answer:**

I never trust only the UI — it could show the right status while the DB update failed silently.

**My approach:**

1. **Perform the UI action** — update claim status from OPEN to CLOSED
2. **Query the primary table directly:**
```sql
SELECT ClaimId, Status, UpdatedAt, UpdatedBy
FROM   Claims
WHERE  ClaimId = 'CLM-2024-001';
-- Expect: Status = 'CLOSED', UpdatedAt = recent timestamp
```

3. **Check the audit/history table** (DuckCreek typically has one):
```sql
SELECT *
FROM   ClaimAuditLog
WHERE  ClaimId   = 'CLM-2024-001'
  AND  ChangeType = 'STATUS_UPDATE'
ORDER BY ChangedAt DESC;
-- Expect: a new audit row with OldStatus='OPEN', NewStatus='CLOSED'
```

4. **Check related tables** — does a status change trigger anything else?
```sql
-- Was a notification queued?
SELECT * FROM Notifications WHERE ReferenceId = 'CLM-2024-001';
-- Was the reserve updated?
SELECT * FROM ClaimReserves WHERE ClaimId = 'CLM-2024-001';
```

**In Playwright**, I connect to the DB in an afterEach hook using a lightweight DB client (`pg` for PostgreSQL) to run these checks after the UI action — fully automated.

---

### Q15 (Hard) — Validating ETL job migrating policy data between two systems?

**Your Answer:**

Row count matching is the minimum check — far from sufficient.

**My validation strategy:**

**Level 1 — Count checks:**
```sql
SELECT COUNT(*) FROM SourceDB.Policies;   -- must equal
SELECT COUNT(*) FROM TargetDB.Policies;
```

**Level 2 — Field-by-field reconciliation on critical fields:**
```sql
SELECT s.PolicyNumber,
       s.PremiumAmount    AS SourcePremium,
       t.PremiumAmount    AS TargetPremium,
       s.EffectiveDate    AS SourceDate,
       t.EffectiveDate    AS TargetDate
FROM   SourceDB.Policies s
JOIN   TargetDB.Policies t ON s.PolicyNumber = t.PolicyNumber
WHERE  s.PremiumAmount != t.PremiumAmount   -- precision mismatches
   OR  s.EffectiveDate != t.EffectiveDate;  -- date format issues
```

**Level 3 — Insurance-specific checks:**
- **Decimal precision** — `DECIMAL(10,2)` in source vs `FLOAT` in target → premium values may round differently
- **Null handling** — optional endorsement fields: NULL vs empty string migration
- **Referential integrity** — every ClaimId in Claims table exists in Policies table
```sql
SELECT c.ClaimId
FROM   TargetDB.Claims c
LEFT JOIN TargetDB.Policies p ON c.PolicyNumber = p.PolicyNumber
WHERE  p.PolicyNumber IS NULL;  -- orphaned claims = integrity failure
```
- **Date format** — `DD-MM-YYYY` in legacy system vs `ISO 8601` in new system
- **Sampling** — for large datasets, validate 100% of high-value policies (premium > threshold) + random 5% sample of rest

---

## SECTION 4 — Agile & STLC (10%)

---

### Q16 (Easy) — Your role in sprint grooming before code is written?

**Your Answer:**

Grooming is where QE adds the most value — catching gaps before they become expensive bugs.

My contributions in grooming:

- **Testability review** — "How will we assert this? Is there a hook in the UI or API to verify it?"
- **Acceptance criteria gaps** — "The story says 'user can update claim status' — what are the valid transitions? What happens if they try an invalid one?"
- **Edge cases the dev may not have considered** — boundary values, null inputs, concurrent updates
- **NFR flags** — "This says the claim search should return results — what's the acceptable response time? 2s? 5s?"
- **Test effort estimation** — "This feature touches the payment workflow — that's 3 days of automation, not 1"
- **Definition of Done alignment** — ensuring DoD includes automated tests passing, not just "dev done"

The earlier I catch an ambiguity, the cheaper it is to fix.

---

### Q17 (Medium) — What gets automated in-sprint vs deferred to regression?

**Your Answer:**

**Automate in-sprint:**
- Feature is stable (final UI, no major changes expected)
- Business-critical path (claim creation, login, payment)
- Will be executed repeatedly in regression
- Simple to automate with good ROI

**Defer to regression (or skip automation entirely):**
- UI is still changing — automating a moving target wastes effort
- One-time exploratory scenario — manual is faster
- Very low risk, very low frequency — cost of automation > value
- Test data setup is too complex for the sprint time available

**My rule:** If a test will run more than 5 times in its lifetime, automate it. If it's a one-off verification, do it manually and document the result.

**In DuckCreek context** — during our Katalon-to-Playwright migration, we prioritised automating the claim creation, policy lookup, and payment workflows first (highest business value), and deferred automating edge-case UI validations to later sprints.

---

## SECTION 5 — AI & Agentic QE (30% — MOST IMPORTANT)

---

### Q18 (Easy) — How have you used AI tools in day-to-day testing? Concrete example.

**Your Answer:**

I use Claude and GitHub Copilot regularly — here are two concrete examples:

**Example 1 — Page Object scaffolding:**
During our DuckCreek Katalon-to-Playwright migration, I used Claude to convert Katalon `.groovy` test scripts into Playwright TypeScript Page Object classes. I provided the Groovy file as context and asked for a TypeScript POM class maintaining the same selectors but restructured to Playwright's `Locator` API. This cut initial scaffolding time from ~2 hours per page to ~20 minutes — I then reviewed and corrected any selector mismatches.

**Example 2 — Building Jo, my local AI assistant:**
I built a local AI assistant called Jo using Node.js and the Google Gemini API. It has voice wake-word recognition and system metrics. This taught me firsthand how to structure prompts, handle API responses, and chain tool calls — which directly applies to understanding how AI agents work in a QA context.

**Example 3 — Test case generation from user stories:**
I paste a DuckCreek user story into Claude with the instruction: "Generate Playwright test case names for positive, negative, and edge cases for this feature." I review and select relevant ones — it generates 80% of what I'd write manually in seconds.

**Key point:** I always review AI output before committing it. It accelerates scaffolding — it doesn't replace judgement.

---

### Q19 (Easy) — AI as co-pilot vs AI as agent?

**Your Answer:**

**Co-pilot model:**
- AI suggests, human approves every single action
- Example: GitHub Copilot suggests the next line of code — I press Tab to accept or ignore it
- Human is in the loop at every step
- Low risk — nothing happens without explicit approval

**Agent model:**
- AI can take multiple autonomous steps toward a goal, deciding its own next actions based on results
- Example: I tell an agent "run the smoke suite, triage any failures, and create Jira tickets for real bugs" — it runs the tests, reads the failure logs, classifies each failure, and files tickets — without me approving each individual step
- Human sets the goal and reviews the final output — not each intermediate step

**The key difference:** In co-pilot mode, you approve every action. In agent mode, you approve the goal and review the outcome. The agent decides the path.

**In practice for QA:** We're mostly in co-pilot mode today. Agentic QA (auto-triage, auto-fix) is emerging but requires trust guardrails — which is exactly what Q23-Q26 are about.

---

### Q20 (Medium) — How do you write an effective prompt to generate a test case?

**Your Answer:**

A bad prompt = "Write a test for login." That produces generic, low-value output.

**An effective prompt has 5 components:**

```
1. ROLE/CONTEXT:
"You are a QA automation engineer working on the DuckCreek Claims 
application. We use Playwright with TypeScript and follow the Page 
Object Model pattern."

2. THE FEATURE (paste the actual acceptance criteria):
"User Story: As a claims adjuster, I want to update a claim's status 
from OPEN to CLOSED so that resolved claims are tracked correctly.
Acceptance Criteria:
- Only claims in OPEN or PENDING state can be closed
- Closing a claim requires a mandatory closure reason
- An audit log entry must be created on status change"

3. CONSTRAINTS:
"Do NOT generate tests for the claim creation flow — that's already 
covered. Focus only on the status update workflow."

4. WHAT ALREADY EXISTS:
"We already have: ClaimsListPage.ts, ClaimDetailPage.ts with 
locators for the status dropdown and closure reason field."

5. EXPECTED OUTPUT FORMAT:
"Generate test case names only (no code yet) covering positive, 
negative, and edge cases. Format as a numbered list with a 
one-line description of what each test validates."
```

The more specific the context, the more relevant the output. AI generates generic patterns from vague prompts — and specific, useful tests from specific prompts.

---

### Q21 (Medium) — What does "tool use" mean for an AI agent?

**Your Answer:**

An AI agent on its own can only generate text. "Tool use" is what gives it the ability to interact with the real world.

Tools are functions the agent can call — they're defined with a name, description, and parameter schema. The agent reads the task, reasons about what information it needs, and decides to call a tool to get real data rather than guessing.

**Example — QA agent with tools:**

Tools available: `run_test_suite`, `read_failure_log`, `query_database`, `create_jira_ticket`

When given the task *"Check if the claim creation tests passed and report any failures"*, the agent:
1. Reasons: "I need to run the tests first"
2. Calls `run_test_suite({ tag: '@claims' })`
3. Gets results back — 2 failures found
4. Reasons: "I need to understand why they failed"
5. Calls `read_failure_log({ testName: 'create claim' })`
6. Reads the stack trace — identifies a selector error
7. Reasons: "This looks like a locator issue, not a real bug"
8. Responds with a classification — no Jira ticket needed

The agent didn't guess the failure reason — it called a tool to get real information. That's the key: tool use = grounding the agent in reality, not hallucination.

---

### Q22 (Medium) — One-shot LLM call vs agent loop?

**Your Answer:**

**One-shot call:**
- Single prompt in → single response out → done
- No feedback loop
- Example: "Generate 10 test case names for the login feature" → get names → done
- Works when the task is well-defined and the output doesn't need to be verified

**Agent loop (observe → plan → act → observe):**
- The agent acts, checks the result, then decides what to do next
- Repeats until the goal is met or it gives up
- Example:
```
Goal: "Make the failing smoke test pass"

Loop iteration 1:
  → Observe: test is failing with "element not found"
  → Plan: I need to check if the selector is correct
  → Act: call read_page_source() tool
  → Observe: selector changed from #login-btn to [data-testid="login"]

Loop iteration 2:
  → Plan: update the locator in LoginPage.ts
  → Act: call edit_file() tool
  → Observe: file updated

Loop iteration 3:
  → Plan: verify the fix worked
  → Act: call run_test() tool
  → Observe: test passes ✅
  → Goal met — exit loop
```

**For QA specifically:** One-shot is good for generation tasks (write test names, suggest locators). Agent loops are needed for execution tasks (run tests, analyse failures, decide next action).

---

### Q23 (Hard) — Design an AI agent to triage failing test results automatically?

**Your Answer:**

Here's the step-by-step design:

**Step 1 — Ingest the failure:**
- Read test name, error message, stack trace, screenshot, and video clip
- Tool: `read_test_report({ format: 'junit-xml' })`

**Step 2 — Classify the failure (most critical step):**

| Classification | Signals | Action |
|---|---|---|
| Real Bug | Consistent failure, assertion error on business logic | File Jira defect |
| Flaky Test | Passes on retry, timing-related error | Retry + flag for fix |
| Environment Issue | Network timeout, DB connection refused | Alert DevOps, don't file bug |
| Test Code Wrong | Selector outdated, wrong expected value | Fix test, not product |

**Step 3 — Check history:**
- Tool: `query_test_history({ testName: X, lastNRuns: 20 })`
- If test failed 3 of last 20 runs → likely flaky, not a new bug

**Step 4 — Gather context:**
- For suspected real bugs → `query_database()` to check if data is wrong
- Compare with last passing run's screenshot

**Step 5 — Take action with reasoning:**
- Real bug → `create_jira_ticket()` with screenshot, steps to reproduce, affected test
- Flaky → `add_test_tag({ tag: '@quarantine' })` + notify team
- Environment → `send_alert({ channel: '#devops' })`
- Test code issue → `create_pr_comment()` suggesting the fix

**Critical guardrail:** The agent should **NEVER auto-close or auto-dismiss** a failure without a clear, logged reason. Every automated decision must be auditable — a human must be able to review why the agent made each call.

---

### Q24 (Hard) — What is a hallucination in AI-generated test code? Testing-specific example.

**Your Answer:**

A hallucination is when an AI confidently produces output that looks completely plausible but is factually wrong — it invents something that doesn't exist.

**Testing-specific examples:**

**Example 1 — Invented locator:**
You ask AI to write a Playwright test for DuckCreek's claim form. The AI generates:
```typescript
await page.locator('#claimSubmitButton').click();
```
But the actual element in DuckCreek is `[data-testid="submit-claim"]`. The AI invented a plausible-sounding selector that doesn't exist. The test runs, fails, and looks like a genuine bug until you realise the locator is fabricated.

**Example 2 — Invented API field:**
AI generates an assertion:
```typescript
expect(response.claimReference).toBeDefined();
```
But the actual API returns `claimId`, not `claimReference`. The AI invented a field name that sounds reasonable for an insurance API — but doesn't exist in your actual schema.

**Example 3 — Wrong expected value:**
AI generates: `expect(premiumAmount).toBe(1250.00)` for a test policy. The AI calculated or guessed a premium — but the actual rating engine produces `1347.50` based on state-specific rules the AI doesn't know about.

**How to catch hallucinations:**
- Always run AI-generated tests against the real system before trusting them
- Review every locator against the actual DOM
- Never use AI-generated expected values for business calculations — verify against the spec or a known-good source

---

### Q25 (Hard ⭐ — Most important question in the interview) — AI generates expected results for insurance premium calculation. Can you trust it?

**Your Answer:**

**No. Absolutely not without independent verification.**

This is the most critical judgement call in AI-assisted testing for insurance:

**Why you cannot trust AI for premium calculations:**

Insurance premium calculations are governed by **rating rules** — state-specific, carrier-specific, product-specific mathematical formulas that LLMs do not have access to. An LLM will generate a number that *looks* reasonable based on patterns in its training data, but it has no idea what your carrier's actual rating engine produces for a given risk profile.

**Concrete example:**
- Policy: Auto, 25-year-old driver, Maharashtra, 2020 Honda City, comprehensive
- AI generates expected premium: ₹8,500/year
- Your rating engine produces: ₹11,340/year (because of a specific surcharge rule for the driver age band in that state)
- The AI's number is confidently wrong
- If you use that as your expected value, your test will *fail when the product is correct* — or worse, *pass when the product is calculating wrong*

**Where AI IS appropriate in this context:**
- Scaffolding the test structure (setup, API call, assertion format)
- Generating test case names and scenarios
- Suggesting what fields to validate in the response

**Where AI is NOT appropriate:**
- Generating the expected premium value
- Any domain-specific business rule outcome
- Regulatory compliance assertions

**The rule:** Expected results for business logic must come from the **spec, the rating engine, or an SME** — never from the AI. AI is a scaffolding tool, not a domain oracle.

*(This answer alone separates candidates who "use Copilot" from those who genuinely understand AI's role in QA.)*

---

### Q26 (Hard) — How do you stop AI-generated tests from silently reducing real coverage?

**Your Answer:**

AI can generate tests that *run and pass* but don't actually verify anything meaningful — giving you false confidence.

**The problem in practice:**
```typescript
// AI-generated test that "passes" but catches nothing:
test('claim is created', async ({ page }) => {
  await claimPage.createClaim(data);
  // AI generated: "no error thrown"
  expect(true).toBe(true); // ← this always passes, catches no bugs!
});
```

**My review checkpoints:**

**1. Mandatory assertion review — not just "does it run":**
Every AI-generated test must have a human review the assertion logic specifically. Questions I ask:
- What is this test actually asserting?
- Would this test *fail* if I introduced a bug in the feature?
- Is the expected value derived from the spec — or guessed?

**2. Mutation testing — deliberately break the feature:**
Before trusting a new test, I temporarily break the code it's supposed to test and confirm the test actually catches it:
```typescript
// Temporarily change the production code to return wrong status
// If the test still passes → it's not testing what we think
// If the test fails → good, it's working
```

**3. Check for trivially true assertions:**
```typescript
// ❌ Trivially true — always passes
expect(response.status()).not.toBe(0);

// ✅ Meaningful — fails if API returns wrong status
expect(response.status()).toBe(201);
expect((await response.json()).claimId).toMatch(/^CLM-\d{4}-\d+$/);
```

**4. Coverage diff review in PRs:**
Check that new tests actually exercise new code paths — not just re-testing what existing tests already cover.

**5. Peer review specifically for AI-generated tests:**
Flag them with a comment `// AI-generated — reviewed by [name]` so reviewers know to scrutinise assertion logic extra carefully.

---

### Q27 (Hard) — Concern about feeding real policyholder data into a public AI tool?

**Your Answer:**

This is a serious compliance and legal concern — especially in insurance.

**The risks:**

1. **PII exposure** — policyholder names, addresses, dates of birth, vehicle details, claim amounts are all PII. Sending these to a public AI tool (ChatGPT, Claude.ai) means that data leaves your organisation's security perimeter.

2. **Insurance regulatory requirements** — P&C insurance data is subject to state insurance department regulations, GDPR (if any EU policyholders), and company data classification policies. Most carriers classify policyholder data as Confidential or Restricted — meaning it cannot be shared with third-party services without a data processing agreement.

3. **Model training risk** — some public AI tools use submitted data to improve their models. Real policy data could theoretically surface in responses to other users.

**The fix — always use synthetic/masked data for AI prompts:**

```
❌ Wrong: "Here's a real claim from our system: John Smith, DOB 15/03/1985, 
          Policy POL-2024-001, Premium ₹45,000..."

✅ Right:  "Here's a sample claim structure: Claimant: [NAME], 
          DOB: [DOB], Policy: [POLICY_NUMBER], Premium: [AMOUNT]"
```

**In practice:**
- Use data masking tools to generate synthetic test data that mirrors production structure without real values
- Keep real data inside the organisation's secure environment
- If using AI for test generation, share only the data schema/structure — never real records

**In my work:** For DuckCreek, all AI-assisted test generation uses synthetic policy numbers, dummy claimant names, and generated premium values — never production data.

---

### Q28 (Medium) — Use AI to build regression coverage for insurance platform without generic patterns?

**Your Answer:**

The key is **context injection** — don't ask AI cold, feed it your domain knowledge.

**What NOT to do:**
"Write regression tests for a claims management system."
→ You'll get generic web-app tests that have nothing to do with P&C insurance.

**What TO do:**

**Step 1 — Feed it your actual domain rules:**
```
"Here are the business rules for DuckCreek claim status transitions:
- OPEN → PENDING (when awaiting investigation)
- PENDING → CLOSED (when settlement agreed)
- OPEN → CLOSED (when claim is invalid/withdrawn)
- CLOSED → OPEN is NOT allowed
- Status change requires a mandatory reason code from this list: [...]

Generate test cases covering valid transitions, invalid transitions,
and missing reason code scenarios."
```

**Step 2 — Feed it your existing well-written tests as patterns:**
```
"Here is an example of a well-written test in our framework: [paste test].
Follow this exact pattern (BasePage, fixture setup, assertion style) 
to generate tests for the endorsement update workflow."
```

**Step 3 — Use AI to extend, not invent:**
AI is excellent at saying "here are 8 more edge cases you haven't covered" when given the existing test suite as context. It's poor at generating correct domain logic from scratch.

---

### Q29 (Hard ⭐ — Strong closer) — Manager wants AI to auto-generate AND auto-merge tests before release. What do you say?

**Your Answer:**

I would push back — respectfully but clearly — and here's why:

**My response to the manager:**

"I completely support using AI to accelerate test generation — I do it every day. But auto-merging AI-generated tests without human review, specifically before a release, introduces a risk that's worse than no new tests at all.

**The specific problem:** AI-generated tests can produce false-positive coverage — tests that always pass regardless of whether the feature works correctly. If those tests go straight into the regression suite without review, we get a green pipeline that gives leadership false confidence right at the moment when we need it to be most reliable.

**What can go wrong:**
- AI generates an assertion against a field that doesn't exist → test fails on day 1 (wasted effort)
- AI generates a trivially-true assertion → test always passes, catches nothing → silent coverage gap
- AI uses a hallucinated expected value for a premium calculation → test passes when the rating engine is wrong

**What I propose instead:**
- ✅ AI generates the test scaffolding and scenarios — fast, unblocked
- ✅ QE reviews assertion logic specifically (30 minutes of focused review)
- ✅ Reviewed tests merge via normal PR process
- ✅ If time pressure is extreme, merge only AI tests tagged `@smoke` after human review — defer `@regression` AI tests to the next sprint

The time saving from skipping review is an illusion — one false-confidence failure in production costs far more than 2 hours of assertion review."

**Bottom line:** AI-assisted scaffolding — yes. Unreviewed AI-authored test logic in a pre-release pipeline — no.

---

## SECTION 6 — CI/CD Azure DevOps (10%)

---

### Q30 (Medium) — Integrate Playwright into Azure DevOps pipeline and publish results?

**Your Answer:**

Here's a complete Azure DevOps YAML pipeline for Playwright:

```yaml
# azure-pipelines.yml
trigger:
  branches:
    include: [ main, develop ]

pool:
  vmImage: 'ubuntu-latest'

steps:
  # 1. Install Node.js
  - task: NodeTool@0
    inputs:
      versionSpec: '18.x'

  # 2. Install dependencies
  - script: npm ci
    displayName: 'Install dependencies'

  # 3. Install Playwright browsers
  - script: npx playwright install --with-deps chromium
    displayName: 'Install Playwright browsers'

  # 4. Run tests (with JUnit reporter for Azure DevOps)
  - script: npx playwright test --reporter=junit,html
    displayName: 'Run Playwright tests'
    env:
      CI: 'true'
      BASE_URL:  $(BASE_URL)
      API_TOKEN: $(API_TOKEN)    # from Azure DevOps secret variable
    continueOnError: true        # don't stop — publish results even on failure

  # 5. Publish test results (shows in Build Summary)
  - task: PublishTestResults@2
    inputs:
      testResultsFormat: 'JUnit'
      testResultsFiles:  'test-results/results.xml'
      mergeTestResults:  true
      testRunTitle:      'Playwright E2E Tests'
    condition: always()

  # 6. Publish HTML report and trace files as artifacts
  - task: PublishPipelineArtifact@1
    inputs:
      targetPath:   'playwright-report'
      artifact:     'playwright-report'
      publishLocation: 'pipeline'
    condition: always()
```

**Key points:**
- `continueOnError: true` on the test step — so results are always published even if tests fail
- `condition: always()` on publish steps — ensures artifacts are saved even on failure
- Secrets (tokens, passwords) stored in Azure DevOps variable groups — never hardcoded
- HTML report artifact lets the team view full test results with screenshots without rebuilding

---

### Q31 (Hard) — Pipeline is green but a bug slipped to production. How do you investigate?

**Your Answer:**

I investigate across three possible root causes:

**Root Cause 1 — Test Gap (scenario not covered):**
- Review the bug's user journey — is there a test that exercises this exact flow?
- Check coverage matrix against the acceptance criteria
- If no test existed → gap in coverage → write the missing test, add to DoD checklist

**Root Cause 2 — Pipeline/Environment Gap (test exists but didn't catch it):**
- Did the pipeline run against the right environment? (Dev vs. Staging vs. Prod config)
- Did the pipeline use stale test data that didn't reflect production conditions?
- Was the failing scenario in a test tagged `@slow` or `@nightly` that wasn't included in the release pipeline?
- Did a parallel test run on shared data cause a race condition that masked the failure?

**Root Cause 3 — False Confidence (test ran but didn't actually assert the right thing):**
- Find the test that *should* have caught this bug
- Check its assertion — is it asserting the correct behaviour, or something trivially true?
- This is the most dangerous scenario — the suite looked green but was never testing what we thought

**My immediate actions:**
1. Write a failing test that reproduces the bug → ensures it can't slip through again
2. Identify which of the 3 root causes applied
3. Fix the gap (coverage, environment config, or assertion logic)
4. Document in a post-mortem: "What allowed this to reach production and what prevents recurrence?"

---

## SECTION 7 — Scenario & Behavioral (Bonus)

---

### Q32 — Inherited regression suite with 40% flaky tests, 2 weeks before major release?

**Your Answer:**

I don't panic, and I don't hide the risk. Here's my plan:

**Day 1-2 — Triage:**
- Run the suite 3 times and categorise every failing test:
  - Consistently failing (real bug or broken test)
  - Intermittently failing (flaky)
  - Consistently passing (healthy)
- Tag all flaky tests `@quarantine` — remove from the main pipeline immediately

**Day 3-5 — Fix by priority:**
- Critical business paths first (login, claim creation, payment) — fix or rewrite
- Look for common flakiness patterns — timing issues, shared data, hardcoded waits — fix the pattern, not each test individually
- Tests for non-critical flows → keep quarantined, document risk

**Communicate honestly:**
"Our suite has 40% flaky tests. I've quarantined them to unblock the pipeline. The active suite (60%) is stable and covers [X critical paths]. The quarantined tests represent risk in [Y areas] — I recommend manual verification of those flows before release."

**Never:** Leave flaky tests in the pipeline and call it green. That's false confidence exactly when the business needs real information.

---

### Q33 — Onsite and offshore disagree on whether a defect is a blocker. How do you handle it?

**Your Answer:**

I present evidence, not opinion.

- Document the defect clearly: exact repro steps, frequency, business impact, affected user journey
- Present it factually to both sides: "Here is what happens, here is how often, here is the business consequence if it reaches production"
- Separate my observation from my recommendation: "Based on this evidence, I recommend treating this as a blocker — but the decision belongs to the product owner and release manager"
- If there's still disagreement after presenting evidence, I escalate to the right decision-maker (PM/Release Manager) with the documented risk — and I make sure the risk is recorded in writing regardless of the decision

What I don't do: advocate loudly for my opinion after the evidence is presented, or quietly accept a decision without documenting the risk I raised.

---

### Q34 — Explain to a non-technical stakeholder why AI in testing doesn't mean fewer testers?

**Your Answer:**

*"Think of it like GPS for driving. GPS made driving easier and faster — but it didn't replace drivers. You still need someone who understands the destination, can handle unexpected road closures, and can decide when the GPS is giving bad directions.*

*AI in testing works the same way. It makes a good QE faster — it generates the scaffolding for test cases in minutes instead of hours, suggests edge cases we might have missed, and helps analyse failure logs quickly.*

*But it can't replace what a QE actually does: understanding the business rules well enough to know if a premium calculation is correct, deciding whether a failure is a real bug or an environment issue, knowing what to test in a P&C insurance system that a generic AI has no knowledge of, and ensuring that tests are actually testing the right things rather than just running and passing.*

*AI amplifies a QE's throughput. It doesn't replace the QE's judgement — and in a regulated insurance context, that judgement is exactly what keeps bugs out of production and keeps us compliant."*

---

## SCORECARD — Self-Assessment Guide

| Section | Weight | Key questions to nail |
|---|---|---|
| Playwright | 25% | Q1 auto-wait, Q3 Browser/Context/Page, Q6 flaky debugging |
| API Testing | 15% | Q10 fixture pattern, Q12 insurance-specific negatives |
| DB / SQL | 10% | Q13 GROUP BY HAVING, Q14 audit log validation |
| Agile & STLC | 10% | Q17 what to automate in-sprint |
| **AI & Agentic** | **30%** | **Q25 (premium calc), Q29 (auto-merge), Q23 (triage agent)** |
| CI/CD | 10% | Q30 YAML pipeline, Q31 green pipeline + production bug |

**Highest priority for prep time: Q25, Q29, Q23, Q24, Q26**
These 5 questions are where the interview is won or lost.

