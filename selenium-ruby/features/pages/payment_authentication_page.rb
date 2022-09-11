require_relative 'base_page'

class PaymentAuthenticationPage < BasePage
  def id
    'challengeFrame'
  end

  def complete
    $driver.execute_script('arguments[0].click();', complete_button)
  end

  def fail
    $driver.execute_script('arguments[0].click();', fail_button)
  end

  private

  def complete_button
    find_ele('test-source-authorize-3ds')
  end

  def fail_button
    find_ele('test-source-fail-3ds')
  end
end
