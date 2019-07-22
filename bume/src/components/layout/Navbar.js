import React from 'react';
import { navbarItems } from '../../consts';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {
          navbarItems.map(navbarItem => (
            <li key={navbarItem.id}><Link to={navbarItem.link}>{navbarItem.label}</Link></li>
          ))
        }
      </ul>
    </nav>
  );
}

export default Navbar;
