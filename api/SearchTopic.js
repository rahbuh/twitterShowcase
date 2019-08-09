require("dotenv").config();
const axios = require("axios");
const parseData = require("./parseData");

const searchTopic = (query, token) => {
  const count = 10;
  const type = "recent";
  const lang = "en";

  const baseURL = "https://api.twitter.com/1.1/search/tweets.json";
  const searchParams = `?q=${query}&lang=${lang}&result_type=${type}&count=${count}`;
  const URL = baseURL + searchParams;
  const AuthStr = `Bearer ${token}`;

  return axios
    .get(URL, { headers: { Authorization: AuthStr } })
    .then(response => {
      if (response.data.statuses.length) {
        return parseData(response.data.statuses);
      } else {
        return null;
      }
    })
    .catch(error => {
      console.log("Error: " + error.response.statusText);
      console.log("Status: " + error.response.status);
    });
};

module.exports = searchTopic;
