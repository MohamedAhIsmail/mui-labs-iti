import React from 'react'
import Layout from './Components/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home'
import Cart from './Components/Cart/Cart'

export default function App() {

  const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children: [
      {index: true, element: <Home/>},
      {path: '/cart', element: <Cart/>}
    ]}
  ])

  return (
    <RouterProvider router={routes}></RouterProvider>

  )
}

