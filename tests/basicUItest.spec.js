const {test, expect} = require('@playwright/test');

test("Google Test", async ({page}) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})


test.only("Rahul Shetty LoginPage Test", async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await page.locator("#username").fill("Suraj");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
})