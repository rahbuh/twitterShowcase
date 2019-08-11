require("dotenv").config();
const express = require("express");
const getToken = require("./api/getToken");
const searchTopic = require("./api/SearchTopic");
const searchHandle = require("./api/SearchHandle");
const path = require("path");

const app = express();
const result = getToken();

app.get("/api/topic/:text", (req, res) => {
  const text = req.params.text;
  result.then(token => {
    searchTopic(text, token).then(data => {
      res.json({ message: "Request received!", data });
    });
  });
});

app.get("/api/handle/:text", (req, res) => {
  const text = req.params.text;
  const count = 10;
  result.then(token => {
    searchHandle(text, count, token).then(data => {
      res.json({ message: "Request received!", data });
    });
  });
});

app.get("/api/random/:text", (req, res) => {
  const text = req.params.text;
  const count = 100;
  result.then(token => {
    searchHandle(text, count, token).then(data => {
      res.json({ message: "Request received!", data });
    });
  });
});

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
