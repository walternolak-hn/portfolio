Feature: Add/Remove Elements to the page

  Background: navigate to add-remove elements page
    Given I am on the add-remove elements page

  Scenario Outline: As a user, I can add elements to the page
    When I add <amount> Elements
    Then <amount> elements are added to the page

    Examples:
      | amount |
      | 1      |
      | 5      |
      | 10     |

  Scenario Outline: As a user, I can delete elements to the page
    And I add <add> Elements
    When I delete <delete> Elements
    Then I should have <result> Elements left

    Examples:
      | add | delete | result |
      | 1   | 1      | 0      |
      | 5   | 3      | 2      |
      | 10  | 5      | 5      |