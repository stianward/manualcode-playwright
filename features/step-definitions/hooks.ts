import { Before, After } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from './world';

/**
 * Hooks - Setup and teardown for all scenarios
 */

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: process.env.HEADED !== 'true',
  });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  // Set longer navigation timeout
  this.page.setDefaultNavigationTimeout(30000);
  this.page.setDefaultTimeout(15000);
});

After(async function (this: CustomWorld) {
  await this.context.close();
  await this.browser.close();
});
