import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import "./saved.css"

function Saved() {
  const [savedBooks, setSavedBooks] = useState([])

  useEffect(() => {
    loadBooks()
  }, [])

  function loadBooks() {
    API.getBooks()
      .then(res =>
        setSavedBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Jumbotron>
        <h1>Google Books</h1>
        <h3>My Saved List</h3>
      </Jumbotron>
      {savedBooks.length ? (
        <div>
          <h1>Books On My List</h1>
          <List id="list">
            {savedBooks.map((book) => (
              <ListItem key={book._id}>
                <Link to={"/books/" + book._id}>
                  <strong>
                    {book.title} by {book.authors}
                  </strong>
                </Link>
                <DeleteBtn id="delete-btn" onClick={() => deleteBook(book._id)} />
              </ListItem>
            )
            )}
          </List>
        </div>
      ) : (
          <h3>No Results</h3>
        )}
      <Row>
        <Col size="md-2">
          <Link to="/" id="link">← Back to Search</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
