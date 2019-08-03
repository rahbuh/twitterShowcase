require("dotenv").config();
const express = require("express");
const searchTopic = require("./api/SearchTopic");
const searchHandle = require("./api/SearchHandle");
const path = require('path')

const app = express();

app.get("/api/topic/:text", (req, res) => {
  const text = req.params.text;
  searchTopic(text).then(data => {
    res.json({ message: "Request received!", data });
  });
});

app.get("/api/handle/:text", (req, res) => {
  const text = req.params.text;
  searchHandle(text, 10).then(data => {
    res.json({ message: "Request received!", data });
  });
});

app.get("/api/random/:text", (req, res) => {
  const text = req.params.text;
  searchHandle(text, 100).then(data => {
    res.json({ message: "Request received!", data });
  });
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => 
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
