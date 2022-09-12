# postman-api example

### Tested setup

```
macOS Monterey
12.6
```
```
Stripe CLI
stripe version 1.12.0
```
```
Postman
Version 9.31.0 (9.31.0)
```

### How to get started - prerequisites

1. Create `stripe` account. Make sure you use `test` mode
2. Install `stripe` command line tools (CLI): [Stripe CLI](https://stripe.com/docs/stripe-cli)

### How to get started - easy way

1. Login to `stripe CLI` and trigger event `checkout.session.completed`
   ```
   # Triggering this event will prepare customer, product, price, payment intent etc. data

   $ stripe trigger checkout.session.completed
   ```
2. You are now ready to run `Stripe-demo` collection tests in `Postman`

### How to get started - hard way

1. Setup all required data like customer, product, price, payment intent etc in your `stripe` dashboard or call required API's to make things happen.

### Postman environment variables

base-url
```
https://api.stripe.com
```

api-key-public
```
<your-stripe-account-api-key>
```

api-key-secret
```
<your-stripe-account-api-key>
```

### Run tests in Postman

1. Import Postman collection
2. Set required environment variables
3. Run test set in `Stripe-demo` collection
