import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly iframe;
  readonly emailField: Locator;
  readonly nameField: Locator;
  readonly cardNumberField: Locator;
  readonly cardExpiryField: Locator;
  readonly cardCvcField: Locator;
  readonly regionField: Locator;
  readonly submitButton: Locator;
  readonly paymentDeclinedField: Locator;
  readonly paymentErrorField: Locator;

  constructor(page: Page) {
    this.page = page;
    this.iframe = page.frameLocator('#checkout-demo');
    this.emailField = this.iframe.locator('#email');
    this.nameField = this.iframe.locator('#billingName');
    this.cardNumberField = this.iframe.locator('#cardNumber');
    this.cardExpiryField = this.iframe.locator('#cardExpiry');
    this.cardCvcField = this.iframe.locator('#cardCvc');
    this.regionField = this.iframe.locator('#billingPostalCode');
    this.submitButton = this.iframe.locator('data-testid=hosted-payment-submit-button');
    this.paymentDeclinedField = this.iframe.locator("//span[@role='alert']",
      { hasText: 'Your card was declined. Please try a different card.' });
  }

  async goto() {
    await this.page.goto('https://checkout.stripe.dev/preview');
  }

  async enter_email(email: string) {
    await this.emailField.fill(email);
  }

  async enter_name(name: string) {
    await this.nameField.fill(name);
  }

  async enter_payment_card_information(number: string, expiry: string, cvc: string) {
    await this.cardNumberField.fill(number);
    await this.cardExpiryField.fill(expiry);
    await this.cardCvcField.fill(cvc);
  }

  async enter_country(zip: string) {
    // use USA as country by default
    await this.regionField.fill(zip);
  }

  async submit_payment() {
    await this.submitButton.click();
  }
}
