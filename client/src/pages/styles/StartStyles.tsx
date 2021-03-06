import styled from "styled-components";
import img from '../../assets/bar.jpg';


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

export const HeroText = styled.h1`
 color: white;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 font-size: 7rem;
 display: flex;
 align-items: center; 
 margin-top: -35px;
`;

export const TextDiv = styled.div`
 padding: 5%;
`

export const H1 = styled.h1`
 font-size: 2.5rem;
 font-weight: 400;
 padding: 2%;

 @media screen and (min-width: 768px) {
    font-size: 3.5rem;
    padding-top: 0%;
    }`

export const H2 = styled.h2`
 font-size: 1.5rem;
 font-style: italic;
 font-weight: 300;
 padding-bottom: 2%;

 @media screen and (min-width: 768px) {
    font-size: 2.2rem;
    padding-bottom: 0%;
    }`

export const H3 = styled.h3`
font-size: 1.5rem;
padding: 4%;

@media screen and (min-width: 768px) {
    font-size: 1.7rem;
    padding: 2.7%;
    }`

export const H4Light = styled.h4`
font-size: 1.2rem;
font-weight: 300;
padding-bottom: 1.5%;

@media screen and (min-width: 768px) {
    font-size: 1.5rem;
    padding-bottom: 1%;
    }`