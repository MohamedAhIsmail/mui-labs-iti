import React from 'react'
import { ScaleLoader } from "react-spinners";
import './Loder.css'

export default function Loader() {
  return (
    <>
    <div className='loader d-flex justify-content-center align-items-center'>

    <ScaleLoader color="#3074F0" />

    </div>
    
    </>
  )
}
