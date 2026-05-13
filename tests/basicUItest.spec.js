const { test, expect } = require('@playwright/test');

test("Google Test", async ({ page }) => {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})


test("Rahul Shetty LoginPage Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
    await page.locator("#username").fill("Suraj");
    await page.locator("#password").fill("Learning@830$3mK2");
    await page.locator("#signInBtn").click();
    await expect(page.locator("[style*='block']")).toContainText("Incorrect");
})

test("UI Control Test", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const checkbox = page.locator("#terms");
    await checkbox.click();
    await expect(checkbox).toBeChecked();
});

test("Child window handle", async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const blinkingText = page.locator("[href*='documents-request']");
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        blinkingText.click(),
    ]);

    const text = await newPage.locator(".red").textContent();
    console.log(text);
})

test.only("dropdown handle", async ({ page }) => {
    const documentsLink = page.locator("[href*='documents-request']");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.locator("#username").fill("rahulshettyacademy ");
    await page.locator("#password").fill("Learning@830$3mK2");
    const dropdown = page.locator("select.form-control");
    await dropdown.selectOption("consult");
    await page.locator("span.checkmark").last().click();
    await page.locator("#okayBtn").click();
    await expect(page.locator("span.checkmark").last()).toBeChecked();
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    expect(await page.locator("#terms").isChecked()).toBeTruthy();
    await expect(documentsLink).toHaveAttribute("class","blinkingText");

})