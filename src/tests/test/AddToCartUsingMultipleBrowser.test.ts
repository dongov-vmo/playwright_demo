import { expect, test } from "../base/Fixture";
import * as data from "../resources/add-to-card-test-data.json"

test.describe("Page object model test demo", async () => {

    test("Add to cart @test_05", async ({ browser}) => {
        const context = browser.newContext()
        const pageNew = await (await context).newPage()
        await pageNew.goto(`https://freelance-learn-automation.vercel.app/login`)
        const [newPage] = await Promise.all
            (
                [
                    (await context).waitForEvent("page"),
                    await pageNew.locator("div#login_container>div>div>a:nth-of-type(2)").click(),
                ]
            )
        await newPage.waitForTimeout(5000)
        await newPage.fill("//input[@dir='auto']", "account02@hotmail.com")
        await pageNew.waitForTimeout(5000)
        await pageNew.fill("input[name='email1']", "dongov@hotmail.com")
        await newPage.locator("(//div[@role='button'])[3]").click()
        await pageNew.waitForTimeout(5000)
        await pageNew.fill("input[type='password']", "12345@!")
    })
})
