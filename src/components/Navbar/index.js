import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
          <NavLink to='/'>Bill & Bob's </NavLink>
          <NavIcon>
              <p>Menu</p>
              <Bars />
          </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;