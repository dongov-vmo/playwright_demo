import { Page } from "@playwright/test";
import { registerLocators } from "./RegisterLocators";
import { WebActions } from "../../core/playwright/actions/WebActions";


export default class RegisterPage {
    page: Page
    webActions: WebActions

    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
    }

    async enterFirstName(firstName: string) {
        await this.page.fill(registerLocators.firstName, firstName);
    }
    async enterLastName(lastName: string) {
        await this.page.fill(registerLocators.lastName, lastName);
    }
    async enterEmail(email: string) {
        await this.page.fill(registerLocators.email, email);
    }
    async enterTelePhone(phone: string) {
        await this.page.fill(registerLocators.phone, phone);
    }
    async enterPassword(password: string) {
        await this.page.fill(registerLocators.password, password);
    }
    async enterConfirmPassword(password: string) {
        await this.page.fill(registerLocators.confirmPassword, password);
    }
    isSubscribeChecked() {
        return this.page.locator(registerLocators.isSubscribe);
    }
    async clickTermAndCondition() {
        await this.page.click(registerLocators.privacyPolicy);
    }
    async clickContinueToRegister() {
        await Promise.all([
            this.page.click(registerLocators.continueBtn)
        ]);
    }
}