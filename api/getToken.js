const axios = require("axios");

const KEY = process.env.TWITTER_API_KEY;
const SECRET = process.env.TWITTER_API_SECRET;
const ENCODED_KEY = new Buffer.from(KEY + ":" + SECRET).toString("base64");

const AuthStr = `Basic ${ENCODED_KEY}`;
const URL = "https://api.twitter.com/oauth2/token";

const data = "grant_type=client_credentials"
const config = {
  headers: {
    Authorization: AuthStr,
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    Accept: "application/json"
  }
};

const getToken = () => {
  return axios
    .post(URL, data, config)
    .then(response => {
      console.log(response.data.access_token)
      return response.data.access_token;
    })
    .catch(error => {
      console.log("error: " + error);
    });
};

module.exports = getToken;
