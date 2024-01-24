import React from 'react'
import logo from '../../assets/fork-knife.svg'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Link to={'/'}>
        <img src={logo} alt="logo" className='logo' />
      </Link>
      <nav>
        <Link to={'/'}>
          Home
        </Link>
      </nav>
    </header>
  )
}

export default Header
