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

open Allure report
```bash
npm run allureReport
```