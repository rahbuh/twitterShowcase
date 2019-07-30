require("dotenv").config();
const axios = require("axios");

const searchTwitter = searchText => {
  const count = 10;
  const type = "popular";
  const lang = "en";
  let query = searchText;

  const USER_TOKEN = process.env.TWITTER_TOKEN;
  const baseURL = "https://api.twitter.com/1.1/search/tweets.json";
  const searchParams = `?q=${query}&lang=${lang}&result_type=${type}&count=${count}`;

  const URL = baseURL + searchParams;
  const AuthStr = "Bearer ".concat(USER_TOKEN);

  return axios
    .get(URL, { headers: { Authorization: AuthStr } })
    .then(response => {
      return response.data.statuses;
    })
    .catch(error => {
      console.log("error " + error);
    });
};

module.exports = searchTwitter;