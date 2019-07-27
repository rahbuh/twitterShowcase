require("dotenv").config();
const axios = require("axios");
const express = require("express");
const app = express();

app.get("/api/tweets", (req, res) => {
  // Data to test express-react connection
  const tweets = [
    { id: 1, tweet: "This is one tweet" },
    { id: 2, tweet: "This is two tweet" },
    { id: 3, tweet: "This is three tweet" }
  ];
  res.json(tweets);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  apiCall();
});

const apiCall = () => {
  //   console.log(process.env.TWITTER_TOKEN);
  const USER_TOKEN = process.env.TWITTER_TOKEN;
  const URL =
    "https://api.twitter.com/1.1/search/tweets.json?q=nasa&result_type=popular&count=1";

  const AuthStr = "Bearer ".concat(USER_TOKEN);
  axios
    .get(URL, { headers: { Authorization: AuthStr } })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log("error " + error);
    });
};
