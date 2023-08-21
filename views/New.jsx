import React from "react";

function New() {
    return (
        <div>
            <h1>New Pokemon page</h1>
            {/* NOTE: action will be the route, method will be the HTTP verb */}
            <form action="/pokemon" method="POST">
                Name: <input type="text" name="name" />
                <br />
                Image: <input type="text" name="img" />
                <br />
                <br />
                <input type="submit" name="" value="Create Pokemon" />
            </form>
        </div>
    );
}

module.exports = New;