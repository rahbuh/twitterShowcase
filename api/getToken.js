const axios = require("axios");

const getToken = () => {
  const KEY = process.env.TWITTER_API_KEY;
  const SECRET = process.env.TWITTER_API_SECRET;
  const ENCODED_KEY = new Buffer.from(KEY + ":" + SECRET).toString("base64");

  const AuthStr = `Basic ${ENCODED_KEY}`;
  const URL = "https://api.twitter.com/oauth2/token";

  const config = {
    headers: {
      Authorization: AuthStr,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      Accept: "application/json"
    }
  };

  return axios
    .post(URL, "grant_type=client_credentials", config)
    .then(response => {
      return response.data.access_token;
    })
    .catch(error => {
      console.log("error: " + error);
    });
};

module.exports = getToken;
