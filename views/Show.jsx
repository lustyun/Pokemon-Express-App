import React from "react";

function Show({ pokemon }) {
    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name} </h2>
            <img src={pokemon.img + ".jpg"} alt={pokemon.name} />
            <a href="/">Back</a>
        </div>
    );
}

module.exports = Show;
