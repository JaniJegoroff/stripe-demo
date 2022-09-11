require_relative 'base_page'

class PaymentSuccessPage < BasePage
  def id
    'ChromeDialog-Dialog'
  end

  def visible?
    wait_for { find_by_class(id) }
    wait_for { find_by_css('h2').text == 'Payment success' }
  end
end
