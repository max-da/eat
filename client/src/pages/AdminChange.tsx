import { useState, ChangeEvent, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

import { ChangeBookingWrapper, H3, BookingContainer, InputContainer, SubHeading, MessageDiv, Label, Input, Select, SubmitBtn, Button } from "../pages/styles/AdminChangeStyles";

export interface IBooking {
  date: Date;
  email: string;
  name: string;
  phonenumber: number;
  time: number;
  _id: string;
  seats: number;
  message?: string;
}

export interface IBookingForm {
  date: Date;
  noPeople: number;
  time: number;
}

export interface IParams {
  id: string;
}

export const ChangeBooking = () => {
  let { id } = useParams<IParams>();
  const history = useHistory();

  const [responseMessage, setResponseMessage] = useState<IBooking>({
    date: new Date(), email: "", name: "", phonenumber: 0, time: 0, _id: "", seats: 0, message: ""});
  const [reservationById, setReservationById] = useState<IBooking>({
    date: new Date(), email: "", name: "", phonenumber: 0, time: 0, _id: "", seats: 0});
  const [bookingForm, setBookingForm] = useState<IBookingForm>({date: new Date(), noPeople: 0, time: 0})
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
        if (res.data.message !== "") {
          console.log(res.data.message);
          setResponseMessage({
            date: new Date(), email: "", name: "", phonenumber: 0, time: 0, _id: "", seats: 0, message: res.data.message});
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

  function redirect() {
    history.push("/admin");
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
      <SubHeading>Ändra här:</SubHeading>
        {responseMessage.message !== "" ? <MessageDiv>{responseMessage.message}</MessageDiv>: null}
        <Label htmlFor="date">Datum</Label>
        <Input type="date" onChange={inputHandler} name="date" style={{ fontFamily: "arial" }}></Input>
        <Label htmlFor="time">Tid</Label>
        <Select name="time" onChange={selectHandler}>
          <option value="">Välj en tid</option>
          <option>18</option>
          <option>21</option>
        </Select>
        <Label htmlFor="noPeople">Antal gäster</Label>
        <Input type="number" name="noPeople" onChange={inputHandler} placeholder="Välj antal gäster"></Input>
        <SubmitBtn onClick={() => sendEdit()}>Klar</SubmitBtn>
        <Button onClick={() => redirect()}>❮ Tillbaka till bokningar</Button>
      </InputContainer>
    </ChangeBookingWrapper>
  );
};
