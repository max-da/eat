import styled from "styled-components";

export const ChangeBookingWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4%;
padding-bottom: 30px;

@media screen and (min-width: 1200px) {
    margin: 0;
}
`;

export const H3 = styled.h3`
color: #68b9b5;
font-size: 1.7rem;
text-transform: uppercase;
text-shadow: 0 0 2px grey;
margin: 20px 0 10px 0;
padding-bottom: 20px;
@media screen and (min-width: 768px) {
    font-size: 2rem;
}
`;

export const BookingContainer = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
background-color: #e7e7e7;
border-radius: 10px;
margin-bottom: 30px;
padding: 20px 5px;

@media screen and (min-width: 1200px) {
    width: 50%;
}
`;

export const SubHeader = styled.p`
  color: #68b9b5;
  font-size: 1.1rem;
  font-weight: bold;
`

export const InputContainer = styled.div`
width: 90%;
display: flex;
flex-direction: column;
align-items: center;

@media screen and (min-width: 768px) {
  width: 60%;
}
`;

export const SubHeading = styled.p`
  color: #68b9b5;
  font-weight: bold;
`

export const MessageDiv = styled.div`
  background-color: #68b9b5;
  color: white;
  font-size: 0.8rem;
  border-radius: 15px;
  text-align: center;
  margin: 10px 0 5px 0;
  padding: 5px 20px;
`

export const Label = styled.label`
  width: 140px;
  font-size: 0.7rem;
  margin: 10px 0 2px 0;
`

export const Input = styled.input`
  width: 150px;
  border: 1px solid #52a39f;
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 5px;
`;

export const Select = styled.select`
  width: 150px;
  border: 1px solid #52a39f;
  border-radius: 10px;
  cursor: pointer;
  padding: 2px 5px;
`

export const SubmitBtn = styled.button`
  background-color: #68b9b5;
  color: white;
  border: 1px solid transparent;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
  padding: 2px 7px;

  &:hover {
    background-color: white;
    color: #68b9b5;
    border: 1px solid #68b9b5;
  }
`

export const Button = styled.button`
    background-color: transparent;
    color: #52a39f;
    font-size: 0.9rem;
    border: none;
    margin: 20px 2.5px 0 2.5px;
    cursor: pointer;

    &:hover {
        color: black;
    }
`