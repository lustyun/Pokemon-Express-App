const express = require("express");
const app = express();
const port = 3000;
const pokemons = require("./models/Pokemon");

app.get("/", function (req, res) {
    res.send(pokemons);
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
