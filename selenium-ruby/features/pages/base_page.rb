class BasePage
  def initialize(world)
    @world = world
  end

  def visible?
    find_ele(id).displayed?
  end

  def switch_to
    $driver.switch_to.frame(id)
  end

  def switch_off
    $driver.switch_to.default_content
  end

  private

  def find_by_id(id)
    $driver.find_element(:id, id)
  end
  alias find_ele find_by_id

  def find_by_class(klass)
    $driver.find_element(:class, klass)
  end

  def find_by_css(css)
    $driver.find_element(:css, css)
  end

  def find_by_xpath(xpath)
    $driver.find_element(:xpath, xpath)
  end

  protected

  def method_missing(method, *args, &block)
    # Pass method call to World object
    @world.send(method, *args, &block)
  end
end
