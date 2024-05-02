require("dotenv").config();
console.log(process.env.PORT)
const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  console.log(req, res);
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("_.ranju@23");
});

app.get("/login", (req, res) => {
  res.send("<h1>please complete the course<h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>This is my code<h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${port}`);
});
