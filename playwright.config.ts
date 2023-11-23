import {defineConfig} from '@playwright/test';

export default defineConfig({
   testMatch: ["**/test/**/*.test.ts"],
   use: {

      baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
      // headless: true,
      headless: false,
      screenshot: "only-on-failure",
      video: "retain-on-failure",
      trace: 'on-first-retry',
      launchOptions: {
         args: ["--start-maximized"]
       }
   },
   
   /* Run tests in files in parallel */
//   fullyParallel: true,
//   retries:1,
   // ************************************************** 

     // Reporter configuration
  reporter: [
   ['html', {open:'never'}],['line'], // HTML and Line reporters
   ['./reportConfig.ts'], // Custom reporter configuration file
   ['allure-playwright', {
     detail: true,
     outputFolder: "allure-results",
     suiteTitle: false,
   }],
 ],
});
