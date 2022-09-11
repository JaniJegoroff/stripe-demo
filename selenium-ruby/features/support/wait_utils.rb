def wait_for(opts = {})
  timeout = opts.fetch(:timeout) { 10 }
  wait = Selenium::WebDriver::Wait.new(timeout: timeout)
  wait.until { yield }
end
