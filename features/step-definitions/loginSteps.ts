import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { LoginPage } from '../../pages/loginPage';


Given('I navigate to the Sauce Labs login page', async function (this: CustomWorld) {
  const loginPage = new LoginPage(this.page);
  this.loginPage = loginPage;
  await loginPage.navigateToLoginPage();
});

When('An user enter valid credentials with email {string} and password {string}', async function (this: CustomWorld, email: string, password: string) {
  const loginPage = this.loginPage as LoginPage;
  await loginPage.enterEmail(email);
  await loginPage.enterPassword(password);
});

When('I click the submit button', async function (this: CustomWorld) {
  const loginPage = this.loginPage as LoginPage;
  await loginPage.clickSubmitButton();
});

Then('I should see the {string} message', async function (this: CustomWorld, expectedMessage: string) {
  const loginPage = this.loginPage as LoginPage;
  await this.page.waitForTimeout(500);

  await loginPage.verifyLoginConfirmation(expectedMessage);
});

When('I do click on the login button', async function (this: CustomWorld) {
  const loginPage = this.loginPage as LoginPage;
  await loginPage.clickBySelector(loginPage.loginButton);
});
