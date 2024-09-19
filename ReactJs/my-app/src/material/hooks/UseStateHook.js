// Hooks allow function components to have access to state and other React features. 
import React, { useState } from "react";

function Hook() {
    const [color, setColor] = useState("red");

    return (
        <>
            <h1>My favorite color is {color}!</h1>
            <button
                type="button"
                onClick={() => setColor("blue")}>
                Blue
            </button>
        </>
    );
}

export default Hook;