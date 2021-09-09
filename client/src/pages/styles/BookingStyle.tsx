import styled from "styled-components";

import img from "../../assets/bookingBak.jpeg";

export const Container = styled.div`
  background-image: url(${img});
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 50px;
`;

export const Heading = styled.h1`
  color: #68b9b5;
  font-size: 1.7rem;
  text-transform: uppercase;
  text-shadow: 0 0 2px grey;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const BookingDiv = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 10px;
  padding: 30px 0;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
    padding: 20px 0;
  }
`;

export const InputDiv = styled(BookingDiv)`
  width: 80%;
  box-shadow: none;
  @media screen and (min-width: 768px) {
    width: 70%;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  box-shadow: 1px 3px 10px -5px black;
  border: 1px solid #52a39f;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 4px 7px;
  &:focus-visible {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TableDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Calender = styled(Input)`
  cursor: pointer;
`;
