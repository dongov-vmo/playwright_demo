import { expect, test } from "../../base/Fixture";
import * as data from "../../resources/add-to-card-test-data.json"

test.describe("Page object model test demo", async () => {

    test("Add to cart", async ({ baseURL, loginPage, homePage, specialPage }) => {
        await loginPage.gotoPage(`${baseURL}route=account/login`);
        await loginPage.login(data.email, data.password);
        await loginPage.waitForURLLoading(`${baseURL}route=account/account`);
        await homePage.clickOnMegeMenuToApple();
        await homePage.waitForLoadState();
        await specialPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();
    })
})
