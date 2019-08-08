require("dotenv").config();
const axios = require("axios");
const parseData = require("./parseData");

const searchHandle = (text, tweetCount) => {
  const count = tweetCount;
  let screen_name = text;

  const USER_TOKEN = process.env.TWITTER_TOKEN;
  const baseURL = "https://api.twitter.com/1.1/statuses/user_timeline.json";
  const searchParams = `?screen_name=${screen_name}&count=${count}`;

  const URL = baseURL + searchParams;
  const AuthStr = `Bearer ${USER_TOKEN}`;

  return axios
    .get(URL, { headers: { Authorization: AuthStr } })
    .then(response => {
      return parseData(response.data);
    })
    .catch(error => {
      console.log("error " + error);
    });
};

module.exports = searchHandle;
