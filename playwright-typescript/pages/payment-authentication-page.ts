import { Locator, Page } from '@playwright/test';

export class PaymentAuthenticationPage {
  readonly page: Page;
  readonly checkoutFrame;
  readonly authenticationFrame;
  readonly completeButton: Locator;
  readonly failButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutFrame = page.frameLocator('#checkout-demo');
    this.authenticationFrame = this.checkoutFrame.frameLocator('iframe[src^="https://js.stripe.com/v3/three-ds-2-challenge"]').nth(0).frameLocator('iframe#challengeFrame');
    this.completeButton = this.authenticationFrame.locator('#test-source-authorize-3ds');
    this.failButton = this.authenticationFrame.locator('#test-source-fail-3ds');
  }

  async complete() {
    await this.completeButton.click();
  }

  async fail() {
    await this.failButton.click();
  }
}
