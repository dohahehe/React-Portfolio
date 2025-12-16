import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Portfolio from './Components/Potfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'
import Error from './Components/Error/Error'



const router = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {path: '/', element: <Home />},
    {path: '/about', element: <About />},
    {path: '/portfolio', element: <Portfolio />},
    {path: '/contact', element: <Contact />},
    {path: '*', element: <Error />}
  ]},
  
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
