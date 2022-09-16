import { test, expect, Page } from '@playwright/test';
import { TestData } from '../test-data';
import { CheckoutPage } from '../pages/checkout-page';
import { PaymentSuccessPage } from '../pages/payment-success-page';
import { PaymentAuthenticationPage } from '../pages/payment-authentication-page';

test.describe('Checkout Success', () => {
  test.beforeEach(async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.goto();

    await enterBillingContactDetails(page);
  });

  test('no authentication @success', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await enterBillingCardDetails(page, 'valid', 'valid', 'valid');
    await checkoutPage.submit_payment();

    const paymentSuccessPage = new PaymentSuccessPage(page);
    await expect(paymentSuccessPage.successMessage).toBeVisible();
  });

  test('authentication @success @authentication', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await enterBillingCardDetails(page, 'authentication', 'valid', 'valid');
    await checkoutPage.submit_payment();

    const paymentAuthenticationPage = new PaymentAuthenticationPage(page);
    await paymentAuthenticationPage.complete();

    const paymentSuccessPage = new PaymentSuccessPage(page);
    await expect(paymentSuccessPage.successMessage).toBeVisible();
  });
});

test.describe('Checkout Declined', () => {
  test.beforeEach(async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.goto();

    await enterBillingContactDetails(page);
  });

  test('no authentication @declined', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await enterBillingCardDetails(page, 'invalid', 'valid', 'valid');
    await checkoutPage.submit_payment();

    await expect(checkoutPage.paymentDeclinedField).toBeVisible();
  });

  test.skip('authentication @declined @authentication', async ({ page }) => {
    const checkoutPage = new CheckoutPage(page);

    await enterBillingCardDetails(page, 'authentication', 'valid', 'valid');
    await checkoutPage.submit_payment();

    const paymentAuthenticationPage = new PaymentAuthenticationPage(page);
    await paymentAuthenticationPage.fail();

    const paymentSuccessPage = new PaymentSuccessPage(page);
    await expect(paymentSuccessPage.successMessage).toBeVisible();
  });
});

async function enterBillingContactDetails(page: Page) {
  const checkoutPage = new CheckoutPage(page);

  await checkoutPage.enter_email(TestData.PAYMENT_CARD_HOLDER_EMAIL['valid']);
  await checkoutPage.enter_name(TestData.PAYMENT_CARD_HOLDER_NAME['valid']);
  await checkoutPage.enter_country(TestData.PAYMENT_CARD_ZIP['valid']);
}

async function enterBillingCardDetails(page: Page, 
                                       cardNumberData: string,
                                       cardExpirationData: string,
                                       cardCvcData: string) {
  const checkoutPage = new CheckoutPage(page);

  await checkoutPage.enter_payment_card_information(
    TestData.PAYMENT_CARD_NUMBER[cardNumberData], 
    TestData.PAYMENT_CARD_EXPIRATION_DATE[cardExpirationData], 
    TestData.PAYMENT_CARD_CVC[cardCvcData]);
}
