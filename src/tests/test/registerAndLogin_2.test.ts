import { navigateToUrl, waitForNavigation } from "../../utils/actions/Basepage.page";
import { expect, test } from "../base/pomFixture";
import * as data from "../resources/add-to-card-test-data.json"
import {faker} from "@faker-js/faker"

const email = faker.internet.email();


test.describe("Page object model test demo", async () => {
    test("Register @test_01", async ({ page, baseURL, registerPage }) => {
        await navigateToUrl(page,`${baseURL}route=account/register`);
        await registerPage.enterFirstName(data.firstname);
        await registerPage.enterLastName(data.lastname);
        await registerPage.enterEmail(email);
        await registerPage.enterTelePhone(data.phone_number);
        await registerPage.enterPassword(data.password);
        await registerPage.enterConfirmPassword(data.password);
        expect(registerPage.isSubscribeChecked()).toBeChecked();
        await registerPage.clickTermAndCondition();
        await registerPage.clickContinueToRegister();
        await waitForNavigation(page, `${baseURL}route=account/success`)
    })

    test("Login @test_02", async ({ page, baseURL, loginPage }) => {
        await navigateToUrl(page,`${baseURL}route=account/login`);
        await test.step(`Login with ${email} / ${data.password}`, async () => {
            await loginPage.enterEmail(email);
            await loginPage.enterLoginPassword(data.password);
        });
        await test.step(`Click on Login button`, async () => {
            await loginPage.clickLoginBtn();
        });
        await test.step(`Wait for 'My account' title page is displayed`, async () => {
            expect(await page.title()).toBe("My Account");
        });
        
       
    })
})
