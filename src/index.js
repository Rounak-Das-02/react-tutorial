import React from 'react';

import ReactDOM from 'react-dom';
import {books} from './books.js'
import Book from './Book.js'


const BookList = () =>  {
    return (
        <section className="BookList">
            {books.map((book) => {
                console.log(book);
                return (
                    <Book key = {book.id} {...book}></Book>
                )
            })}
        </section>
    )
} 

ReactDOM.render(<BookList/> , document.getElementById('root'));