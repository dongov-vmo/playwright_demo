import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testMatch: ["**/test/**/*.test.ts"],
  use: {

    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    // headless: true,
    headless: false,
    screenshot: "only-on-failure",
    video: "off",
    trace: 'retain-on-failure',
    viewport: { width: 1920, height: 1080 },
  },
  // Reporter configuration
  reporter: [
    ['html', { open: 'never' }], ['line'], // HTML and Line reporters
    ['allure-playwright', {
      detail: true,
      outputFolder: "allure-results",
      suiteTitle: false,
    }],
  ],

  /* Configure projects for major browsers */
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: { ...devices['Desktop Chrome'], trace: process.env.CI ? 'on-first-retry' : 'on-first-retry' },
  //   },

  //   {
  //     name: 'firefox',
  //     use: { ...devices['Desktop Firefox'],channel: 'firefox' }
  //   },

  //   {
  //     name: 'webkit',
  //     use: { ...devices['Desktop Safari'] }
  //   },

  //   /* Test against mobile viewports. */
  //   {
  //     name: 'Mobile Chrome',
  //     use: { ...devices['Pixel 5'] },
  //   },
  //   {
  //     name: 'Mobile Safari',
  //     use: { ...devices['iPhone 12'] },
  //   },

  //   /* Test against branded browsers. */
  //   {
  //     name: 'Microsoft Edge',
  //     use: { ...devices['Desktop Edge'], channel: 'msedge' },
  //   },
  //   {
  //     name: 'Google Chrome',
  //     use: { ...devices['Desktop Chrome'], channel: 'chrome' },
  //   },
  // ]
});
