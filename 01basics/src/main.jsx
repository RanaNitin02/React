import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {
//   return (
   
//    <>
//       <h1>Hi from MyApp</h1>
//    </>
//   )
// }

// const anotherElement = (
//   <a href='https://google.com' target='_blank'>Visit Google</a>
// )


// // this is how to create a element in react
const createElement = React.createElement(
    'a',                                           // the tag to add
    {href:'https://google.com' ,target:'_blank'}, // properties of tag in an object
    "Click me to visit google"                    // the html for tag
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    
    //createElement,
    <App/>
    
  
)
