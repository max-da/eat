import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`
export const HeroText = styled.h1`
 color: white;
 font-family: Verdana, Geneva, Tahoma, sans-serif;
 font-size: 10rem;
 display: flex;
 align-items: center; 
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
    }`

export const H2 = styled.h2`
 font-size: 1.5rem;
 font-style: italic;
 font-weight: 300;
 padding-bottom: 3%;

 @media screen and (min-width: 768px) {
    font-size: 2.5rem;
    }`

export const H3 = styled.h3`
font-size: 1.2rem;
padding-bottom: 3%;

@media screen and (min-width: 768px) {
    font-size: 1.8rem;
    }`

export const H3Light = styled.h3`
font-size: 1.2rem;
font-weight: 300;
padding-bottom: 1.2%;

@media screen and (min-width: 768px) {
    font-size: 1.7rem;
    }`

