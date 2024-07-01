import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navbar'>
      <Link to="/">
        <h1 className='header'>Workout</h1>
      </Link>

      <div>
        Login
      </div>
    </header>
  )
}

export default Navbar
