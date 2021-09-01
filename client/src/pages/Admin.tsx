import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import { AdminpageWrapper, H3, ReservationContainer, resStyle, btnStyle} from "./styles/AdminStyles";
import { SHARE_ENV } from "worker_threads";

export interface IReservation {
  _id: string;
  date: Date;
  time: number;
  name: string;
  email: string;
  seats: number;
}

export const Admin = () => {
  const [allReservations, setAllReservations] = useState<IReservation[]>([]);

  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:8000/admin").then((res) => {
      setAllReservations(res.data);
    });
  }, []);

  const editReservation = (reservation: string) => {
    history.push("/admin/change/" + reservation);
  };

  const cancelReservation = (id: string) => {
    axios.delete("http://localhost:8000/admin/delete/" + id) 
   
   axios.get("http://localhost:8000/admin").then((res) => {
        setAllReservations(res.data);
      });
  };

  let reservations = allReservations.map((reservation) => {
    const redoDate = new Date(reservation.date).toString().split(" ");
    const formattedDate = `${redoDate[1]} ${+redoDate[2]} ${+redoDate[3]}`;

    return (
      <div key={reservation._id} style={resStyle}>
        <p style={{marginBottom: "0", textAlign: "center", textTransform: "capitalize"}}>
            <strong>{reservation.name}</strong>
        </p>
        <p style={{ margin: "0", textAlign: "center" }}>
          {formattedDate}, {reservation.time + ":00"}
        </p>
        <p style={{marginBottom: "0", textAlign: "center"}}>
            <strong>{reservation.seats + " personer"}</strong>
        </p>
        <button onClick={() => cancelReservation(reservation._id)} style={btnStyle}>
          <strong>Avboka</strong>
        </button>
        <button onClick={() => editReservation(reservation._id)} style={btnStyle}>
          <strong>Ändra</strong>
        </button>
      </div>
    );
  });

  return (
    <AdminpageWrapper>
      <H3>Bokningar</H3>
      <ReservationContainer>{reservations}</ReservationContainer>
    </AdminpageWrapper>
  );
};
