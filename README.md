# Twitter Showcase

_A website to showcase Tweets using React and Node._

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
View live on Heroku <a href="https://twitter-showcase.herokuapp.com/" target="_blank">HERE</a>.

<img src="./readme-images/screenshot.png" width="600">

## Summary
Twitter Showcase is a single page application (SPA) that allows the user to search Twitter for tweets by topic or from a specific user. The user can also view a random tweet from several preselected accounts. The primary purpose of this project is to serve as a learning tool to familiarize myself with APIs. In addition, this project has helped me create foundational skills in React and Express. The application uses Twitter's Standard APIs for retrieving tweet data.

<img src="./readme-images/react.svg" width="50">&nbsp;&nbsp;
<img src="./readme-images/javascript.svg" width="50">&nbsp;&nbsp;
<img src="./readme-images/node.png" width="60">&nbsp;&nbsp;
<img src="./readme-images/html-5.svg" width="50">&nbsp;&nbsp;
<img src="./readme-images/css-3.svg" width="50">&nbsp;&nbsp;
<img src="./readme-images/postman.svg" width="50">&nbsp;&nbsp;
<img src="./readme-images/heroku.svg" width="40">

### Technical
- Front End (JavaScript)
  - React (main SPA)
  - Axios (HTTP requests)
- Back End (Node)
  - Express (Serving static site, internal API endpoints)
  - Axios (HTTP requests)
- Hosts
  - Heroku

### Prerequisites

- To run Twitter Showcase from your local computer, you need to sign up for a [Twitter developer account](https://developer.twitter.com) 
- Once logged in to your developer account, select Apps from the dropdown menu next to your name in the upper right-hand corner.
- Select 'Create an app' button and fill out the requested information. 
- Once your app has been created, select the 'Details' button and choose the 'Keys and tokens' tab.
- On the 'Keys and tokens' tab, you will find your Consumer API keys. Copy these keys to their respective variables in the `.env.sample` file.
- Save and rename `.env.sample` to `.env`

You need to have node/npm installed on your machine to run the app locally. To install node, go to https://nodejs.org/

### Install

- From the root directory, run: `npm install`
- cd into /client and run: `npm install`
- once installed, to start the application, from the root directory run: `npm run dev`

### Resources Used
- <a href="https://www.udemy.com/modern-react-front-to-back/" target="_blank">Udemy - React Front To Back 2019 by  Brad Traversy</a>
- <a href="https://scrimba.com/g/glearnreact" target="_blank">Scrimba - Learn React for free</a>
- <a href="https://developer.twitter.com/en/docs.html" target="_blank">Twitter API Documentation</a>
- <a href="https://www.npmjs.com/package/axios" target="_blank">Axios project page</a>