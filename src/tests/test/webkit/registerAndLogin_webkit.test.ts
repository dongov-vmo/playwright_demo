import Assert from "../../../core/playwright/asserts/Assert";
import { expect, test } from "../../base/pomFixture";
import * as data from "../../resources/add-to-card-test-data.json"
import { faker } from "@faker-js/faker"

const email = faker.internet.email();


test.describe("Page object model test demo", async () => {
    test("Register @test_03", async ({ baseURL, registerPage }) => {
        await registerPage.webActions.navigateToUrl(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstName);
        await registerPage.enterLastName(data.lastName);
        await registerPage.enterEmail(email);
        await registerPage.enterTelePhone(data.phoneNumber);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermAndCondition();
        await registerPage.clickContinueToRegister();
        await registerPage.webActions.waitForLoadState()
        await registerPage.webActions.waitForNavigation(`${baseURL}route=account/success`)
    })

    test("Login @test_04", async ({ baseURL, loginPage, homePage }) => {
        await loginPage.gotoPage(`${baseURL}route=account/login`);
        await test.step(`Login with ${email} / ${data.password}`, async () => {
            await loginPage.enterEmail(email);
            await loginPage.enterLoginPassword(data.password);
        });
        await test.step(`Click on Login button`, async () => {
            await loginPage.clickLoginBtn();
        });
        await test.step(`Wait for 'My account' title page is displayed`, async () => {
            await homePage.waitForLoadState()
            expect(await homePage.page.title()).toBe("My Account");
        });
        await test.step(`Wait for 'Data' title page is displayed`, async () => {
            await homePage.waitForLoadState()
            await Assert.assertEquals(
                await homePage.page.title(),"Data"
            );
        });

    })
})
