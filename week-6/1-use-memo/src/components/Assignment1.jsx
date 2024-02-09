import { useMemo, useState } from "react";

//TODO
//* In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
//* Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);

  //! solution starts here

  const expensiveValue = useMemo(
    function () {
      let fact = 1;
      for (let i = 1; i <= input; i++) {
        fact = fact * i;
      }
      return fact;
    },
    [input],
  );
  //! solution ends here
  return (
    <div>
      <h1>Assignment no 1</h1>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveValue}</p>
    </div>
  );
}
