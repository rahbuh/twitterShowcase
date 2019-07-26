const express = require("express");
const app = express();
import axios from "axios";

app.get("/api/tweets", (req, res) => {
  const tweets = [
    { id: 1, tweet: "This is one tweet" },
    { id: 2, tweet: "This is two tweet" },
    { id: 3, tweet: "This is three tweet" }
  ];
  res.json(tweets);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
