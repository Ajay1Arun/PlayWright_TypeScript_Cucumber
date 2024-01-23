import { Given, When, Then} from "@cucumber/cucumber";
import { Browser, Page, chromium,test } from "@playwright/test";
import LoginPage from "../../../pages/loginPage";

let browser: Browser;
let page: Page;
let loginPage: LoginPage;




// Given step to navigate to the URL
Given('I enter the url as', async  ()=> {
  browser = await chromium.launch({ headless: false });
  page = await browser.newPage();
  loginPage = new LoginPage(page);

  await page.goto('https://www.linkedin.com/home');
  console.log('Login successfully...!')
 });

// When step to enter the username
When('I enter the username as {string}',{ timeout: 10000 }, async function (username: string) {
  await loginPage.enterUsername(username);
});

// When step to enter the password
When('I enter the password as {string}', async function (password: string) {
  await loginPage.enterPassword(password);
});

// When step to click on the login button
When('I click on login button', async function () {
  await loginPage.clickLoginBtn();
});
// After step to close the browser after the scenario
Then('Close the browser', async function () {
  await browser.close();
});

