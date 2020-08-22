import React from 'react';

function Card(props) {
    return (
        <div className="card w-75 mx-auto">
            <div className="card-body">
                <h5 className="card-title">cd{props.title}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                {/* <a href="#" className="btn btn-primary">Button</a> */}
            </div>
        </div>
    )
}

 export default Card;