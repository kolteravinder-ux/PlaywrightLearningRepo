#Run all test
npx playwright test


#Run specific file
npx playwright test tests/login.spec.ts

#Run test with specific browser
npx playwright test tests/login.spec.ts  --project=chromium

#Run in headed mode
npx playwright test tests/login.spec.ts --headed

#Run in debug mode
npx playwright test tests/login.spec.ts --debug

#Run with UI mode
npx playwright test tests/login.spec.ts --ui

#Run show report
npx playwright test tests/login.spec.ts show-report





