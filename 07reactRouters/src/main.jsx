import './index.css'
import React from 'react'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'
import About from './components/About/About.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import Contact from './components/Contact/Contact.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'



// const router = createBrowserRouter([

//   {
//       path:'/',
//       element:<App />,
//       children:[
//         {
//           path:"",
//           element:<Home/>
//         },
//         {
//           path:"about",
//           element:<About/>
//         },
//         {
//           path:"contact",
//           element:<Contact/>
//         }
//       ]
//   }

// ])

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<App/>} >
        <Route path='' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        <Route 
            loader={githubInfoLoader}
            path='github' 
            element={<Github/>} 
        />
        <Route path='user/:userId' element={<User/>} />
      </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
