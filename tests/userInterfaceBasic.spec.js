const {test, expect} = require('@playwright/test');

test('First playwright test', async ({browser})=>{
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //await expect(page).toHaveTitle("Google");
    console.log(await page.title());

    const userName = page.locator("input#username");
    const password = page.locator("input#password");
    const signInBtn = page.locator("input#signInBtn");
    const invalidTextLocator = page.locator("[style*='block']");
    const phone = page.locator("//div[@class='card-body']//a");

    await userName.fill("suraj");
    await password.fill("password");
    await signInBtn.click();
    await expect(invalidTextLocator).toContainText("Incorrect");
    console.log(await invalidTextLocator.textContent());

    await userName.fill("");
    await password.fill("");
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    await signInBtn.click();
    //console.log(await phone.nth(0).textContent());
    const allTextContents = await phone.allTextContents();
    console.log(allTextContents);
}

);

test.only("UI Control Test",async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const selectDropDown = page.locator("select.form-control");
    await selectDropDown.selectOption("teach");
    await page.pause();
    
}

);