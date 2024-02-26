import Works from '../works/Works';
import Home from '../home/Home';
import React from 'react';
import './navbar.css';
import { Link, Route, Routes } from 'react-router-dom';

function NavBar() {
  return (
    <>
      <header className='mainHeader'>
        <h1>[CMA]💤</h1>

        {/* navigation */}
        <nav>
          <ul className='links'>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/works'>Works</Link>
            </li>
            {/* <li>
              <a to='/contacts'>Contacts</a>
            </li> */}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          path=''
          element={<Home />}></Route>
        <Route
          path='/works'
          element={<Works />}></Route>
        {/* <Route
            path='/contacts'
            element={<Contacts />}></Route> */}
      </Routes>
    </>
  );
}

export default NavBar;
