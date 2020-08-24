import React, { useState, useEffect } from 'react';
import Jumbotron from '../components/Jumbotron';
import API from "../utils/API";
import Card from '../components/Card';
import { Form } from '../components/Form';
import ResultsCard from '../components/ResultsCard';


function Search() {
    const [books, setBooks] = useState("");
    const [search, setSearch] = useState("");


    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        API.getBooks()
            .then(res =>
                setBooks(res.data)
            )
            .catch(err => console.log(err));
    };

    let searchBooks = query => {
        console.log(query)
        API.search(query)
            .then(res => setSearch(res.data))
            .catch(err => console.log(err));
    };

    let handleInputChange = event => {
        console.log(event.target.value)
        setSearch(event.target.value)
    }

    let handleFormSubmit = event => {
        event.preventDefault();
        searchBooks();
    }

    return (
        <div>
            <Jumbotron />
                <h1>Search</h1>
                <Form onClick={handleFormSubmit}>Submit</Form>
                <br></br>
                <ResultsCard />
        </div>
    )
}

export default Search;