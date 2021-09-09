import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`

export const TextDiv = styled.div`
 padding: 5%;
 margin-top: 20%;
 @media screen and (min-width: 768px) {
    margin-top: 0%;
    }`
    
export const H1 = styled.h1`
 font-size: 2.5rem;
 font-weight: 400;
 padding: 2%;
 @media screen and (min-width: 768px) {
    font-size: 2.7rem;
    }`

export const H2 = styled.h2`
 font-size: 1.5rem;
 font-style: italic;
 font-weight: 300;
 padding-bottom: 2%;

 @media screen and (min-width: 768px) {
    font-size: 2rem;
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
    font-size: 1.4rem;
    padding-bottom: 1%;
    }`

export const Li = styled.li`
list-style: none;
text-align: center;
text-decoration: underline;
cursor: pointer;`