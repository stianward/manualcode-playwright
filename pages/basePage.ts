import { Page } from '@playwright/test';

/**
 * BasePage - Base class for all Page Objects
 * Contains common reusable methods for interacting with pages
 */
export class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string): Promise<void> {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
  }


  async getPageTitle(): Promise<string> {
    return await this.page.title();
  }

  async clickBySelector(selector: string, timeout: number = 10000): Promise<void> {
    const element = this.page.locator(selector);
    await element.waitFor({ state: 'visible', timeout });
    await element.click();
  }

  async fill(selector: string, text: string): Promise<void> {
    await this.page.fill(selector, text);
  }


  async waitForPageReady(timeout: number = 10000): Promise<void> {
    await this.page.waitForLoadState('networkidle', { timeout });
  }

  async waitForURL(urlPattern: string | RegExp): Promise<void> {
    await this.page.waitForURL(urlPattern);
  }
}
