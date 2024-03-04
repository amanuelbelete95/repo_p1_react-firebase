import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './teams.css';

const Teams = () => {
  const navNavLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      color: isActive ? 'green' : 'blue',
    };
  };

  return (
    <section>
      <nav className='team-nav'>
        <NavLink
          style={navNavLinkStyle}
          to='recycling-team'>
          Recycling Team
        </NavLink>
        <NavLink
          style={navNavLinkStyle}
          to='awareness-team'>
          Awareness Team
        </NavLink>
        <NavLink
          style={navNavLinkStyle}
          to='disposal-team'>
          {' '}
          Disposal Team{' '}
        </NavLink>
      </nav>
      <Outlet />
    </section>
  );
};

export default Teams;
