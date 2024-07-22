Feature: Hovers

  Scenario Outline: As a user, I can Hover over elements to see their additional info

    Given I am on the hovers page
    When I hover over <username>
    Then I can see <username> additional info

    Examples:
      | username |
      | user1    |
      | user2    |
      | user3    |