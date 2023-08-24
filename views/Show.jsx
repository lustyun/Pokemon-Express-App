import React from "react";

const imgStyle = {
    maxWidth: "300px",
    margin: "10px 0",
};

const containerStyle = {
    fontFamily: "sans-serif",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
    padding: "20px",
};

const titleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
};

const backButtonStyle = {
    color: "#007bff",
    textDecoration: "none",
};

function Show({ pokemon }) {
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>Gotta Catch 'Em All</h1>
            <h2>{pokemon.name}</h2>
            <img
                src={
                    pokemon.img.split(".").pop() === "jpg"
                        ? pokemon.img
                        : pokemon.img + ".jpg"
                }
                alt={pokemon.name}
                style={imgStyle}
            />
            <br />
            <a href="/pokemon" style={backButtonStyle}>Back</a>
        </div>
    );
}

module.exports = Show;
