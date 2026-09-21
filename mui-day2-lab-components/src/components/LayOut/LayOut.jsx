import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import ToTop from '../ToTop/ToTop'
// import Navbar from '../../Navbar/Navba'

export default function LayOut() {
  return (
    <>
    <Navbar />
    <div className='mt-4'>
      <div className='container'>
        <Outlet />
        <ToTop></ToTop>
      </div>
    </div>
    </>
    
  )
}
