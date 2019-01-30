const { client } = require('nightwatch-api');
const { Given, When, Then } = require('cucumber');

const loginPage = client.page.login_po();

Given(/^I am on the symphony home page$/, async () => {
  await loginPage.verifyHomePage();
});

When(/^I enter username and password$/, async () => {
  await loginPage.enterLoginCredentials();
});

When(/^I click sign in button$/, async () => {
  await loginPage.clickLoginButton();
});

Then(/^I should be logged in successfully$/, async () => {
  await loginPage.verifyLogin();
});
