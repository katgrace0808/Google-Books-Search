import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import API from "../utils/API";


function Card(props) {
const [book, setBook] = useState({});

const {id} = useParams()
    useEffect(() => {
    API.getBook(id)
        .then(res => setBook(res.data))
        .catch(err => console.log(err));
    }, [])

    return (
        <div className="card w-75 mx-auto">
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/* <a href="#" className="btn btn-primary">Button</a> */}
            </div>
        </div>
    )
}

 export default Card;