def scroll_to_bottom
  $driver.execute_script('window.scrollTo(0, document.body.scrollHeight)')
  sleep 2 # TODO: how to get rid of this?
end
