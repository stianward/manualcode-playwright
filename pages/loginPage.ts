import { expect, Page } from '@playwright/test';
import { BasePage } from './basePage';

/**
 * LoginPage - Page Object for Sauce Labs Login
 * Encapsulates all UI elements and interactions on the login page
 */
export class LoginPage extends BasePage {
  // URL
  readonly loginUrl = 'https://www.saucelabs.com/login';

  // Locators - Specific XPath to avoid strict mode violation
  readonly emailInput = '//input[@type="text"][contains(@class,"form-control login__input")]';
  readonly passwordInput = '//input[@type="password"][contains(@class,"form-control login__input")]';
  readonly submitButton = '//input[@id="loginButton_0"]';
  readonly loginButton = '//button[contains(text(),"Log In")]';
  readonly errorMessage = '//*[contains(text(),"User name/password combination is invalid.")]';
  readonly successIndicator = 'a[href="/dashboard"]';

  constructor(page: Page) {
    super(page);
  }

  /**
   * Navigate to the login page
   */
  async navigateToLoginPage(): Promise<void> {
    await this.goto(this.loginUrl);
  }

  /**
   * Enter email in the email input field
   */
  async enterEmail(email: string): Promise<void> {
    const element = this.page.locator(this.emailInput);
    await element.waitFor({ state: 'visible', timeout: 10000 });
    await this.page.fill(this.emailInput, email);
  }

  /**
   * Enter password in the password input field
   */
  async enterPassword(password: string): Promise<void> {
    const element = this.page.locator(this.passwordInput);
    await element.waitFor({ state: 'visible', timeout: 10000 });
    await this.page.fill(this.passwordInput, password);
  }

  /**
   * Click the submit/login button
   */
  async clickSubmitButton(): Promise<void> {
    await this.clickBySelector(this.submitButton);
  }

  /**
   * Verify error message is displayed
   */
  async verifyErrorMessageDisplayed(expectedMessage: string): Promise<void> {
    const element = this.page.locator(this.errorMessage);
    await element.waitFor({ state: 'visible', timeout: 10000 });
    await expect(element).toBeVisible();
  }

  /**
   * Verify success login by checking confirmation message in errorMessage locator
   */
  async verifyLoginConfirmation(expectedMessage: string): Promise<void> {
    const element = this.page.locator(this.errorMessage);
    await element.waitFor({ state: 'visible', timeout: 10000 });
    const message = await element.textContent();
    expect(message?.toLowerCase()).toContain(expectedMessage.toLowerCase());
  }

  /**
   * Get error message text
   */
  async getErrorMessageText(): Promise<string> {
    const element = this.page.locator(this.errorMessage);
    return await element.textContent() || '';
  }
}
