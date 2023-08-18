const express = require("express");
const app = express();
const port = 3000;
const pokemons = require("./models/Pokemon");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", function (req, res) {
    res.render("Index", { pokemons: pokemons });
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
