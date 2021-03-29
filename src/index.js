import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

import Home from './Home.js';
import Book from './Book.js';
import Error from './error.js';



const ReactRouterSetup = () =>{
    return (<Router>
        <div>
            <ul>
                <a href = '/'>Home</a>
                <a href = '/Book'>Book</a>
            </ul>
        </div>
        <Switch>
            <Route exact path = '/'><Home></Home></Route>
            <Route path = '/Book'><Book></Book></Route>
            <Route path ='*'><Error></Error></Route>
        </Switch>
    </Router>)
}

ReactDOM.render(<ReactRouterSetup/> , document.getElementById('root'));
