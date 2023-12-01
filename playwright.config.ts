import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testMatch: ["**/test/**/*.test.ts"],
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    // headless: true,
    headless: false,
    screenshot: "on",
    video: "off",
    trace: 'retain-on-failure',
    viewport: { width: 1920, height: 1080 },
  },
  // fullyParallel: true,
  workers: 3,
  // Reporter configuration
  reporter: [
    ['html', { open: 'never' }],
    ['list'],
    ['./src/core/supports/logger/./reportConfig.ts'], // HTML and Line reporters
    ['allure-playwright', {
      detail: true,
      outputFolder: "allure-results",
      suiteTitle: false,
    }],
  ],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
      testMatch: ["**/test/chrome/*.test.ts"],
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        channel: 'firefox',
        viewport: { width: 1920, height: 1080 },
      }
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
      testMatch: ["**/test/webkit/*.test.ts"],
    },

    /* Test against mobile viewports. */
    {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    },

    /* Test against branded browsers. */
    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'Google Chrome',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chrome',
        viewport: { width: 1920, height: 1080 },
      },
    },
  ]
});
