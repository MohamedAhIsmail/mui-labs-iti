import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LayOut from './components/LayOut/LayOut'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Notfound from './components/Notfound/Notfound'
import Settings from './components/Settings/Settings'
import Web from './components/Settings/Web/Web'
import Mob from './components/Settings/Mob/Mob'
import Categories from './components/Categories/Categories'
import Cart from './components/Cart/Cart'
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes'
import ProductDetails from './components/ProductDetails/ProductDetails'
import CustomHook from './components/customHook/customHook'
import { ToastContainer } from "react-toastify";

function App() {
  
  const routes = createBrowserRouter([
    { path: '', element: <LayOut />, children: [
      {path: '/', element: <ProtectedRoutes> <Home /> </ProtectedRoutes>},
      {path: 'about', element: <ProtectedRoutes> <About /> </ProtectedRoutes>},
      {path: 'contact', element: <ProtectedRoutes> <Contact /> </ProtectedRoutes> },
      {path: 'categories', element: <ProtectedRoutes> <Categories /> </ProtectedRoutes>},
      {path: 'cart', element: <ProtectedRoutes> <Cart/> </ProtectedRoutes>},
      {path: 'product-details/:id', element:<ProtectedRoutes> <ProductDetails /> </ProtectedRoutes>},
      {path: 'custom-hook', element: <ProtectedRoutes> <CustomHook /> </ProtectedRoutes>},
      {path: 'settings', element: <Settings />, children: [
        {path: '', element: <Web />},
        {path: 'mobile', element: <Mob />}
      ]},
      {path: 'login', element: <Login />},
      {path: 'register', element: <Register />},
      
      {path: '*', element: <Notfound />},
      
    ] }
  ])

  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
