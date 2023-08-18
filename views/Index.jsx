import React from "react";

const myStyle = {
    fontFamily: "sans-serif",
};

function capitalizeFirstLetter(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function Index({ pokemons }) {
    return (
        <div style={myStyle}>
            <h1>Pokemons Index Page</h1>
            <ul>
                {pokemons.map((pokemon, i) => {
                    return (
                        <li key={i}>
                            <a href={`/pokemons/${i}`}>
                                {capitalizeFirstLetter(pokemon.name)}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

module.exports = Index;
