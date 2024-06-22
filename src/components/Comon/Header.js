import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
        <div className=" container">
            <div className='row'>
                <div className='col-md-12'>
                    <h5 className='mt-2 fs-5 fw-bold text-white'>Left Menu</h5>
                    <ul className='navbar-nav'>
                        <li className='nav-item'><Link to="/" className='nav-link text-black  fs-6 fw-bold'>Home</Link></li>
                        <li className='nav-item'><Link to="/userdata" className='nav-link text-black  fs-6 fw-bold'>User Data List</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header