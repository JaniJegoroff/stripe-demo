import { Locator, Page } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
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
    this.emailField = page.frameLocator('#checkout-demo').locator('#email');
    this.nameField = page.frameLocator('#checkout-demo').locator('#billingName');
    this.cardNumberField = page.frameLocator('#checkout-demo').locator('#cardNumber');
    this.cardExpiryField = page.frameLocator('#checkout-demo').locator('#cardExpiry');
    this.cardCvcField = page.frameLocator('#checkout-demo').locator('#cardCvc');
    this.regionField = page.frameLocator('#checkout-demo').locator('#billingPostalCode');
    this.submitButton = page.frameLocator('#checkout-demo').locator('data-testid=hosted-payment-submit-button');
    this.paymentDeclinedField = page.frameLocator('#checkout-demo').locator("//span[@role='alert']",
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
