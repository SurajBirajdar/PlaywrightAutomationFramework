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
/*
═════════════════════════════════════════════════════════════════════
                    EXPLANATION IN LAYMAN'S TERMS
═════════════════════════════════════════════════════════════════════
1. test() - This is like a "TEST CASE" or a "TEST SCENARIO"
   ➜ It's a container where you write all the steps you want to automate
   ➜ Like writing a story: "First, I will do this, then that, then this"
   ➜ Think of it as one complete user journey you want to test

2. page.goto() - This is like "OPENING A WEBSITE"
   ➜ Same as typing a URL in your browser's address bar
   ➜ page.goto("https://rahulshettyacademy.com/client") = Open this website
   ➜ It navigates/jumps to the website you specify

3. page.locator() - This is like "FINDING SOMETHING ON THE PAGE"
   ➜ It's a search tool to find elements/boxes/buttons on the website
   ➜ You can find them by ID (#userEmail), CSS class (.card-body), etc.
   ➜ Think of it as pointing at a specific thing on the screen and saying "That one!"

4. .fill() - This is like "TYPING TEXT INTO A BOX"
   ➜ Same as clicking on an input field and typing your email or password
   ➜ .fill("surajbirajdar0371@gmail.com") = Type this text into the found box
   ➜ It automatically fills the text without you clicking and typing manually

5. .click() - This is like "PRESSING/CLICKING A BUTTON"
   ➜ Same as using your mouse to click on a button
   ➜ When you find an element with locator, click() presses it
   ➜ Like clicking the "Login" button after entering credentials

6. .first() - This is like "PICKING THE FIRST ONE FROM MULTIPLE ITEMS"
   ➜ When locator finds multiple elements, .first() selects the first occurrence
   ➜ If you find 10 boxes, .first() picks box #1
   ➜ Useful when you have many similar elements on the page

7. .waitFor() - This is like "WAITING FOR SOMETHING TO APPEAR"
   ➜ Same as standing in a queue and waiting for your turn
   ➜ It pauses the test and waits until an element loads/appears
   ➜ Prevents errors by making sure the element exists before using it

8. .allTextContents() - This is like "READING ALL THE TEXT FROM ITEMS"
   ➜ It extracts and reads all the text content from the found elements
   ➜ If you have 5 product cards, it reads text from all 5
   ➜ Returns all text as an array (a list)

9. console.log() - This is like "PRINTING/DISPLAYING INFORMATION"
   ➜ It prints the result to the console/terminal screen
   ➜ Like saying "Show me what you found!"
   ➜ Helpful for debugging and seeing what data you collected

10. async/await - This is like "DO THIS TASK, THEN DO THE NEXT"
    ➜ async = This function will have waiting periods
    ➜ await = Wait for this action to complete, then move to the next line
    ➜ Without await, your test might click before the page loads = FAILURE!

═════════════════════════════════════════════════════════════════════
                         SIMPLE WORKFLOW:
═════════════════════════════════════════════════════════════════════
1. Open the website (goto)
2. Find the email box (locator)
3. Type email (fill)
4. Find the password box (locator)
5. Type password (fill)
6. Find and click the Login button (locator + click)
7. Wait for product cards to appear (waitFor)
8. Read all product names (allTextContents)
9. Print them to console (console.log)
═════════════════════════════════════════════════════════════════════
*/