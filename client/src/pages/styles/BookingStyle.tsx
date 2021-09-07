import styled from "styled-components"

import img from "../../assets/bookingBak.jpeg";

export const Container = styled.div`
     background-image: url(${img});
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    font-family: 'Source Sans Pro', sans-serif;
 
 

`
export const Heading = styled.h1`

color: #68b9b5;
font-size: 1.7rem;
text-transform: uppercase;
text-shadow: 0 0 2px grey;

@media screen and (min-width: 768px) {
        font-size: 3rem;
    }
`
export const BookingDiv = styled.div`
    display: flex;
    margin-top: 5%;
    padding: 15px;

    flex-direction: column;
    align-items: center;
    max-width: 700px;
    width: 80%;
    
    border-radius: 10px;
    background-color:white;
    @media screen and (min-width: 768px) {
       width: 50%;
       font-size:2rem;
    }
    
  
`
export const InputDiv = styled(BookingDiv)`

    width: 90%;
   
    box-shadow:none;
`
export const Input = styled.input`
    width: 100%;
    font-size: 1.2rem;
    padding: 5px;
    box-shadow: 1px 3px 10px -5px black;
    
    border: 1px solid #52a39f;
    &:focus-visible{
        outline: none;
    }
    @media screen and (min-width: 768px) {
        font-size: 1.7rem;
    }
`
export const UlDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
       
`

export const Calender = styled(Input)`

    
`