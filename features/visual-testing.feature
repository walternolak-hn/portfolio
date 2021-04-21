Feature: Demo QA Visual Regression Testing

  Scenario Outline: As a user, I can compare via VRT the UI of different pages for the Book Store Application

    Given I am on the <page> page
    When I save some <page> baseline screenshots
    Then I should see a comparison to see if there are differences in the <page> page

    Examples:
      | page |
      | home |
      | register |
      | login |

    Scenario Outline: As a user, I should see via VRT the UI differences for the Book Store Application deleted elements

    Given I am on the <page> page
    When I delete some elements in the <page> page
    Then I should see a comparison to see if there are differences in the <page> page

    Examples:
      | page |
      | home |
      | register |
      | login |
