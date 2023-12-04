import { expect, test } from "../../base/Fixture";
import * as data from "../../resources/add-to-card-test-data.json"

test.describe("Page object model test demo", async () => {

    test("Add to cart @test_08", async ({ baseURL, loginPage, homePage, specialPage }) => {
        await test.step(`Go to page ${baseURL}route=account/login`, async () => {
            await loginPage.gotoPage(`${baseURL}route=account/login`);
        });
        await test.step(`Enter '${data.email}' / '${data.password}'`, async () => {
            await loginPage.login(data.email, data.password);
        });
        await test.step(`Click on 'Mega Menu' to Apple`, async () => {
            await homePage.clickOnMegaMenuToApple();
        });
        await test.step(`Wait for load state`, async () => {
            await homePage.waitForLoadState();
        });
        await test.step(`Add first product to the cart`, async () => {
            await specialPage.addFirstProductToTheCart();
        });
        await test.step(`Verify is cart visible`, async () => {
            const isCartVisible = await specialPage.isToastVisible();
            expect(isCartVisible).toBeVisible();
        });
    })
})
