import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Home.jsx";
import Ship from "./ShipModel.jsx";
import Courtyard from "./Courtyard.jsx";
import ModelCanva from "./Model.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path='/' element={<Home />} /> */}
        <Route path='/ship' element={<Ship />} />
        <Route path='/' element={<ModelCanva />} />
        <Route path='/courtyard' element={<Courtyard />} />
      </Routes>
    </Router>
  );
};

export default App;
