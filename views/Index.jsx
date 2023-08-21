import React from "react";

const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Set the container height to fill the viewport
    backgroundColor: "#f4f4f4",
    padding: "20px",
};

const linkStyle = {
    textDecoration: "none",
    color: "#64a9f8",
    marginRight: "10px",
};

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
                    <li key={i}>
                        <a href={`/pokemon/${i}`} style={linkStyle}>
                            {capitalizeFirstLetter(pokemon.name)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

module.exports = Index;
