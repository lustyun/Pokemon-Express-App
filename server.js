const express = require("express");
const app = express();
const port = 3000;
const pokemons = require("./models/Pokemon");
const mongoose = require("mongoose");
require("dotenv").config();

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
    console.log("connected to mongo");
});

// Handle form submission with image upload
app.post("/pokemon", async (req, res) => {
    const data = req.body;
    data.img = `https://img.pokemondb.net/artwork/${data.name}.jpg`;
    await pokemons.create(data);
    res.redirect("/pokemon");
});

app.get("/pokemon", async function (req, res) {
    const allPokemon = await pokemons.find({});
    res.render("Index", {
        pokemons: allPokemon,
    });
});

app.get("/pokemon/new", function (req, res) {
    res.render("New");
});

app.get("/pokemon/:index", async function (req, res) {
    const poke = await pokemons.findById(req.params.index);
    res.render("Show", {
        pokemon: poke,
    });
});

app.listen(port, () => {
    console.log("listening on http://localhost:3000/ port:", port);
});
