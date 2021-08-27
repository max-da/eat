import { useState, ChangeEvent, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { ChangeBookingWrapper, H3, BookingContainer, InputContainer, Input } from "../pages/styles/AdminChangeStyles";
import { TableComponent } from "../components/TableComponent";
import { IbookingForm, ITableinfo } from "../components/Booking";

export interface IBooking {
  date: Date;
  email: string;
  name: string;
  time: number;
  _id: string;
}

export interface IParams {
  id: string;
}

export const ChangeBooking = () => {
  let { id } = useParams<IParams>();

  let initialValue: IBooking = {
    date: new Date(),
    email: "",
    name: "",
    time: 0,
    _id: "",
  };

  let defaultValue: IBooking[] = []

  const [bookingById, setBookingById] = useState(initialValue);
  const [hasSearched, setHasSearched] = useState(false);
  const [stateTime18, setTime18] = useState(0)
  const [stateTime21, setTime21] = useState(0)
  const [bookings, setBooking] = useState(defaultValue)
  const [bookingForm, setbookingForm] = useState<IbookingForm>({
    date:new Date(),
    noPeople:0,
    time:0
})

let tableInfo: ITableinfo = {
  time18: 0,
  time21: 0,
  // people: bookingForm.noPeople,
  // date: bookingForm.date
}

  useEffect(() => {
    axios.get<IBooking>("http://localhost:8000/admin/change/" + id)
    .then((res) => {

      setBookingById(res.data);
    });
  }, [id]);

  useEffect(() => {
    let newDate = bookingForm.date.toLocaleString("se-SV",  {  year: 'numeric', month: 'numeric', day: 'numeric' })
    console.log("calling " + newDate)

    axios.get<IBooking[]>("http://localhost:8000/bookings/" + newDate)
    .then((res)=> {
        setBooking(res.data);
    })
}, [bookingForm.date])

useEffect(() => {
  for (let i = 0; i < bookings.length; i++) {
    if (bookings[i].time === 21){
      tableInfo.time21 += 1;
    } else {
      tableInfo.time18 += 1;
    }
  } 
  setTime21(tableInfo.time21)
  setTime18(tableInfo.time18)
}, [bookings])

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name
    setbookingForm({...bookingForm, [name]:e.target.value})
    setHasSearched(true);
  };

  const showFormParent = () => {
    console.log("hatar detta");
  }

  const redoDate = new Date(bookingById.date).toString().split(" ");
  const formattedDate = `${redoDate[1]} ${+redoDate[2]} ${+redoDate[3]}`;

  return (
    <ChangeBookingWrapper>
      <H3>Ändra bokning</H3>
      <BookingContainer>
        <p style={{ textTransform: "capitalize", fontSize: "1.2rem" }}>
          <strong>{bookingById.name}</strong>
        </p>
        <p>
          {formattedDate}, {bookingById.time + ":00"}
        </p>
        <p>6 personer</p>
      </BookingContainer>
      <p style={{color: "#68b9b5", fontSize: "1.1rem", fontWeight: "bold"}}>Vad vill du ändra?</p>
      <InputContainer>
        <Input type="date" name="date" style={{ fontFamily: "arial" }} onChange={inputHandler}></Input>
        <Input type="number" name="noPeople" placeholder="Antal gäster" onChange={inputHandler}></Input>
      </InputContainer>

      {hasSearched === true ? 
      <ul>
        <TableComponent showForm={showFormParent} noPeople={bookingForm.noPeople} bookingsInDB={stateTime18} time={18}></TableComponent>
        <TableComponent showForm={showFormParent} noPeople={bookingForm.noPeople} bookingsInDB={stateTime21} time={21}></TableComponent>
      </ul> : null}
    </ChangeBookingWrapper>
  );
};
