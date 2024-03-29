import React from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement';


const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/home" activeStyle>
            Home
          </MenuLink>
          <MenuLink to="/about" activeStyle>
            About
          </MenuLink>
          
          <MenuLink to="/blog" activeStyle>
            Blog
          </MenuLink>
        
          <MenuLink to="/signup" activeStyle>
            SignUp
          </MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  )
}
export default Navbar

