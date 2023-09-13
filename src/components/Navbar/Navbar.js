import React, {useRef, useState} from 'react';
import {IconContext} from 'react-icons';
import {Nav, NavbarContainer, NavIcon, NavLogo, StyledBurger,} from './NavbarStyles.js';
import Logo from "../../assets/images/gameloft_logo.svg";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();

    const Burger = ({open, setOpen}) => {
        return (
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <span/>
                <span/>
                <span/>
            </StyledBurger>
        )
    }

    return (
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <NavIcon src={Logo} alt="logo"/>
                    </NavLogo>
                    <div ref={node} style={{alignSelf: "center"}}>
                        <Burger open={open} setOpen={setOpen}/>
                    </div>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    );
};

export default Navbar;
