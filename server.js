require("dotenv").config();
const express = require("express");
const searchTwitter = require("./api/Search");

const app = express();

app.get("/api/search/:text", (req, res) => {
  const searchText = req.params.text;
  searchTwitter(searchText).then(data => {
    res.json({ message: "Request received!", data });
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});