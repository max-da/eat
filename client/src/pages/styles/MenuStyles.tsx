import styled from "styled-components";
import img from '../../assets/restaurant.jpeg';


export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`
export const HeroImage = styled.div`
    background-image: url(${img});
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center; 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
`;

export const HeroPopUp = styled.div`
 background-color: white;
 width: 70%;
 height: 60%;
 display: flex;
 align-items: center;  
 align-self: center;
 text-align: left;

 @media screen and (min-width: 768px) {
    width: 70%;
    height: 50%;
    }`
;

export const TextDiv = styled.div`
 padding: 5%;
`
export const H1 = styled.h1`
 font-size: 2.5rem;
 font-weight: 400;
 padding: 2%;

 @media screen and (min-width: 768px) {
    font-size: 3.2rem;
    }`

export const H4 = styled.h4`
font-size: 1.2rem;
padding-bottom: 2%;

@media screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding-bottom: 0%;
    }`

export const H4Light = styled.h4`
font-size: 1.2rem;
font-weight: 300;
padding-bottom: 1.5%;

@media screen and (min-width: 768px) {
    font-size: 1.5rem;
    padding-bottom: 1%;
    }`

export const linkstyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "1.2rem"     
}