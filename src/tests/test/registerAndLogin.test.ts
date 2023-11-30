
import { expect, test } from "../base/pomFixture";
import * as data from "../resources/add-to-card-test-data.json"

const randomName = Math.floor(Math.random() * 1000);
const email = "playwright_ts_" + randomName + "@hotmail.com";


test.describe("Page object model test demo", async () => {
    test("Register @test_01 webkit", async ({baseURL, registerPage }) => {
        await registerPage.webActions.navigateToUrl(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstName);
        await registerPage.enterLastName(data.firstName);
        await registerPage.enterEmail(email);
        await registerPage.enterTelePhone(data.phoneNumber);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermAndCondition();
        await registerPage.clickContinueToRegister();
        await registerPage.webActions.waitForNavigation(`${baseURL}route=account/success`)
    })

    test("Login @test_02", async ({baseURL, loginPage, homePage }) => {
        await loginPage.webActions.navigateToUrl(`${baseURL}route=account/login`);
        await loginPage.enterEmail(email);
        await loginPage.enterLoginPassword(data.password);
        await loginPage.clickLoginBtn();
        await homePage.waitForLoadState();
        expect(await homePage.page.title()).toBe("My Account");
    })
})
