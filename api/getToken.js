const axios = require("axios");
const encode = require("./encode");

const getToken = () => {
  const API_KEY = "DPw142XkEtuLhB7pmvkkPGbJy";
  const API_SECRET = "wqNckqCVeSjmVLueQxLwodUlQqUtBHl3ZaOnDEnFKNPI9SLw0g";
  const encodedKey = encode(API_KEY + ":" + API_SECRET);

  const AuthStr = `Basic ${encodedKey}`;
  console.log(AuthStr);

  const URL = "https://api.twitter.com/oauth2/token";

  return axios
    .post(URL, {
      headers: {
        Authorization: AuthStr,
        'Content-Type': "application/x-www-form-urlencoded;charset=UTF-8"
      },
      data: {'grant_type': 'client_credentials'}
    })
    .then(response => {
      return(response);
    })
    .catch(error => {
      console.log("error " + error);
    });
};

module.exports = getToken;
