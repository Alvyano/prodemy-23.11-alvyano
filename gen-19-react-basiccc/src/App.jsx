import React from "react";
import Navbar from "./layouts/Navbar";
import Home from "./layouts/Home";
import Menu from "./layouts/Menu";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="menu">
          <Menu />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;