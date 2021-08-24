import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
    const [navbarIsOpen, setNavbarIsOpen] = useState(false);

    function toggleHamburger() {
        navbarIsOpen === false ? setNavbarIsOpen(true) : setNavbarIsOpen(false);
    }

    const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    `
    const HamburgerBtn = styled.button`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 5%;
    transform: translateY(-50%);
    color: black;
    border: none;
    padding: 0;

    @media screen and (min-width: 768px) {
        visibility: hidden;
    }
    `
    const Bar = styled.span`
    width: 30px;
    height: 5px;
    position: relative;
    background-color: black;
    border-radius: 5px;

    &::before, &::after {
        content: "";
        width: 30px;
        height: 5px;
        position: absolute;
        left: 0;
        background-color: black;
        border-radius: 5px;
    }

    &::before {
        top: 8px;
    }

    &::after {
        bottom: 8px;
    }
    `
    const XBar = styled.span`
        width: 30px;
        height: 5px;
        position: relative;
        transform: rotate(-45deg);
        background-color: black;
        border-radius: 5px;

        &::after {
        content: "";
        width: 30px;
        height: 5px;
        position: absolute;
        left: 0;
        transform: rotate(-90deg);
        background-color: black;
        border-radius: 5px;
    }
    `
    const LinkContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    border: none;
    background-color: transparent;
    text-transform: uppercase;
    font-weight: 600;
    padding: 0;

    @media screen and (min-width: 768px) {
        visibility: hidden;
    }
    `
    const MenuMobile = styled.ul`
        width: 100%;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 80px;
        right: 0;
        background-color: white;
        z-index: 5;
    `
    const LiMobile = styled.li`
        width: 60%;
        list-style: none;
        text-transform: uppercase;
        text-align: center;
        padding: 15px 0;
    `
    const MenuDesktop = styled.ul`
        display: flex;
        background-color: white;
        display: none;

        @media screen and (min-width: 768px) {
            display: flex;
        }
    `
    const LiDesktop = styled.li`
        list-style: none;
        text-transform: uppercase;
        text-align: center;
        cursor: pointer;
        padding: 0 15px;

        &:first-child {
            font-weight: bold;
        }
    `
    const DarkMode = styled.div`
        text-transform: uppercase;
        padding-right: 15px;
        display: none;

        @media screen and (min-width: 768px) {
            display: flex;
        }
    `

    const linkstyle = {
        color: "black",
        textDecoration: "none",
        fontSize: "1.5rem"
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
                <LiMobile><Link to="/blabla" style={linkstyle} onClick={toggleHamburger}>Nattläge</Link></LiMobile>
            </MenuMobile> : null}
            <MenuDesktop>
                <LiDesktop><Link to="/" style={linkstyle}>Eat</Link></LiDesktop>
                <LiDesktop><Link to="/booking" style={linkstyle}>Boka</Link></LiDesktop>
                <LiDesktop><Link to="/menu" style={linkstyle}>Meny</Link></LiDesktop>
                <LiDesktop><Link to="/contact" style={linkstyle}>Kontakt</Link></LiDesktop>
            </MenuDesktop>
            <DarkMode><Link to="/blabla" style={linkstyle}>Nattläge</Link></DarkMode>
        </Header>
    )
}