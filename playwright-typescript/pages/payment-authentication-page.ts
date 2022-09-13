import { Locator, Page } from '@playwright/test';

export class PaymentAuthenticationPage {
  readonly page: Page;
  readonly iframe;
  readonly completeButton: Locator;
  readonly failButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.iframe = page.frameLocator('#challengeFrame');
    this.completeButton = this.iframe.locator('#test-source-authorize-3ds');
    this.failButton = this.iframe.locator('#test-source-fail-3ds');
  }

  async complete() {
    await this.completeButton.click();
  }

  async fail() {
    await this.failButton.click();
  }
}
