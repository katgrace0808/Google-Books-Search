import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Navbar from "./components/Navbar";
import Saved from "./pages/Saved";
import Detail from "./pages/Detail";

function App() {
  const [bookPage, setBookPage] = useState("");
  return (
    <Router>
      <div>
        <Navbar currentPage={bookPage} />
        <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/saved" component={Saved} />
        <Route exact path="/books/:id" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
