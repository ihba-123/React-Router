import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Root from './Root.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { gitResponse } from './components/GitHub/Github.jsx'
// const router = createBrowserRouter([
// {                    
//   path: '/',
//   element: <Root/>,
//   children:([
//     {
//       path : '/Home',
//       element : <Home/>,
//     },
//     {
//       path : '/About',
//       element : <About/>
//     },
//     {
//       path : '/contact',
//       element : <Contact/>
//     },

//   ])
// }


// ])

// Another method 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route path='Home' element = {<Home/>}/>
      <Route path='About' element = {<About/>}/>  
      <Route path='Contact' element = {<Contact/>}/>
      <Route path='user/:userid' element = {<User />}/>{/*WE HAVE TO WRITE THE USERID AS SAME WE USE HERE  */}
      <Route path='Github' 
      loader = {gitResponse}
      element = {<Github/>}/>
      
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
