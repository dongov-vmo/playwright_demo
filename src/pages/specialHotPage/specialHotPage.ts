import { Page } from "@playwright/test";
import { specialHot } from "./specialHotLocators";

export default class SpecialHotpage {
    constructor(public page: Page) { }
    async addFirstProductToTheCart() {
        await this.page.hover(specialHot.imageLink, {
            strict: false
        });
        await this.page.locator(specialHot.addToCart)
            .nth(0).click();
    }
    async isToastVisible(){
        const toast = this.page.locator(specialHot.viewCart);
        await toast.waitFor({state:"visible"});
        return toast;
    }
}