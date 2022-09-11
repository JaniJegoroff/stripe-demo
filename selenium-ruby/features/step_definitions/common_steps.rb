When(/^I (\bcomplete|fail\b) authentication$/) do |action|
  action = action.to_sym
  checkout_page.switch_to
  sleep 5 # TODO: how to get rid of this?
  $driver.switch_to.frame(0)
  payment_authentication_page.switch_to
  payment_authentication_page.send(action)
  payment_authentication_page.switch_off
end

Then('payment should be processed successfully') do
  wait_for { payment_success_page.visible? }
end

Then('payment error message should be displayed') do
  msg = 'We are unable to authenticate your payment method. '\
        'Please choose a different payment method and try again.'
  checkout_page.switch_to
  wait_for { checkout_page.payment_error_msg.eql?(msg) }
end
