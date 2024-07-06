import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = () => {
  return (
    <nav>
        <div className="nav__hug">
          <ul>
              <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/">All</NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/promoted">Promoted </NavLink></li>
              <li><NavLink className={({isActive}) => isActive ? 'active' : ''} to="/fired">Fired</NavLink></li>
          </ul>
        </div>
    </nav>
  )
}

export default Nav