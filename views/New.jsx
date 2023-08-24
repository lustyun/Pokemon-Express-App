import React from "react";

const containerStyle = {
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: "20px",
    width: "400px",
    height: "100vh", // Set the container height to fill the viewport
    margin: "0 auto", // Center horizontally using auto margin
};

const titleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
};

const formStyle = {
    marginTop: "20px",
};

const inputStyle = {
    marginBottom: "10px",
    padding: "5px",
    width: "100%",
    borderRadius: "4px",
    border: "1px solid #ccc",
};

const submitButtonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
};

function New() {
    return (
        <div style={containerStyle}>
            <h1 style={titleStyle}>New Pokemon page</h1>
            <form action="/pokemon" method="POST" style={formStyle}>
                <label>
                    Name:
                    <input type="text" name="name" style={inputStyle} />
                </label>
                <br />
                <br />
                <input
                    type="submit"
                    value="Create Pokemon"
                    style={submitButtonStyle}
                />
            </form>
        </div>
    );
}

module.exports = New;
