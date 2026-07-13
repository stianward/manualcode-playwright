Feature: User Login to Sauce Labs
  As a user
  I want to login to Sauce Labs platform
  So that I can access my testing account

  Scenario Outline: Verify login with different user credentials
    Given I navigate to the Sauce Labs login page
    When An user enter valid credentials with email "<email>" and password "<password>"
    And I click the submit button
    Then I should see the "<expectedResult>" message

    Examples:
      | email                 | password      | expectedResult                             |
      | invalid_user@test.com | wrongpassword | user name/password combination is invalid. |
