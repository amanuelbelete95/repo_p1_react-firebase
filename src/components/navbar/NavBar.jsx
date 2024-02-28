import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      color: isActive ? 'white' : 'blue',
    };
  };
  return (
    <>
      <header className='mainHeader'>
        <h1>[CMA-Sanitation]💤</h1>

        {/* navigation */}
        <nav>
          <ul className='links'>
            <li>
              <NavLink
                style={navLinkStyle}
                to='/'>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={navLinkStyle}
                to='/works'>
                Works
              </NavLink>
            </li>
            <li>
              <NavLink
                style={navLinkStyle}
                to='/contacts'>
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
