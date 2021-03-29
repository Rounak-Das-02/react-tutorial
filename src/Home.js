import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';
import {books} from './books.js'
import Book from './Book.js'



const BookList = () =>  {


    const [person , setPerson] = useState({firstName : '' , email : ''})
    const [users , setUsers] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person , [name]:value})
    };


    const handleSubmit = (e) =>{
        e.preventDefault();
        if(person.firstName && person.email)
        {
            setUsers([...users , person]);
            setPerson({firstName:'' , email:''});
        }
    };


    return(
        <div style = {{color : 'gray' , padding : '2rem'}}>

            <form className = 'form' onSubmit = {handleSubmit}>
                <div className = 'form-control'>
                    <label htmlFor='firstName'>Name : </label>
                    <input 
                    type = 'text' 
                    id = 'firstName' 
                    name = 'firstName'
                    value ={person.firstName}
                    onChange = {handleChange}
                    ></input>
                </div>

                <div className = 'form-control'>
                    <label htmlFor='email'>Email : </label>
                    <input type = 'email' id = 'email' name = 'email'
                    value = {person.email}
                    onChange = {handleChange}
                    ></input>
                </div>

                <button>Submit</button>

            </form>


        {
            users.map((person , key) =>{
                return (
                    <span key>
                        <h1 style = {{color : 'green'}}>{person.firstName}</h1>
                        <h1>{person.email}</h1>
                    </span>
                )
            })
        }
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

export default BookList

// ReactDOM.render(<BookList/> , document.getElementById('root'));