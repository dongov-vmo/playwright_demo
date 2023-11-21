import { Page } from "@playwright/test";
import { registerLocators } from "./registerLocators";

export default class RegisterPage {
    constructor(public page: Page) { }

    async enterFirstName(firstName: string) {
        await this.page.locator(registerLocators.firstName)
            .fill(firstName);
    }
    async enterLastName(lastName: string) {
        await this.page.locator(registerLocators.lastName)
            .fill(lastName);
    }
    async enterEmail(email: string) {
        await this.page.locator(registerLocators.email)
            .fill(email);
    }
    async enterTelePhone(phone: string) {
        await this.page.locator(registerLocators.phone)
            .fill(phone);
    }
    async enterPassword(password: string) {
        await this.page.locator(registerLocators.password)
            .fill(password);
    }
    async enterConfirmPassword(password: string) {
        await this.page.locator(registerLocators.confirmPassword)
            .fill(password);
    }
    isSubscribeChecked() {
        return this.page.locator(registerLocators.isSubscribe);
    }
    async clickTermandCondition() {
        await this.page.click(registerLocators.privacyPolicy);
    }
    async clickContinueToRegister() {
        await Promise.all([
            this.page.click(registerLocators.contunueBtn)
        ]);
    }
}