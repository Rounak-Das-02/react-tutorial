import React , {useState} from 'react';


import {books} from './books.js';
import './beauty.css';


const Book = (props) =>{

    const [text , setText] = useState("random title");

    const clickHandler = () => {
        if (text === 'random title'){
            setText("Hello World");
        }
        else{
            setText('random title');
        }
        console.log(text);
        
        
    }


    return (
        <div className = "Book">
            <div className = "image-container">
                <img src = {props.img}></img>
                <button type = "button" id = "button" onClick = {()=>clickHandler()}>Buy Now</button>
            </div>
            <div className="Text">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <p>{props.description}</p>
            </div>
        </div>
    )

}

export default Book