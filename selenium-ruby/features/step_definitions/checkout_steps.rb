Given('I am on Stripe checkout page') do
  wait_for { checkout_page.visible? }
  checkout_page.switch_to
end

When('I enter email') do
  checkout_page.enter_email
end

When(/^I enter (\bvalid|invalid|authentication\b) payment card information$/) do |card_type|
  card_type = card_type.to_sym
  checkout_page.enter_payment_card_information(card_number = PAYMENT_CARD_NUMBER[card_type])
end

When('I enter name') do
  checkout_page.enter_name
end

When('I enter country') do
  checkout_page.enter_country
end

When('I submit payment') do
  # Collapse test inputs popup
  checkout_page.switch_off
  checkout_page.collapse_test_inputs
  checkout_page.switch_to

  scroll_to_bottom
  checkout_page.submit_payment
  checkout_page.switch_off
end

Then('payment should be declined') do
  msg = 'Your card was declined. Please try a different card.'
  checkout_page.switch_to
  wait_for { checkout_page.payment_declined_msg.eql?(msg) }
end
