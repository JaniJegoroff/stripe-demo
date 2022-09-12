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

### How to get started - easy way

1. Create `stripe` account. Make sure you use `test` mode
2. Install `stripe` command line tools (CLI): [Stripe CLI](https://stripe.com/docs/stripe-cli)
3. Login to `stripe` and trigger event `checkout.session.completed`
   ```
   # Triggering this event will prepare customer, price, payment intent etc. data

   $ stripe trigger checkout.session.completed`
   ```
4. You are now ready to run `Stripe-demo` collection tests in `Postman`

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
