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
  readonly paymentAuthenticationFailureField: Locator;

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
    // Looks like UI can get 2 texts randomly in the `decline` flow:
    // 1. 'Your card was declined. Please try a different card.'
    // 2. 'Your credit card was declined. Try paying with a debit card instead.'
    this.paymentDeclinedField = this.iframe.locator("//span[@role='alert' and contains(text(),'card was declined.')]");
    this.paymentAuthenticationFailureField = this.iframe.locator("//*[contains(text(),'We are unable to authenticate your payment method. Please choose a different payment method and try again.')]");
  }

  async goto() {
    await this.page.goto('https://checkout.stripe.dev/preview');
  }

  async enterEmail(email: string) {
    await this.emailField.fill(email);
  }

  async enterName(name: string) {
    await this.nameField.fill(name);
  }

  async enterPaymentCardInformation(number: string, expiry: string, cvc: string) {
    await this.cardNumberField.fill(number);
    await this.cardExpiryField.fill(expiry);
    await this.cardCvcField.fill(cvc);
  }

  async enterCountry(zip: string) {
    // use USA as country by default
    await this.regionField.fill(zip);
  }

  async submitPayment() {
    await this.submitButton.click();
  }
}
