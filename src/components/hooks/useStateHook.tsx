import { useState } from "react";

function UseStateExample() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
}

export default UseStateExample;
