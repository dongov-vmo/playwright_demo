import { expect, test } from "../../tests/base/pomFixture";
import * as data from "../resources/add-to-card-test-data.json"

const randomName = Math.floor(Math.random() * 1000);
const email = "automationdev" + randomName + "@hotmail.com";


test.describe("Page object model test demo", async () => {
    test("Register test_01", async ({ page, baseURL, registerPage }) => {
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(email);
        await registerPage.enterTelePhone(data.phone_number);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermandCondition();
        await registerPage.clickContinueToRegister();
        await page.waitForURL(`${baseURL}route=account/success`)
    })

    test("Login test_02", async ({ page, baseURL, loginPage }) => {
        await page.goto(`${baseURL}route=account/login`);
        await loginPage.enterEmail(email);
        await loginPage.enterLoginPassword(data.password);
        await loginPage.clickLoginBtn();
        expect(await page.title()).toBe("My Account");
    })

    test("Add to cart test_03", async ({ page, baseURL, loginPage, homePage, specialPage }) => {

        await page.goto(`${baseURL}route=account/login`);
        await loginPage.login(email, data.password);
        await page.waitForLoadState();
        await page.waitForURL(`${baseURL}route=account/account`);
        await homePage.clickOnMegeMenuToApple();
        await page.waitForLoadState();
        await specialPage.addFirstProductToTheCart();
        const isCartVisible = await specialPage.isToastVisible();
        expect(isCartVisible).toBeVisible();
    })
})
