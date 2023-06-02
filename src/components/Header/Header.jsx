import React from 'react';
import { Link } from 'react-router-dom'
import './index.js'
import { Container, IconContent, IconsContainer, Logo, NavItem, Navbar } from './index.js';
import { BsFillSunFill, BsFillMoonFill, BsMenuButtonWide } from 'react-icons/bs'

const Header = () => {
    return ( 
        <Container>
            <Logo>
                Port
                <span>folio</span>
            </Logo>

            <Navbar>
                <NavItem>
                    <Link to="/">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/about">About</Link>
                </NavItem>
                <NavItem>
                    <Link to="/portfolio">Portfolio</Link>
                </NavItem>
            </Navbar>

            <IconsContainer>
                <IconContent>
                    <BsFillSunFill />
                    <BsFillMoonFill />
                </IconContent>
                <IconContent>
                    <BsMenuButtonWide />
                </IconContent>
            </IconsContainer>
        </Container>
     )
}
 
export default Header