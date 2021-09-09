import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { PageWrapper, H1, btnStyle, resStyle } from "./styles/MailDeleteStyles";

export interface IBookingParams {
  id: string;
}

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

/* Sidan du kommer till när du trycker på avboka länken i mailet du får vid bokning eller ändring av bokning */

export const MailDelete = () => {
const { id } = useParams<IBookingParams>();

const [reservationById, setReservationById] = useState<IBooking>({
  date: new Date(), email: "", name: "", phonenumber: 0, time: 0, _id: "", seats: 0});

  /* Hämtar den aktuella bokning från databasen och renderar den på skärmen */

  useEffect(() => {
    axios.get<IBooking>("http://localhost:8000/maildelete/" + id)
      .then((res) => {
        setReservationById(res.data);
      });
  }, [id]);

/* Raderar den aktuella bokningen från databasen */

  const cancelReservation = (id: string) => {
    axios.delete("http://localhost:8000/admin/delete/" + id);
  };

  const redoDate = new Date(reservationById.date).toString().split(" ");
  const formattedDate = `${redoDate[1]} ${+redoDate[2]} ${+redoDate[3]}`;

  return (
    <PageWrapper>
      <H1>Bekräfta avbokning</H1>
      <div style={resStyle}>
        <p style={{marginBottom: "0", textAlign: "center", textTransform: "capitalize"}}>
          <strong>{reservationById.name}</strong>
        </p>
        <p style={{ margin: "0", textAlign: "center" }}>
          {formattedDate}, {reservationById.time + ":00"}
        </p>
        <p style={{ marginBottom: "0", textAlign: "center" }}>
          <strong>{reservationById.seats + " personer"}</strong>
        </p>
        <button onClick={() => cancelReservation(id)} style={btnStyle}>
          <strong>Avboka</strong>
        </button>
      </div>
    </PageWrapper>
  );
};
