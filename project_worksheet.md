# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description / Wireframes / Priority Matrix / Functional Components | Complete
|Day 1| Core Application Structure (HTML, CSS, React, Db Files) | Complete
|Day 2| Backend Database and Express Routes | Complete
|Day 2| Login and Signup Components | Complete
|Day 3| Converting Sprite Sheets | Complete
|Day 3| Main Menu Component | Complete
|Day 3| Controls Component | Complete
|Day 4| Character Select Page | Complete
|Day 5| Gameplay | Complete
|Day 6| Leaderboards | Complete
|Day 6| MVP | In Progress
|Day 7| Post MVP | Incomplete
|Day 8| Present | Incomplete

## Project Description

https://combat-colosseum.herokuapp.com/ \
Combat Colosseum is an arcade style fighting game where players choose a character and must defeat a series of enemies in 1V1 combat. The enemies will increase in difficulty until the player has defeated them all. If the player suffers too much damage, then their life bar will deplete and they will lose. Players will also be able to create an account to track their highscores and see where they place on the overall leaderboards for the game.

## Wireframes
https://res.cloudinary.com/oneilcampbell/image/upload/v1551198994/20190226_112940.jpg
https://res.cloudinary.com/oneilcampbell/image/upload/v1551198994/20190226_112950.jpg

## Priority Matrix
https://res.cloudinary.com/oneilcampbell/image/upload/v1551198994/20190226_113253.jpg
 
#### MVP 

- Login/Sign-up Page
- Character Select Page
- Arena Page
- Win/Lose State
- Leaderboard/Highscore Page

#### PostMVP 

- Special Fighting Effects
- Sound Effects and Music
- Mutliple Levels
- Powerups
- Multiplayer Mode
- Campaign Mode

## Architectural Design
https://res.cloudinary.com/oneilcampbell/image/upload/v1551198994/20190226_113005.jpg

## ERD
https://res.cloudinary.com/oneilcampbell/image/upload/v1551198994/20190226_113018.jpg

## UI Components

| Component | Description | 
| --- | :---: |  
| Login Page | This will render a form to allow the user to login to their account | 
| Sign-up Page | This will render a form to allow the user to sign up for a new account |
| Main Menu Page | This will render the main page with the game modes and instructions for how to play |
| Controls | This will render a modal with instructions on how to play the game |
| Character Select Page | This will render the page that allows the user to choose their character |
| Gameplay Page | This will render the actual game and control all of the game logic |
| Leaderboards Page | This will render all of the current highest scores in the game as well as the user who acheived that score |

## Time Frames

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Converting Sprite Sheets | H | 5hrs| ~4hrs |
| Creating Backend | H | 3hrs| 1hr |
| Writing & Testing Express Routes | H | 2hrs| 1hr |
| Core Frontend Structure | H | 3hrs| 2hrs |
| Login Page | H | 2hrs| 1hr |
| Sign-up Page | H | 2hrs| 1hr |
| Main Menu Page | H | 5hrs| 2hrs |
| Controls Component | H | 3hrs| 2hrs |
| Character Select Page | H | 5hrs| 4hrs |
| Gameplay | H | 12hrs| ~12hrs |
| Leaderboards | H | 2hrs| 4hrs |
| Total | H | 44hrs| ~38hrs | 


## Helper Functions

| Function | Description | 
| --- | :---: |  
|  |  | 


## Additional Libraries

| Library | What it Does | 
| --- | :---: |  
|  |  | 


## Code Snippet

```

```


## Change Log

| Original Plan | Outcome | 
| --- | :---: |  
| Having one Switch element in App component to control all routes | Having two Switch elements, one for the Homepage, Signup, and Login and one for the actual Game itself. This helped to make the logic cleaner in the App component | 
| Having all character select logic in one component | Created a separate display component for the chosen character, which helps keep the logic cleaner and creates a more dynamic second component that can be reused in other components |


## Issues and Resolutions
