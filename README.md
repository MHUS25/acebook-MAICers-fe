[![Build Status](https://travis-ci.org/MHUS25/acebook-maicers-fe.svg?branch=master)](https://travis-ci.org/MHUS25/acebook-maicers-fe)

# Acebook - Front End

Acebook is a Facebook clone we created during a 2 week-long engineering project at Makers Academy. Our Acebook project began as a [full-stack Rails app](https://github.com/Learner5200/acebook-MAICers), but in the second week of the project we were required to divide the app into a [Rails API](https://github.com/imtiyazzaman1/acebook-MAICers-backend) and a React front-end. This repository houses the latter.

## How to Use

To access the app in production, visit http://acebook-maicers-fe.surge.sh/posts in your browser.

## How to contribute

First, clone this repo and run `npm install` to install dependencies.

If you would like to contribute to this project, please open a new branch, and make a pull request with a summary of proposed changes.

### Accessing the app in development

1. To launch the server, run `npm start`
2. Visit http://localhost:3000/posts in your web browser

### Testing

Due to time constraints, this front-end app is not yet thoroughly unit tested.

Run `npx cypress open` to run feature tests. These can be found at `./cypress/integration`

### Continuous Integration

* Travis CI will run on each pull request to ensure it is fit to be merged into the master branch.

### How to deploy
* Run `npm run build`
* Run `cd build` to move to the build directory
* Run `surge` and enter http://acebook-maicers-fe.surge.sh as the domain name
* Visit http://acebook-maicers-fe.surge.sh/posts to see the app.

## Our process

* We used an agile product development process, working in two-day sprints beginning with a team planning session and ending with a team retrospective. We held stand-ups each morning to keep the whole team up to date on our progress.
* We prioritised good agile team-working and product delivery practices, and the achievement of group/individual learning goals, over quantity of features. This was especially true during this second week of the project, where difficulties implementing user authentication with a separate Rails API made it difficult to test and implement all the features of the original full-stack; we therefore decided as a team to prioritise learning the fundamentals of React and the use of a Rails API over the delivery of features.

## Team Members
[**M**una Hussein](https://github.com/MHUS25) |
[**A**nouska Hopkins](https://github.com/ahopkins94) |
[**I**mtiyaz Zaman](https://github.com/imtiyazzaman1)  |
[**C**hris Cooksley](https://github.com/Learner5200)
