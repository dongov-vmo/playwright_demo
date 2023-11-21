import { Page } from "@playwright/test";
import { loginLocators } from "./LoginLocators";

export default class LoginPage {
    constructor(public page: Page) { }

    async login(email: string, password: string){
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(emailAddress: string) {
        await this.page.locator(loginLocators.email)
            .fill(emailAddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.locator(loginLocators.password)
            .fill(password);
    }
    async clickLoginBtn() {
        await this.page.click(loginLocators.loginBtn);
    }
}