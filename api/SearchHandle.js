require("dotenv").config();
const axios = require("axios");
const parseData = require("./parseData");

const searchHandle = (screen_name, tweetCount, token) => {
  const baseURL = "https://api.twitter.com/1.1/statuses/user_timeline.json";
  const searchParams = `?screen_name=${screen_name}&count=${tweetCount}`;
  const URL = baseURL + searchParams;
  const AuthStr = `Bearer ${token}`;

  return axios
    .get(URL, { headers: { Authorization: AuthStr } })
    .then(response => {
      if (response.data.length) {
        return parseData(response.data);
      } else {
        return null;
      }
    })
    .catch(error => {
      console.log("Error: " + error.response.statusText);
      console.log("Status: " + error.response.status);
      return null;
    });
};

module.exports = searchHandle;
