import { Page } from "@playwright/test";
import { loginLocators } from "./LoginLocators";
import { WebActions } from "../../core/playwright/actions/WebActions";

export default class LoginPage {
    page: Page
    webActions: WebActions

    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
    }

    async gotoPage(baseURl: string): Promise<void> {
        await this.webActions.navigateToUrl(baseURl);
    }

    async waitForURLLoading(baseURl: string): Promise<void> {
        await this.page.waitForLoadState();
        await this.webActions.waitForURL(baseURl);
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();
    }

    async enterEmail(emailAddress: string) {
        await this.page.fill(loginLocators.email, emailAddress);
    }
    async enterLoginPassword(password: string) {
        await this.page.fill(loginLocators.password, password);
    }
    async clickLoginBtn() {
        await this.page.click(loginLocators.loginBtn);
    }
}