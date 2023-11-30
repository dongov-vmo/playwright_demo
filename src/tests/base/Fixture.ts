import { test as baseTest } from "@playwright/test";
import RegisterPage from "../../pages/registerPage/RegisterPage";
import LoginPage from "../../pages/loginPage/LoginPage";
import HomePage from "../../pages/homePage/HomePage";
import SpecialHotPage from "../../pages/specialHotPage/SpecialHotPage";


type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    specialPage: SpecialHotPage;
}

const testPages = baseTest.extend<pages>({
    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page));
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    specialPage: async ({ page }, use) => {
        await use(new SpecialHotPage(page));
    }

})

export const test = testPages;
export const expect = testPages.expect;