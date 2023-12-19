# Playwright-tutorial 

# Install:
- Install node
```bash
npm i
```
- Install framework playwright/test

```bash
npx @playwright/test install
```

- Install Allure report
```bash
npm install allure-commandline allure-playwright --save-dev
```

- Run all test with all project
```bash
npm run test
```
- Run all test with project=Google Chome
```bash
npm run test -- --project='Google Chrome'
```

- Run a test
```bash
npx playwright test addToCartUsingFixture.test.ts
```
- Run test with tag
```bash
npx playwright test --grep "@test_02"
```

- Open Allure report
```bash
npm run allureReport
```
# Refer
https://www.youtube.com/watch?v=wawbt1cATsk

https://playwright.dev/docs/test-projects

https://github.com/actions/upload-artifact#zipped-artifact-downloads
