Feature: End to end Ecommerce validation
    @cell
    Scenario: add items to the shopping car
        Given I open Ecommerce page
        When I add items to card
        And Validate the total prices
        Then Select the country and verify thankyou message
    @form
    Scenario: fill form
        Given I open Ecommerce page
        When I fill the form detail
            | name | gender |
            | bob  | Male   |
        Then Validate the form behaviour