export module TestData {
  export const PAYMENT_CARD_NUMBER = {
    valid: '4242424242424242',
    invalid: '4000000000000002',
    authentication: '4000000000003220'
  };
  
  export const PAYMENT_CARD_EXPIRATION_DATE = {
    valid: '1230',
    expired: '1220'
  };
  
  export const PAYMENT_CARD_CVC = {
    valid: '123'
  };
  
  export const PAYMENT_CARD_HOLDER_NAME = {
    valid: 'Satoshi Nakamoto'
  };
  
  export const PAYMENT_CARD_HOLDER_EMAIL = {
    valid: 'satoshi@nakamoto.btc'
  };
  
  export const PAYMENT_CARD_ZIP = {
    valid: '12345'
  };
};
