import { Page, ElementHandle } from '@playwright/test';
export class WebActions {
    constructor(public page: Page) { };
    /**
 * Navigates to a specified URL in a web page using the Playwright library.
 * @param page - An instance of the `Page` class from the Playwright library.
 * @param url - A string representing the URL to navigate to.
 */
    async navigateToUrl(url: string): Promise<void> {
        await this.page.goto(url);
    }
    async waitForURL(url: string, timeout = 10000): Promise<void> {
        await this.page.waitForURL(url,{ timeout });
    }
    async waitForLoadState(): Promise<void> {
        await this.page.waitForLoadState();
    }
    async waitForElement(selector: string, timeout = 5000): Promise<void> {
        await this.page.waitForSelector(selector, { timeout });
    }
    async clickElement(selector: string): Promise<void> {
        await this.page.click(selector);
    }

    async fillInputField(selector: string, text: string): Promise<void> {
        await this.page.fill(selector, text);
    }

    async captureScreenshot(path: string): Promise<void> {
        await this.page.screenshot({ path });
    }

    async getElementText(selector: string): Promise<string | null> {
        const element = await this.page.$(selector);
        if (!element) {
            throw new Error(`Element with selector ${selector} not found.`);
        }
        return element.textContent();
    }

    async waitForNavigation(url: string): Promise<void> {
        await this.page.waitForURL(url);
    }

    async doesElementExist(selector: string): Promise<boolean> {
        const element = await this.page.$(selector);
        return !!element;
    }

    async clearInputField(selector: string): Promise<void> {
        await this.page.fill(selector, '');
    }

    async selectDropdownOptionByValue(selector: string, value: string): Promise<void> {
        await this.page.selectOption(selector, { value });
    }

    async hoverOverElement(selector: string): Promise<void> {
        await this.page.hover(selector);
    }

    async rightClickElement(selector: string): Promise<void> {
        await this.page.click(selector, { button: 'right' });
    }

    async getElementAttributeValue(
        page: Page,
        selector: string,
        attributeName: string
    ): Promise<string | null> {
        const element = await this.page.$(selector);
        if (!element) {
            throw new Error(`Element with selector ${selector} not found.`);
        }
        return element.getAttribute(attributeName);
    }

    async getElements(selector: string): Promise<ElementHandle[]> {
        return await this.page.locator(selector).elementHandles();
    }

    async switchToTabOrWindowByIndex(index: number): Promise<void> {
        const pages = await this.page.context().pages();
        if (index >= 0 && index < pages.length) {
            await pages[index].bringToFront();
        } else {
            throw new Error(`Tab or window with index ${index} not found.`);
        }
    }

    async clickAndWaitForNavigation(selector: string): Promise<void> {
        await Promise.all([
            this.page.click(selector),
            this.page.waitForNavigation({ waitUntil: 'domcontentloaded' }),
        ]);
    }

    async scrollElementIntoView(selector: string): Promise<void> {
        const element = await this.page.$(selector);
        if (element) {
            await element.scrollIntoViewIfNeeded();
        }
    }

    async takeScreenshot(fileName: string): Promise<void> {
        await this.page.screenshot({ path: fileName });
    }

    async waitForElementToBeClickable(selector: string): Promise<ElementHandle | null> {
        return this.page.waitForSelector(selector, { state: 'visible' });
    }

    async typeText(selector: string, text: string): Promise<void> {
        await this.page.type(selector, text);
    }

    async pressEnter(selector: string): Promise<void> {
        await this.page.press(selector, 'Enter');
    }

    async pressTab(selector: string): Promise<void> {
        await this.page.press(selector, 'Tab');
    }

    async switchToNewWindow(selector: string): Promise<Page> {
        let [newPage] = [this.page];
        [newPage] = await Promise.all([
          this.page.context().waitForEvent("page"),
          await this.clickElement(selector),
        ]);
        await newPage.waitForLoadState()
        return newPage;
      }

}
module.exports = { WebActions }

