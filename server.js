require("dotenv").config();
const express = require("express");
const app = express();

app.get("/api/search/:text", (req, res) => {
  const tweets = [
    { id: 1, tweet: "This is one tweet" },
    { id: 2, tweet: "This is two tweet" },
    { id: 3, tweet: "This is three tweet" }
  ];
  // console.log(req.params.text);

  res.send(tweets);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
