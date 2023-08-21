const express = require("express");
const app = express();
const port = 3000;
const pokemons = require("./models/Pokemon");

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));

// Handle form submission with image upload
app.post("/pokemon", (req, res) => {
    pokemons.push(req.body);
    console.log(pokemons);
    res.redirect("/pokemon");
});

app.get("/pokemon", function (req, res) {
    res.render("Index", { pokemons: pokemons });
});

app.get("/pokemon/new", function (req, res) {
    res.render("New");
});

app.get("/pokemon/:index", function (req, res) {
    res.render("Show", {
        pokemon: pokemons[req.params.index],
    });
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
