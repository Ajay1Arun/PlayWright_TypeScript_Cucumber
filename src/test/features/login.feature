Feature: Login Functionality

Scenario: Login Functionality

Given I enter the url as
Given I enter the username as '<username>'
Given I enter the password as '<password>'
When I click on login button
Then Close the browser

 Examples: 
      | url          | username     | password  |
      |https://www.linkedin.com/| username  | password  |
      