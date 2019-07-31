require("dotenv").config();
const axios = require("axios");

const searchHandle = text => {
  const count = 10;
  let screen_name = text;

  const USER_TOKEN = process.env.TWITTER_TOKEN;
  const baseURL = "https://api.twitter.com/1.1/statuses/user_timeline.json";
  const searchParams = `?screen_name=${screen_name}&count=${count}`;

  const URL = baseURL + searchParams;
  const AuthStr = "Bearer ".concat(USER_TOKEN);

  return axios
    .get(URL, { headers: { Authorization: AuthStr } })
    .then(response => {
      console.log(response.data)
      return response.data;
    })
    .catch(error => {
      console.log("error " + error);
    });
};

module.exports = searchHandle;
