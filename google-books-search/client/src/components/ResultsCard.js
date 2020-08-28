import React, { useState, useEffect } from 'react';
import Jumbotron from './Jumbotron';
import { List, ListItem } from './List';
import { Container, Row, Col } from './Grid';
import { Input, TextArea, FormBtn } from './Input';
import DeleteBtn from './DeleteBtn';
import Card from './Card';
import { useParams } from "react-router-dom";
import API from "../utils/API";


function ResultsCard() {
    // Setting our component's initial state
    const [books, setBooks] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all books and store them with setBooks
    useEffect(() => {
        loadBooks()
    }, [])

    // Loads all books and sets them to books
    function loadBooks() {
        API.getBooks()
            .then(res => {
                console.log(res.data)
                setBooks(res.data)}
            )
            .catch(err => console.log(err));
    };

    return (
        <Container>
            {books.length ? (
                <List>
                    {books.map(book => {
                        return (
                            <ListItem key={book._id}>
                                <a href={"/books/" + book._id}>
                                    <strong>
                                        {book.title} by {book.author}
                                    </strong>
                                </a>
                                <DeleteBtn onClick={() => { }} />
                            </ListItem>
                        );
                    })}
                </List>
            ) : (
                    <h3>No Results to Display</h3>
                )}
        </Container>
    )
}

export default ResultsCard;