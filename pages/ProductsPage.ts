import { expect, Locator, Page } from '@playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly ViewProductButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.ViewProductButton = page.locator('//*[contains(text(), "View Product")]');
  }

  async clickViewProductButton() {
        await this.ViewProductButton.click();
    }
}