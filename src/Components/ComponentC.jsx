import React, { useContext } from "react";
import { userDetailContext } from "./ComponentA";

const ComponentC = () => {
  const contextData = useContext(userDetailContext);
  console.log("Context Value: ", contextData);

  return (
    <div>
      <h3>This is Sub Child Component</h3>
      <h4>User Name: {contextData.name}</h4>
      <h4>User Age: {contextData.age}</h4>
    </div>
  );
};

export default ComponentC;
