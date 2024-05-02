import React, { useReducer } from "react";

const Reducer = () => {
  const initialState = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "reset":
        return 0;
      default:
        throw new Error("Unexpected action");
    }
  };

  const [num, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{num}</h1><hr />
      <button onClick={() => dispatch("increment")}>+1</button>
      <br />
      <button onClick={() => dispatch("decrement")}>-1</button>
      <hr />
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default Reducer;
