import { Page } from "@playwright/test";
import { specialHot } from "./SpecialHotLocators";
import { WebActions } from "../../core/playwright/actions/WebActions";

export default class SpecialHotPage {
    page: Page
    webActions: WebActions
    constructor(page: Page) {
        this.page = page
        this.webActions = new WebActions(page);
    }
    async addFirstProductToTheCart() {
        await this.page.hover(specialHot.imageLink, {
            strict: false
        });
        await this.page.locator(specialHot.addToCart)
            .nth(0).click();
    }
    async isToastVisible() {
        const toast = this.page.locator(specialHot.viewCart);
        await toast.waitFor({ state: "visible" });
        return toast;
    }
}