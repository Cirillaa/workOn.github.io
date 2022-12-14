import React from "react";

import "./App.css";
import Header from "./components/layouts/Header/Header.js";
import About from "./components/layouts/About/About";
import Vacancies from "./components/layouts/Vacancies/Vacancies.js";
import Workers from "./components/layouts/Workers/Workers";
import Footer from "./components/layouts/Footer/Footer";

function App() {

  return (
    <React.Fragment>
        <Header />
        <About />
        <Vacancies />
        <Workers />
        <Footer />
    </React.Fragment>
  );
}

export default App;
