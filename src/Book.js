import React from 'react'
import './beauty.css'

const Book = (props) =>{
    return (
        <div className = "Book">
            <div className = "image-container">
                <img src = {props.img}></img>
            </div>
            <div className="text">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )

}

export default Book