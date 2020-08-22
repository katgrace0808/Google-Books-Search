import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Books from './pages/Books';
import Saved from './pages/Saved';
import Search from './pages/Search';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path={["/", "/books"]}>
            <Books />
          </Route>
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
