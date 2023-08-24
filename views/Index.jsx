import React from "react";

const containerStyle = {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Set the container height to fill the viewport
    backgroundColor: "#f4f4f4",
    padding: "20px",
};
const image = {
    width: "50px",
};
const linkStyle = {
    textDecoration: "none",
    color: "#043b75",
    marginRight: "10px",
};
const list  = {
    listStyleType: "none",
    margin: 0,
    padding: 0,
}

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function Index({ pokemons }) {
    return (
        <div style={containerStyle}>
            <h1>Pokemons Index Page</h1>
            <nav>
                <a href="/pokemon/new" style={linkStyle}>
                    Create a New Pokemon
                </a>
            </nav>
            <ul>
                {pokemons.map((pokemon, i) => (
                    <li style={list} key={i}>
                        <a href={`/pokemon/${pokemon.id}`} style={linkStyle}>
                            {capitalizeFirstLetter(pokemon.name)}
                        </a>
                        <img
                            style={image}
                            src={
                                pokemon.img.split(".").pop() === "jpg"
                                    ? pokemon.img
                                    : pokemon.img + ".jpg"
                            }
                            alt=""
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

module.exports = Index;
