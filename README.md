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