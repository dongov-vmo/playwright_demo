# playwright-tutorial 
install:
Install node
```bash
npm i
```
Install framework playwright/test

```bash
npx @playwright/test install
```

Install Allure report
```bash
npm install allure-commandline allure-playwright --save-dev
```

Run all test
```bash
npm run test
```
Run a test
```bash
npx playwright test addToCartUsingFixture.test.ts
```
Run test with tag
```bash
npx playwright test --grep "@test_02"
```

open Allure report
```bash
npm run allureReport
```
refer
https://www.youtube.com/watch?v=wawbt1cATsk
https://playwright.dev/docs/test-projects

