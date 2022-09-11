import { Locator, Page } from '@playwright/test';

export class PaymentAuthenticationPage {
  readonly page: Page;
  readonly completeButton: Locator;
  readonly failButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.completeButton = page.frameLocator('frame[id="challengeFrame"]').locator('#test-source-authorize-3ds');
    this.failButton = page.frameLocator('frame[id="challengeFrame"]').locator('#test-source-fail-3ds');
  }

  async complete() {
    await this.completeButton.click();
  }

  async fail() {
    await this.failButton.click();
  }
}
