import { Page } from "@playwright/test";
import { locators } from "./homePageLocators";

export default class HomePage {
    constructor(public page: Page) { }

    async clickOnMegeMenuToApple() {
        await this.page.hover(locators.megeMenu);
        await this.page.click(locators.apple);
    }
}