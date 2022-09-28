require_relative 'base_page'

class CheckoutPage < BasePage
  def id
    'checkout-demo'
  end

  def enter_email(email = PAYMENT_CARD_HOLDER_EMAIL[:valid])
    wait_for { email_field }.send_keys(email)
  end

  def enter_name(name = PAYMENT_CARD_HOLDER_NAME[:valid])
    wait_for { name_field }.send_keys(name)
  end

  def enter_payment_card_information(card_number = PAYMENT_CARD_NUMBER[:valid],
                                     card_expiry = PAYMENT_CARD_EXPIRATION_DATE[:valid],
                                     card_cvc = PAYMENT_CARD_CVC[:valid])
    wait_for { card_number_field }.send_keys(card_number)
    wait_for { card_expiry_field }.send_keys(card_expiry)
    wait_for { card_cvc_field }.send_keys(card_cvc)
  end

  def enter_country(zip = PAYMENT_CARD_ZIP[:valid])
    # use USA as country by default
    wait_for { region_field }.send_keys(zip)
  end

  def submit_payment
    wait_for { submit_button }.click
  end

  def payment_declined_msg
    payment_declined_field.text
  end

  def payment_error_msg
    payment_error_field.text
  end

  def collapse_test_inputs
    wait_for { test_inputs_header }.click
  end

  private

  def email_field
    find_ele('email')
  end

  def name_field
    find_ele('billingName')
  end

  def card_number_field
    find_ele('cardNumber')
  end

  def card_expiry_field
    find_ele('cardExpiry')
  end

  def card_cvc_field
    find_ele('cardCvc')
  end

  def region_field
    find_ele('billingPostalCode')
  end

  def submit_button
    find_by_class('SubmitButton-Shimmer')
  end

  def payment_declined_field
    find_by_xpath("//span[@role='alert']")
  end

  def payment_error_field
    find_by_class('ConfirmPaymentButton-Error')
  end

  def test_inputs_header
    find_by_class('TestInputs-Header')
  end
end
