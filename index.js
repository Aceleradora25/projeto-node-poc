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

app.listen(6969)