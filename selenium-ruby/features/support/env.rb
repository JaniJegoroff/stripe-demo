require 'selenium-webdriver'

BASE_URL = 'https://checkout.stripe.dev/preview'.freeze

launch_args = %w[--start-maximized --disable-infobars]
launch_args << '--headless' unless ENV['HEADLESS'].nil?

options = Selenium::WebDriver::Chrome::Options.new(args: launch_args)
$driver = Selenium::WebDriver.for(:chrome, capabilities: [options])

$driver.navigate.to(BASE_URL)
