import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Books from "./pages/Books";
import Saved from "./pages/Saved";
import Nav from "./components/Nav";


function App() {
  return (
    <Router>
    <div>
      <Nav />
      <Books />
    </div>
    </Router>
  );
}

export default App;
