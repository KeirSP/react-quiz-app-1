### React-Quiz-App
## User Stories:
* Who: Anyone
* Purpose: Play a trivia game (alone or with a friend)
* Result: Challenge knowledge & have fun with friend
* Drop-down menu to select config (e.g. users / difficulty / category)
* I would like dropdown menus to choose the topic, category, number of players and number of questions
* I would like to confirm my answers with a submit button
* I would like to go to the next question once I click the answer to the previous question
* I would like to view my results with a view result button 
* I would like to see what questions I got correctly and incorrectly 
* I would like a clean and easy UI
* In multiplayer mode, I would like to know which player got the most correct answers
* In multiplayer mode, I would like to see a leaderboard displaying the results of each player
## Day 1
* Setup CRA & test framework (jest & enzyme)
* Setup Routing in App.js
* Created component for homepage where user selects quiz configuration
* Created component for API call
* Created component for Question View and mapped out the questions retrieved from the API call
## Day 2
### Standup
* Keir: Today work on multi-player functionality. No blocker
* Igor: Possibly add randomisation (answers) function & work on multi-player. No blocker
* Medyen: Work on randomisation & multi-player (form refresh without making API call). No blocker
* Huseyin: Work on randomisation & multi-player. No blocker
* Possibly Mob programming, as not many independent functions
### Update
* Completed randomisation & form. Completed handling of user answers, depending on amount of players. Started looking at submit button feature. Continued with simple testing & reading about tests
## Day 3
### Standup
* Huseyin: Complete submit button. Move onto either testing or results page. Blocker - completing submit button
* Keir: Start working on results page. Possible blocker - data from quiz page needs to be available (once Huseyin has completed)
* Medyen: Start looking into testing. No blockers
* Igor: Continue with testing. No blockers
### Update
* Completed results page, with a leaderboard and answer details. Testing complete to 40% overall coverage. Started some styling
## Day 4
### Standup
* Huseyin: Check to see if I can improve the table rendering code to give unique IDs. Then styling / testing. No blockers
* Keir: Try to finish off styling / testing. No blockers
* Igor: Finish off testing - resolve some bugs. No blockers
* Medyen: Try to finish off styling / testing. No blockers
### Update
Updated styling for last page & fixed issue with testing (question.test.js), getting decent % coverage.
## Day 5
### Standup
Everyone: at most continue with testing, everything else is done and hits brief targets
