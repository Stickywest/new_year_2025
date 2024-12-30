import React from "react";
import { HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App: React.FC = () => (
  <HashRouter>
    <div>
      <Navbar />
      <Home />
    </div>
  </HashRouter>
);

export default App;
