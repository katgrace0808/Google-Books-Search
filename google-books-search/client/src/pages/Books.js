import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
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
        console.log(data.data.items);
        setResult(data.data.items);
      })
  }

  function handleSaveBook(index) {
    // event.preventDefault();

    // const book = result.filter(book => result.id);
    console.log(result[index].volumeInfo.title);

    API.saveBook({
      title: result[index].volumeInfo.title,
      authors: result[index].volumeInfo.authors,
      description: result[index].volumeInfo.description,
      image: result[index].volumeInfo.imageLinks.thumbnail,
      link: result[index].volumeInfo.previewLink
    })
    // console.log("What's up?")
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  }



  return (
    <Container fluid>
      {/* <Row> */}
      {/* <Col size="md-6"> */}
      <Jumbotron>
        <h1>What Books Should I Read?</h1>
      </Jumbotron>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" onChange={handleChange} className="form-control mt-10" placeholder="Search for Books" autoComplete="off" />
        </div>
        <button type="submit" className="btn btn-success" >Search</button>
      </form>
      {result.map((book, index) => (
        <div key={book.id}>
          <a href={book.volumeInfo.previewLink}>
            <h3>{book.volumeInfo.title}</h3></a>
          <h4>{book.volumeInfo.authors}</h4>
          <p>{book.volumeInfo.description}</p>
          <a>
            {/* <a target="_blank" href={book.volumeInfo.previewLink}> */}
            <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
            {/* <a href={book.volumeInfo.previewLink}>  {book.volumeInfo.title}  </a> */}
            <button type="submit" className="btn btn-success" onClick={() => handleSaveBook(index)}>  Save</button>

          </a>
        </div>
      )


      )}
    </Container>
  );
}


export default Books;
