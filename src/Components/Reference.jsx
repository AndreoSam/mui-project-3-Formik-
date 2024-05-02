import React, { useRef } from "react";

const Reference = () => {
  const inputElement = useRef(null);
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//     alert("You clicked " + ref.current + " times!");
//   }

  const onButtonClick = () => {
    console.log("Current input field: ", inputElement.current);

    console.log("Input field value: ", inputElement.current.value);
  };

  return (
    <div>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Click</button>
      <br />
      {/* <button onClick={handleClick}>Click me!</button> */}
    </div>
  );
};

export default Reference;
