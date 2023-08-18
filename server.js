const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
    res.send("Welcome to the Pokemon App!");
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
