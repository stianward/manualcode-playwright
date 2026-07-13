import { Browser, BrowserContext, Page } from '@playwright/test';
import { World, IWorldOptions } from '@cucumber/cucumber';
import { LoginPage } from '../../pages/loginPage';

/**
 * CustomWorld - Shared context for all step definitions
 * Contains browser instances and page objects
 */
export class CustomWorld extends World {
  public browser!: Browser;
  public context!: BrowserContext;
  public page!: Page;
  public loginPage!: LoginPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}
