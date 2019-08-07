require("dotenv").config();
const axios = require("axios");

const searchTopic = text => {
  const count = 10;
  const type = "recent";
  const lang = "en";
  let query = text;

  const USER_TOKEN = process.env.TWITTER_TOKEN;
  const baseURL = "https://api.twitter.com/1.1/search/tweets.json";
  const searchParams = `?q=${query}&lang=${lang}&result_type=${type}&count=${count}`;

  const URL = baseURL + searchParams;
  const AuthStr = `Bearer ${USER_TOKEN}`;

  return axios
    .get(URL, { headers: { Authorization: AuthStr } })
    .then(response => {
      return response.data.statuses;
    })
    .catch(error => {
      console.log("error " + error);
    });
};

module.exports = searchTopic;
