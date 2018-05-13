As a victim of police brutality in Euclid, OH
I should be able to quickly and easily submit a complaint
So that the police system will be held accountable

Scenario: I should be able to submit a basic complaint
Given   I navigate to euclidpolicecomplaint.com
When    I enter the basic information about my police incident
And     I click submit
Then    I should be taken to the Euclid police departments page
And     My information should be entered in the form

Scenario: I should be able to opt in to share my complaint information
Given   I navigate to euclidpolicecomplaint.com
When    I enter the basic information about my police incident
And     I check the box to share my complaint information
Then    I should see a message about what will be done with my information
When    I click submit
Then    My information should be shared with the complaint database

Scenario: I should have to verify my identity before submitting the complaint
Given   I navigate to euclidpolicecomplaint.com
When    I click submit
Then    I should be prompted to verify my identity
When    I verify my I identity
And     I click submit
Then    I should be taken to the Euclid police departments page

Scenario: Some verification should occur to make sure I was able to submit the complaint with the police department (v1)
Given   I navigate to euclidpolicecomplaint.com
When    I enter the basic information about my police incident
And     I click submit
Then    I should receive an email
When    I click the link verifying that I submit the report
Then    My information in the database should be updated to show the complaint was submitted

Scenario: Some verification should occur to make sure I was able to submit the complaint with the police department (v2)
Given   I navigate to euclidpolicecomplaint.com
When    I enter the basic information about my police incident
And     I click submit
Then    I should be taken to the Euclid police departments page
When    I submit the form on the police departments page
Then    My information in the database should be updated to show the complaint was submitted
