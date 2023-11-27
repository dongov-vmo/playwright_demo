import { expect, test } from "../../tests/base/pomFixture";
import * as data from "../resources/add-to-card-test-data.json"

test.describe("Page object model test demo", async () => {
  
    test("Add to cart", async ({ page, baseURL, loginPage, homePage, specialPage }) => {

        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
        await page.waitForLoadState();
        await page.waitForURL(`${baseURL}route=account/account`);
        await homePage.clickOnMegeMenuToApple();
        await page.waitForLoadState();
        await specialPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();
    })
})
