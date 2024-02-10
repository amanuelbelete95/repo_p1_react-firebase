import React from 'react';
import './styles.css';
function NavBar() {
  return (
    <>
      <header className='mainHeader'>
        <h1>Cleaning Management Agency</h1>
        <nav>
          <ul className='links'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/contacts'>Contacts</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
