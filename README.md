# React Basics

## Some Basic NPM commands
___
1. `npm init` - creates package.json (manifest)file , list dependencies

2. `npm install <package name> --save` - Install package locally and add to package.json

3. `npm intall <package name> -g` - installs package globally (access anywhere) SUDO command

4. `npm install <package name> --save-dev` - Use it only in development


## Getting Started
___
To start with React app , you have to type and enter in the command line`npx create-react-app <project name>`.<br>
You may go to the repo of React in github to check other stuffs out.<br>
The above command will create all dependencies and other files required to get started with basic React app.<br>
[Note : as a matter of fact , you may yourself create all the files and build React framework , but it's a lot of work]
<br>

### Cleaning the boiler plate
___
Before starting with React app , let us clean the boiler plate. [Note : we are starting from scratch]

Delete everything in src folder and create one index.js

Next we create index.js inside src

Then we need to import few modules.
`import React from 'react'`

### Creating component
___
A component in React is basically a function. And the way to create a React component is just capitalizing the first letter of the function name.
Eg : `function Myfunc() { return <something>}`
or 
`const Myfunc = () => {return <something>}`

Now to be specific , we return some HTML to be rendered on to the screen. Technically they are not called HTML but JSX(Javascript XML).

So now , we can write something like : 

```
function Myfunc()
{ 
    return (
    <div>
    <h1> HELLO</h1>
    <h2>World</h2>
    </div>
            );
}
```

Now you have to render it into the screen , the way to do that is : 
`ReactDom.render(<Myfunc/> , document.getElementById('root'));`

And also , don't forget to add the import : `import ReactDom from 'react-dom`

Next just type in the command line , `npm start`. It should open localhost in your default browser. By default it opens in port 3000. If it doesn't open by default , just go to localhost:3000 in your browser. CONGO! you have your thing running 

### Nested Component

Since we can only render one component a single page with ReactDom, it is necessary to have nested components.
The following example will clear everything.

```
function Myfunc()
{ 
    return (
        <hello></hello>
            );
}

const hello = () => {
    return <h1>Hello</h1>
}

ReactDom.render(<Myfunc/> , document.getElementById('root'));

```

This will render hello inside Myfunc

### Basic CSS

Create a index.css inside src folder.
Inside the css folder , just type in whatever styling you want to do using the class name or id of the components. Let's see how to name the component. It is as easy as writing : 
```
function Myfunc()
{ 
    return (
    <div className = "myname">
    <h1> HELLO</h1>
    <h2>World</h2>
    </div>
            );
}
```

Note the camelCase. Afterall this is JSX, and not plain HTML.
Also , add `import ./index.css`

if you want to add styling inside the tags , then :

```
function Myfunc()
{ 
    return (
    <div className = "myname" style = {{color : 'red' , fontSize : '24px'}}>
    <h1> HELLO</h1>
    <h2>World</h2>
    </div>
            );
}
```

Whenever we use {} it means , we are now in js environment and everything inside {} will be treated as Javascript element.
Now , the only reason for {{}} is because we create an object inside. A bit confusing , but it is what it is . :laughing:

I personally prefer using CSS rather than using JSX CSS.

### Props

Props are a great way to make Components highly dynamic. Suppose you have a component named BookList which renders Book, then they will all have different properties like Author , image , Title , Description , etc.

There are multiple ways of using props. Let's see some of them. The examples are self explanatory.

```
const book = {
    title : "Title",
    des : "description"
}

function BookList()
{
    return (<section>
        <Book title = {book.title} , des = {book.des}></Book>
            </section>)
}

function Book(props)
{
    return (
        <div>
            {props.title}
            {props.des}
        </div>
    )
}
```

Now you can also use `<Book {...book}}></Book>`. This will pass the book as object.
You can also use `function Book({title , des})`. This is not JSX specific but plain Javascript.

Next , let us go and have a list of object : 
```
const books = [
    {
        id : 1 , 
        title : "Unfinished: A memoir",
        author : "Priyanka Chopra Jonas",
    },
    {
        id : 2 , 
        title : "The Alchemist",
        author : "Paulo Coelho",
    },

    {
        id : 3 , 
        title : "Think Like a Monk",
        author : "jay Shetty",
    }
]
```
We have to use map method to wrap them as usual by using map.

just use 
```
function Myfunc()
{ 
    return (
    <div className = "myname">
        {books.map((book) => {
            return <Book {...book}></Book>
        )})}
    </div>
            );
}
```

### Event Basics
Since we know that we use camelCase in JSX , let us see one basic example of event

```
const clickHandler = (text) => {
    console.log(text);
}

function Myfunc()
{
    return <div className = "clicker" onClick = {() => clickHandler("Hello")}></div>   
}
```

Check what happens when you only use `{clickHandler("Hello)}` instead of {() => `clickHandler("Hello")}`
___
## Hooks
___
### UseState
UseState is used to initialise a variable which might change.

Let's check it out 

```
import useState from 'react'

const [count , countfunc] = useState(0);


function Myfunc()
{
    return <div className = "clicker" onClick = {() => countfunc(count+1)}>{count}</div>   
}

```
This is going to increment the value of count by 1 each time the div is clicked.

You can use arrays as well in useState. Remember to use filter function to change values in object with respect to key in objects.


##### Functional Update Form
Since now we know how to increase a counter Value , let's dive into something bit complicated.
Let's say we want to create a setTimeout(). Since this is an asynchronous function, even after clicking the update function 5-6 times at once, counter will increase by 1. [This is for you to figure it out... Use your brains]. Well, if you want to increase the counter 5-6 times at once after some given amount of time specified in setTimeout(), then use something like this : 
`setTimeout(()=>{setValue((preValue)=> {return (preValue+1)})} , 2000);`
What this does is, it takes the previous value of the counter and updates it in the stack unlike waiting for it.
To understand this better, just write some simple counter with setTimeout and understand the difference between `setTimeout(()=>{setValue((preValue)=> {return (preValue+1)})} , 2000);` and `setTimeout(()=>{setValue(value+1)} , 2000);`

### UseEffect
Another cool Hook is UseEffect. By default it runs after every re-render. Since useState renders a component again and again, useEffect is called at the same time as well. So basic syntax of useEffect is :
`useEffect(()=>{//callback function},[//dependency list]`
Now the dependency list contains the values which should trigger the useEffect after initial render. For example, if I want useEffect() to be rendered when my variable `value` changes, then I would put `value` in the dependency list.
`useEffect(()=>{//callback function},[value]`

##### CleanUp
Suppose we add a Eventlistener to our window , re-rendering will cause to create multiple EventListener. It might consume a lot of memory and cause our website to be buggy and laggy. So, it is recommended to set up a cleanp function. and the way to do it is :
```
useEffect(()=>{
    //Do your stuffs here
    //In this case window.addEventListener('resize' , checkSize)

    return ()=>{
        //This is the cleanup function
        //In this case , window.removeEventListener('resize' , checkSize)
    }
})
```
##### Fetch Data
One of our Objectives is to fetch data from APIs and so forth. This is easy , use some external libs or use inbuilt fetch function. Beware not to set up an infinite loop with useEffect(). Learn about promises and responses in js if you don't know how to fetch or so ...

Just in case you need an example, 

```
const [url , setUrl] = useState("Type the url here") //For example : https://api.github.com/users
fetch(url)
.then((res) => res.json())
.then((user) => setUsers(user))
```

##### Show/Hide Component
With React, we can even hide or show components whenever necessary. This doesn't require much explanation, let's dive into the example which is self explanatory. 

```
const [show , setShow] = useState(false);
const Item = () =>{
    return <div>
        HELLO BONDHUGON.
    </div>
}

return(
    <button onClick = {()=>{setShow(!show)}}>SHOW/HIDE</button>
    {show && <Item/>}
)

```

In this example we are basically toggling between the values of show (true and false) which helps in determining whether Item should be rendered or not using the && operator.


##### Forms in React
Forms in React are implemented a bit differently than in original Javascript.

So let us first create a form and make a function for handling events when user clicks on Submit Button

```
const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Hi");
    };


    return(
        <div style = {{color : 'gray' , padding : '2rem'}}>

            <form className = 'form'>
                <div className = 'form-control'>
                    <label htmlFor='firstName'>Name : </label>
                    <input type = 'text' id = 'firstName' name = 'firstName'></input>
                </div>

                <div className = 'form-control'>
                    <label htmlFor='email'>Email : </label>
                    <input type = 'email' id = 'email' name = 'email'></input>
                </div>

                <button onClick = {handleSubmit}>Submit</button>

            </form>
```

So we see that handleSubmit function has an event object e and we call e.preventDefault(). This is because by default javascript refreshes the page when we click on submit button and hence the statements under handleSubmit does not get executed. 

Also, instead of `onClick` in button we can use onSubmit in form tag like this ```<form className = 'form' onSubmit = {handleSubmit}>```

Now, we need to access the values inputted by the user. In order to do that, we have to use useState
Now we need two more things. value inside input tag to store the value inputted by the user and also an onChange which would trigger and change the variable in useState. Confusing enough? ... Let's dive into example. [Note : I am doing this for multiple inputs for easier workflow]

```
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

```

OMG!! a long example...erghh ..Let's go through step by step
`const [person , setPerson] = useState({firstName : '' , email : ''})` -> This stores the value inputted by the user. I store them as array because I don't want to use two useState separately.

`const [users , setUsers] = useState([]);` -> We store all the values in this list. Like if the user inputs 100 userNames and emails, they get stored in users list.

Then we set up the form. Now to get the input value in placeholder, we do `value = {person.email}`. But this is not it. We need another onChange to trigger something whenever the value is changed. Without onChange js might throw error , warning, etc etc and also even if user types anything, he won't see anything on screen. This is because the value is always initialised to ''.
So, we handle the change in handleChange function, where we actually take in both the values (in this case , firstName and email) and put it inside person. 
```    
const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person , [name]:value})
    };
```
The `e` here is the event object with which we reference the target value i.e firstName or email inputted by user. So whenever the user types in the Name in the form, e.taget.name stores 'firstName' and e.target.value stores the value inputted by the user. Same goes for email. Then we put both of them into person.

Exactly same thing goes on with handleSubmit where if firstName and email are not empty, then we append the values!.

To put it in short, I use this form format whenever I require to use form. Feel free to explore the other tricks related to forms in React.

##### React-Router
Finally, let us look into router where we actually navigate from one page to another page!!
To get started , type in `npm install react-router-dom` in the terminal.

Next, we import `import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';`

Now we have few pre-requisites. If you are already reading this, then you must know about export and creating new files and components.

Suppose you need to have 3 pages. You have 3 components named Home, About Us and Contact in separate files. Now in the index.js file simple type in the following : 

```
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';

import Home from './Home.js';
import About from './AboutUs.js';
import Contact from './Contact.js';
import Error from './error.js';



const ReactRouterSetup = () =>{
    return (<Router>
        <div>
            <ul>
                <a href = '/'>Home</a>
                <a href = '/About'>About Us</a>
                <a href = '/Contact'>Contact</a>
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
```

Here, <Router> tag contains the components to be routed. So we also create a Navbar which is plain javascript :) 
The <Route> tag contains the component to be routed.
The <Switch> tag ensures the sequential matching of the routes. It means that the '*' will only be triggered if none of the paths are matched.
Inside the <Route> we use exact so that only that component is rendered not the others. Without exact, upon clicking the Routes, it would render all the pages as a single webpage.


Thank you for reading !! :)

This is just a README file for quick reference. Will add more to this someday ... Till then, Sayonara..





