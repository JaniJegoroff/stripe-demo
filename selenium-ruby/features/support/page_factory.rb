#
# Provides instances to page objects
#

def checkout_page
  @checkout_page ||= CheckoutPage.new(self)
end

def payment_success_page
  @payment_success_page ||= PaymentSuccessPage.new(self)
end

def payment_authentication_page
  @payment_authentication_page ||= PaymentAuthenticationPage.new(self)
end
