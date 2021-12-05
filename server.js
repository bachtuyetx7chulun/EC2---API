require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use("*", (_, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});