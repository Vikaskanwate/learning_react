import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import contactUs from "./components/contactUs.jsx"
import { Route, RouterProvider,createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"contact",
        element:<contactUs/>
      },
    ]
  }
])
// const router = createBrowserRouter([
//   createRoutesFromElements(
//     <Route path='/' element={<Layout />} >
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />}/>
//     </Route>
//   )
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
