import { test as baseTest } from "@playwright/test";
import RegisterPage from  "../../pages/registerPage/registerPage";
import LoginPage from "../../pages/loginPage/loginPage";
import HomePage from "../../pages/homePage/homePage";
import SpecialHotpage from "../../pages/specialHotPage/specialHotPage";


type pages = {
    registerPage: RegisterPage;
    loginPage: LoginPage;
    homePage: HomePage;
    specialPage: SpecialHotpage;
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
        await use(new SpecialHotpage(page));
    }
})

export const test = testPages;
export const expect = testPages.expect;