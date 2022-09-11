import { Locator, Page } from '@playwright/test';

export class PaymentSuccessPage {
  readonly page: Page;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.successMessage = page.locator('h2', { hasText: 'Payment success' });
  }
}
