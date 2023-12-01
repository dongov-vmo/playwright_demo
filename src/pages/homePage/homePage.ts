import { Page } from "@playwright/test";
import { locators } from "./HomePageLocators";
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
    async switchToNewWindow(selector: string): Promise<Page> {
        let [newPage] = [this.page];
        [newPage] = await Promise.all([
            this.page.context().waitForEvent("page"),
            await this.webActions.clickElement(selector),
        ]);
        return newPage;
    }
}