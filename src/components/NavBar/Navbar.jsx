import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

export const Navbar = () => {
  return (
    <div className='section-navBar'>
        <NavLink to='/'>Home</NavLink>
        <div className='link-status'>
        <NavLink to='/pending'>Pending</NavLink>
        <NavLink to='/inprogress'>In Progress</NavLink>
        <NavLink to='/completed'>Completed</NavLink>
        </div>
    </div>
  )
}
