import styled from "styled-components";

export const AdminpageWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3.5%;
`

export const H3 = styled.h3`
color: #68b9b5;
font-size: 1.7rem;
text-transform: uppercase;
text-shadow: 0 0 2px grey;
padding-bottom: 20px;
`

export const ReservationContainer = styled.div`
width: 90%;
display: flex;
flex-wrap: wrap;
justify-content: center;

@media screen and (min-width: 768px) {
    width: 60%;
}
`

export const InputContainer = styled.div`
width: 90%;
display: flex;
justify-content: center;

@media screen and (min-width: 768px) {
    width: 60%;
}
`

export const Input = styled.input`
width: 140px;
border: 1px solid black;
border-radius: 10px;
margin: 10px;
padding: 2px 5px;
`

export const SubmitBtn = styled.button`
background-color: #68b9b5;
color: white;
border: 1px solid transparent;
border-radius: 10px;
cursor: pointer;
padding: 3px 10px;

&:hover {
    background-color: white;
    color: #68b9b5;
    border: 1px solid #68b9b5;
}
`