import React, { useState } from "react";
// import AppComponent from "./AppComponent";
import ComponentB from "./ComponentB";

export const userDetailContext = React.createContext(null);

const ComponentA = () => {
  const [userDetails, setDetails] = useState({ name: "ABCDE", age: 30 });
  return (
    <div>
      <p>Component A</p>
      <userDetailContext.Provider value={userDetails}>
        <ComponentB />
      </userDetailContext.Provider>
    </div>
  );
};

export default ComponentA;
