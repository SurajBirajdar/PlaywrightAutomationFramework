const {test, expect} = require('@playwright/test');

test('First playwright test', async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/client");   
    await page.locator("#userEmail").fill("");
    await page.locator("#userPassword").fill("");
    await page.locator("#login").click();
    await page.locator(".card-body b").first().waitFor();
    console.log(await page.locator(".card-body b").allTextContents());
}
);