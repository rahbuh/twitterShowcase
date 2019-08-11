const axios = require("axios");

const KEY = process.env.TWITTER_API_KEY;
const SECRET = process.env.TWITTER_API_SECRET;
const URL = "https://api.twitter.com/oauth2/token";

const data = "grant_type=client_credentials";
const config = {
  auth: {
    username: KEY,
    password: SECRET
  },
  headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    Accept: "application/json"
  }
};

const getToken = async () => {
  return await axios
    .post(URL, data, config)
    .then(response => {
      return response.data.access_token;
    })
    .catch(error => {
      console.log("error: " + error);
    });
};

module.exports = getToken;
