import { useState } from "react";
import { Link } from "react-router-dom";

import { Header, HamburgerBtn, Bar, XBar, LinkContainer, MenuMobile, LiMobile, MenuDesktop, LiDesktop, linkstyle } from "./styles/NavbarStyles";

export const Navbar = () => {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);

    function toggleHamburger() {
        navbarIsOpen === false ? setNavbarIsOpen(true) : setNavbarIsOpen(false);
    }

    return (
        <Header>
            <HamburgerBtn onClick={toggleHamburger}>{navbarIsOpen ? <XBar></XBar> : <Bar></Bar>}</HamburgerBtn>
            <LinkContainer><Link to="/booking" style={linkstyle}>Boka</Link></LinkContainer>
            {navbarIsOpen ? <MenuMobile>
                <LiMobile><Link to="/" style={linkstyle} onClick={toggleHamburger}>Eat</Link></LiMobile>
                <LiMobile><Link to="/booking" style={linkstyle} onClick={toggleHamburger}>Boka bord</Link></LiMobile>
                <LiMobile><Link to="/menu" style={linkstyle} onClick={toggleHamburger}>Meny</Link></LiMobile>
                <LiMobile><Link to="/contact" style={linkstyle} onClick={toggleHamburger}>Kontakta oss</Link></LiMobile>
            </MenuMobile> : null}
            <MenuDesktop>
                <LiDesktop><Link to="/" style={linkstyle}>Eat</Link></LiDesktop>
                <LiDesktop><Link to="/booking" style={linkstyle}>Boka</Link></LiDesktop>
                <LiDesktop><Link to="/menu" style={linkstyle}>Meny</Link></LiDesktop>
                <LiDesktop><Link to="/contact" style={linkstyle}>Kontakt</Link></LiDesktop>
            </MenuDesktop>
        </Header>
    )
}