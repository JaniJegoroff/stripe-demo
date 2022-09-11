Before do |scenario|
  # nop
end

After do |scenario|
  $driver.navigate.refresh
end

at_exit do
  $driver.quit
end
