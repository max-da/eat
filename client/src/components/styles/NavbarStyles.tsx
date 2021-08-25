import styled, { keyframes } from "styled-components";

const opacity = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

export const Header = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
`

export const HamburgerBtn = styled.button`
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

export const Bar = styled.span`
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

export const XBar = styled.span`
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

export const LinkContainer = styled.div`
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

export const MenuMobile = styled.ul`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 75px;
    right: 0;
    background-color: white;
    z-index: 5;

    animation: ${opacity} 0.3s linear;
`

export const LiMobile = styled.li`
    width: 60%;
    list-style: none;
    text-transform: uppercase;
    text-align: center;
    padding: 15px 0;
`

export const MenuDesktop = styled.ul`
    display: flex;
    background-color: white;
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`

export const LiDesktop = styled.li`
    list-style: none;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer;
    padding: 0 15px;

    &:first-child {
        font-weight: bold;
    }
`

export const DarkMode = styled.div`
    text-transform: uppercase;
    padding-right: 15px;
    display: none;

    @media screen and (min-width: 768px) {
        display: flex;
    }
`

export const linkstyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "1.5rem"
}