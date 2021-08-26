import { useState, ChangeEvent, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export interface IBooking {
  date: Date;
  email: string;
  name: string;
  time: number;
  id: number;
}

export interface IParams {
  id: string;
}

export const ChangeBooking = () => {
  let { id } = useParams<IParams>();

  const [bookingById, setBookingById] = useState("");

  useEffect(() => {
      console.log(id);
      
    axios.get<IBooking>("http://localhost:8000/bookings/" + id).then((res) => {
        console.log(res);
        
        // setBookingById(res);
    })
  }, [bookingById]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("blä");
    // let name = e.target.name;
    // setBookingForm({ ...bookingForm, [name]: e.target.value });
  };

  const ChangeBookingWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `;
  const InputContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) {
      width: 60%;
    }
  `;
  const H3 = styled.h3`
    color: #68b9b5;
    font-size: 1.7rem;
    text-transform: uppercase;
    text-shadow: 0 0 2px grey;
    padding-bottom: 20px;
  `;
  const Input = styled.input`
    width: 140px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
    padding: 2px 5px;
  `;

  return (
    <ChangeBookingWrapper>
        <p>Här presenteras bokningen vars id jag hämtat</p>
      <H3 style={{ margin: "40px 0 10px 0" }}>Ändra bokning</H3>
      <InputContainer>
        <Input
          type="date"
          name="date"
          style={{ fontFamily: "arial" }}
          onChange={inputHandler}
        ></Input>
        <Input
          type="number"
          name="noPeople"
          placeholder="Antal gäster"
          onChange={inputHandler}
        ></Input>
      </InputContainer>
    </ChangeBookingWrapper>
  );
};
