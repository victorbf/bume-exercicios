import React from 'react';
import styled from 'styled-components';
import { navbarItems } from '../../consts';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const Navigation = styled.nav`
    background: #1976d2;
    color: white;
  `

  const NavigationList = styled.ul`
    list-style: none;
    display: flex;
    margin: 0;
    padding: 1rem;
    justify-content: space-around;
  `

  const NavigationItem = styled.li`
    a {
      color: white;
    }
  `

  return (
    <Navigation>
      <NavigationList>
        {
          navbarItems.map(navbarItem => (
            <NavigationItem key={navbarItem.id}><Link to={navbarItem.link}>{navbarItem.label}</Link></NavigationItem>
          ))
        }
      </NavigationList>
    </Navigation>
  );
}

export default Navbar;
