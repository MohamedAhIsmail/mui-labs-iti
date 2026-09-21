import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Settings() {
  return (
    <>
    <div className='row'>

      <div className='col-6'>
        <ul>
          <li>
            <Link to={'/settings'} href="">Web</Link>
            </li>
          <li>
            <Link to={'mobile'} href="">Mobile</Link>
            </li>
        </ul>
      </div>
      <div className='col-6'>
        <Outlet />
      </div>

    </div>
    
    </>
  )
}
