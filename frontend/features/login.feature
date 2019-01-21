Feature: Login test
  Feature Description: This a sample test

  @smoke
  @test
  @login
  Scenario: Logging in to the symphony
    Given I am on the symphony home page
    When I enter user and password
      And I click sign in button
    Then I should see the login page



