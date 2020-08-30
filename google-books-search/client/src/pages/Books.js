import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Axios from "axios";

function Books() {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState("AIzaSyAKXbxvGaBZjkgngiHBcpmtuNtiwdpnzWI");

  function handleChange(event) {
    const book = event.target.value;
    setBook(book);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(book);
    Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + apiKey + "&maxResults=10")
      .then(data => {
        setResult(data.data.items);
      })
  }

  function handleSaveBook(index) {
    console.log(result[index].volumeInfo.imageLinks.thumbnail);
    API.saveBook({
      title: result[index].volumeInfo.title,
      authors: result[index].volumeInfo.authors,
      description: result[index].volumeInfo.description,
      image: result[index].volumeInfo.imageLinks.thumbnail,
      link: result[index].volumeInfo.previewLink
    })
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  }

  return (
    <Container fluid>
      <Jumbotron>
        <h1>Google Books</h1>
        <h2>What Book Should I Read?</h2>
      </Jumbotron>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input id="search" type="text" onChange={handleChange} className="form-control mt-10" placeholder="Search for Books" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-dark" >Search</button>
      </form>
      {result.map((book, index) => (
        <div key={book.id}>
          <a id="link" href={book.volumeInfo.previewLink}>
            <h3>{book.volumeInfo.title}</h3></a>
          <h4>{book.volumeInfo.authors}</h4>
          <p>{book.volumeInfo.description}</p>
          <a>
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
            <button id="submit-btn" type="submit" className="btn btn-dark" onClick={() => handleSaveBook(index)}>  Save</button>
          </a>
        </div>
      )
      )}
    </Container>
  );
}


export default Books;
