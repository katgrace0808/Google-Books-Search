import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Form(props) {
    return (
        <div className="container">
        <form>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Title</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                {/* <small id="emailHelp" className="form-text text-muted">Exact spelling please!</small> */}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Author</label>
                <input type="text" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <button type="submit" className="btn btn-dark">Submit</button>
        </form>
        </div>
    )
}