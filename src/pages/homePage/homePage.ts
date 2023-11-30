import { Page } from "@playwright/test";
import { locators } from "./homePageLocators";
import { WebActions } from "../../core/playwright/actions/WebActions";

export default class HomePage {
    page: Page
    webActions: WebActions
    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
    }
    async waitForLoadState() {
        await this.page.waitForLoadState();
    }
    async clickOnMegeMenuToApple() {
        await this.page.hover(locators.megeMenu);
        await this.page.click(locators.apple);
    }

}