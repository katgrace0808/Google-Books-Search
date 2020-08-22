import React from 'react';
import Navbar from '../components/Navbar';
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Saved from '../pages/Saved';
import Search from '../pages/Search';


function Books() {
    return (
        <Router>
            <div>
                <Navbar>
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/saved" component={Saved} />
</Navbar>
                    <Jumbotron />
                    <Card />
                
            </div>
        </Router>
    )
}

export default Books;