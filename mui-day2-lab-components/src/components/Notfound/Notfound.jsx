import React from 'react'
import notfound from '../../assets/images/notfound.jpg'
import './Notfound.module.css'

export default function Notfound() {
  return (
    <div className='notfound'>
      <img src={notfound} className='w-100' />
    </div>
  )
}
