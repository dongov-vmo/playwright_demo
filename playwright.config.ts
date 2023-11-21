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
   reporter: [["dot"], ["json", {
      outputFile: "jsonReports/jsonReport.json"
   }], ["html", {
      // open report by playwright
      // open: "always"
      open:'never'
   }]]
});
