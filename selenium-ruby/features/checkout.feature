@checkout
Feature: Checkout

  Background:
    Given I am on Stripe checkout page
    When I enter email
      And I enter name
      And I enter country

  @success
  Scenario: Checkout success, no authentication
    When I enter valid payment card information
      And I submit payment
    Then payment should be processed successfully

  @declined
  Scenario: Checkout declined, no authentication
    When I enter invalid payment card information
      And I submit payment
    Then payment should be declined

  @success @authentication
  Scenario: Checkout success, authentication
    When I enter authentication payment card information
      And I submit payment
      And I complete authentication
    Then payment should be processed successfully

  @declined @authentication
  Scenario: Checkout unsuccessful, authentication failure
    When I enter authentication payment card information
      And I submit payment
      And I fail authentication
    Then payment error message should be displayed
