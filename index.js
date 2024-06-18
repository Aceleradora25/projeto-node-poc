require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({
    hey: "guys",
    welcome: "back",
    to: "another",
    video: ",",
    please: "subscribe!",
  });
});

app.listen(process.env.PORT || 6969, () => {
  console.log(`Server is running on port ${process.env.PORT || 6969}`);
});
