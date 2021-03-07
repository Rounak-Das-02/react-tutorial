import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';
import {books} from './books.js'
import Book from './Book.js'



const BookList = () =>  {

const [value , setValue] = useState(window.innerWidth);
const checkSize = () => setValue(window.innerWidth);

useEffect(()=>{
            window.addEventListener('resize' , checkSize)
},[value]);
console.log("Render Component");



    return(
        <div>
            <h1>Window : {value}px</h1>
            <span>
                <button onClick={()=>{setValue(value+1)}}>Update</button>
                <button onClick={()=>{setValue(0)}}>Reset</button>
            </span>
            </div>
    );






    // return (
    //     <section className="BookList">
    //         {books.map((book) => {
    //             return (
    //                 <Book key = {book.id} {...book}></Book>
    //             )
    //         })}
    //     </section>
    // )
} 

ReactDOM.render(<BookList/> , document.getElementById('root'));