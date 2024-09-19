import React, { useState } from 'react';

function MyFunctionalComponent() {
  // Declare a state variable `count` and a function `setCount` to update it
  const [count, setCount] = useState(0);

  // Function to handle button click
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyFunctionalComponent;
