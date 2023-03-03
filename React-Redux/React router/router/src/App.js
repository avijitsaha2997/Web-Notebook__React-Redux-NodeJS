import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import MyServices from "./MyServices";
import AboutMe from "./AboutMe";
import Resources from "./Resources";
import Products from "./Products";
import Skills from "./Skills"
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="home" element={<Home />}>
          <Route path="about" element={<AboutMe />} />
          <Route path="services" element={<MyServices />} />
        </Route>

        <Route path="resources" element={<Resources />}>
          <Route path="skills" element={<Skills />} />
          <Route path="products" element={<Products />} />
        </Route>

      </Routes>

    </div>
  );
}

export default App;
