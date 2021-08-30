import { useState, ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { ChangeBookingWrapper, H3, BookingContainer, InputContainer, Label, Input, Select, SubmitBtn } from "../pages/styles/AdminChangeStyles";
import { IbookingForm } from "../components/Booking";

export interface IBooking {
  date: Date;
  email: string;
  name: string;
  phonenumber: number;
  time: number;
  _id: string;
  seats: number;
}

export interface IParams {
  id: string;
}

export const ChangeBooking = () => {
  let { id } = useParams<IParams>();

  // const [allReservations, setAllReservations] = useState<IBooking[]>([]);
  const [reservationById, setReservationById] = useState<IBooking>({
    date: new Date(), email: "", name: "", phonenumber: 0, time: 0, _id: "", seats: 0});
  const [bookingForm, setBookingForm] = useState<IbookingForm>({date: new Date(), noPeople: 0, time: 0})
  const [editedReservation, setEditedReservation] = useState<IBooking>({
    date: new Date(), email: "", name: "", phonenumber: 0, time: 0, _id: "", seats: 0})

  useEffect(() => {
    axios.get<IBooking>("http://localhost:8000/admin/change/" + id)
    .then((res) => {

      setReservationById(res.data);
    });
  }, [id]);

  useEffect(() => {
    if (editedReservation._id !== "") {
      axios.put<IBooking>("http://localhost:8000/admin/change", editedReservation)
      .then((res) => {
        if (res.status === 200) {
          console.log(res.status);
        }
      });
    }
  }, [editedReservation]);

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name

    setBookingForm({...bookingForm, [name]:e.target.value})    
  };

  const selectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    let name = e.target.name

    setBookingForm({...bookingForm, [name]:e.target.value})    
  };

  const sendEdit = () => {
    // console.log("nu ska userinput skickas iväg!");
    // console.log(bookingForm);
    // console.log(reservationById);

    setEditedReservation({
      date: bookingForm.date, 
      email: reservationById.email, 
      name: reservationById.name, 
      phonenumber: reservationById.phonenumber, 
      time: bookingForm.time, 
      _id: reservationById._id, 
      seats: bookingForm.noPeople
    })
  }

  const redoDate = new Date(reservationById.date).toString().split(" ");
  const formattedDate = `${redoDate[1]} ${+redoDate[2]} ${+redoDate[3]}`;

  return (
    <ChangeBookingWrapper>
      <H3>Ändra bokning</H3>
      <BookingContainer>
        <p style={{ textTransform: "capitalize", fontSize: "1.2rem" }}>
          <strong>{reservationById.name}</strong>
        </p>
        <p>
          {formattedDate}, {reservationById.time + ":00"}
        </p>
        <p><strong>{reservationById.seats + " personer"}</strong></p>
      </BookingContainer>
      <InputContainer>
      <p style={{color: "#68b9b5", fontWeight: "bold"}}>Ändra här:</p>
        <Label htmlFor="date">Datum</Label>
        <Input type="date" onChange={inputHandler} name="date" style={{ fontFamily: "arial" }}></Input>
        
        <Label htmlFor="time">Tid</Label>
        <Select name="time" onChange={selectHandler}>
          <option value="">Välj en tid</option>
          <option>18</option>
          <option>21</option>
        </Select>

        
        <Label htmlFor="noPeople">Antal gäster</Label>
        <Select name="noPeople" onChange={selectHandler}>
          <option value="">Välj antal gäster</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
          <option>11</option>
          <option>12</option>
        </Select>
        <SubmitBtn onClick={() => sendEdit()}>Klar</SubmitBtn>
      </InputContainer>
    </ChangeBookingWrapper>
  );
};
