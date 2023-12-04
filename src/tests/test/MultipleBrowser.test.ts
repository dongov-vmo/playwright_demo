import { test } from "../base/Fixture";
let newPage:any
test.describe("Demo run multiple browser", async () => {

    test("Multiple Browser @test_05", async ({ browser }) => {
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
    
    test("Multiple Browser @test_06", async ({ loginPage }) => {
        await test.step(`Go to page [https://freelance-learn-automation.vercel.app/login]`, async () => {
            await loginPage.webActions.navigateToUrl(`https://freelance-learn-automation.vercel.app/login`)
        })
        await test.step(`Click to [twitter] icon`, async () => {
            newPage = await loginPage.webActions.switchToNewWindow("div#login_container>div>div>a:nth-of-type(2)")
        })
        await test.step(`Wait for timeout`, async () => {
            await newPage.waitForTimeout(5000)
        })
        await test.step(`Enter data to email of twitter`, async () => {
            await newPage.fill("//input[@dir='auto']", "account02@hotmail.com")
        })
        await test.step(`Wait for timeout`, async () => {
            await loginPage.page.waitForTimeout(5000)
        })
        await test.step(`Enter valid to email`, async () => {
            await loginPage.page.fill("input[name='email1']", "dongov@hotmail.com")
        })
        await test.step(`Click continue button`, async () => {
            await newPage.locator("(//div[@role='button'])[3]").click()
        })
        await test.step(`Wait for timeout`, async () => {
            await loginPage.page.waitForTimeout(5000)
        })
        await test.step(`Enter valid to password`, async () => {
            await loginPage.page.fill("input[type='password']", "12345@!")
        })
        await test.step(`Enter valid to password of twitter`,async () => {
            await newPage.fill("//input[@type='password']","testPassword")
        })
        await test.step(`Wait for timeout`, async () => {
            await newPage.waitForTimeout(5000)
        })
    })
})
