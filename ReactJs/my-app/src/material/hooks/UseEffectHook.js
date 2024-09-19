// Hooks allow function components to have access to state and other React features. 
import React, { useState, useEffect } from "react";

function Counter() {
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    useEffect(() => {
        //Runs on every render
        console.log("Without Dependency")
    });

    useEffect(() => {
        //Runs only on the first render
        console.log("Blank Dependency")
    }, []);

    useEffect(() => {
        setCalculation(() => count * 2);
        console.log("With dependency Dependency")
    }, [count]); // <- add the count variable here

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}

export default Counter;