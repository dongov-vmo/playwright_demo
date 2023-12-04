import Assert from "../../../core/playwright/asserts/Assert";
import { expect, test } from "../../base/Fixture";
import * as data from "../../resources/add-to-card-test-data.json"
import { faker } from "@faker-js/faker"

const email = faker.internet.email();


test.describe("Page object model test demo", async () => {
    test("Register @test_03", async ({ baseURL, registerPage }) => {
        await test.step(`Go to page ${baseURL}route=account/register`, async () => {
            await registerPage.webActions.navigateToUrl(`${baseURL}route=account/register`);
        })
        await test.step(`Enter '${data.firstName}' to first name field`, async () => {
            await registerPage.enterFirstName(data.firstName);
        })
        await test.step(`Enter '${data.lastName}' to last name field`, async () => {
            await registerPage.enterLastName(data.lastName);
        })
        await test.step(`Enter '${email}' to email field`, async () => {
            await registerPage.enterEmail(email);
        })
        await test.step(`Enter '${data.phoneNumber}' to phone number field`, async () => {
            await registerPage.enterTelePhone(data.phoneNumber);
        })
        await test.step(`Enter '${data.password}' to password field`, async () => {
            await registerPage.enterPassword(data.password);
        })
        await test.step(`Enter '${data.password}' to confirm password field`, async () => {
            await registerPage.enterConfirmPassword(data.password);
        })
        await test.step(`Is subscribe checked`, async () => {
            expect(registerPage.isSubscribeChecked()).toBeChecked();
        })
        await test.step(`Click on 'Term And Condition' checkbox`, async () => {
            await registerPage.clickTermAndCondition();
        })
        await test.step(`Click on 'Continue' button`, async () => {
            await registerPage.clickContinueToRegister();
        })
        await test.step(`Wait for load state`, async () => {
            await registerPage.webActions.waitForLoadState()
        })
        await test.step(`Wait for navigation to page ${baseURL}route=account/success`, async () => {
            await registerPage.webActions.waitForNavigation(`${baseURL}route=account/success`)
        })
    })

    test("Login @test_04", async ({ baseURL, loginPage, homePage }) => {
        await test.step(`Go to page ${baseURL}route=account/login`, async () => {
            await loginPage.gotoPage(`${baseURL}route=account/login`);
        })
        await test.step(`Login with ${email} / ${data.password}`, async () => {
            await loginPage.enterEmail(email);
            await loginPage.enterLoginPassword(data.password);
        });
        await test.step(`Click on 'Login' button`, async () => {
            await loginPage.clickLoginBtn();
        });
        await test.step(`Wait for 'My account' title page is displayed`, async () => {
            await homePage.waitForLoadState()
            expect(await homePage.page.title()).toBe("My Account");
        });
        await test.step(`Wait for 'Data' title page is displayed`, async () => {
            await homePage.waitForLoadState()
            await Assert.assertEquals(
                await homePage.page.title(), "Data"
            );
        });

    })
})
