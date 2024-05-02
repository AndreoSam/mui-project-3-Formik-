import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Formic from "../Components/Formic";
import Header from "../Layout/Header/Header";
// import Reference from "../Components/Reference";
// import Reducer from "../Components/Reducer";
import ComponentA from "../Components/ComponentA";

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="" element={<Reference />} /> */}
        {/* <Route path="" element={<Reducer />} /> */}
        <Route path="" element={<ComponentA />} />
        {/* <Route path="" element={<Formic/>}/> */}
      </Routes>
    </Router>
  );
};

export default Routing;
