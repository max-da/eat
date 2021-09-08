import { useParams } from "react-router-dom";
import axios from "axios";
import { AdminpageWrapper, H1, btnStyle} from "./styles/AdminStyles";
import { IBooking } from "./AdminChange";
import { useEffect } from "react";

type BookingParams = {
  id: string;
};

export const MailDelete = () => {

const { id } = useParams<BookingParams>();

// useEffect(() => {
//   axios.get<IBooking>("http://localhost:8000/admin/change/" + id)
//   .then((res) => {

//     setReservationById(res.data);
//   });
// }, [id]);

// const getReservation = (id: string) => {
//   axios.get("http://localhost:8000/admin/delete/" + id)
//   .then((res) => {
//   getReservation(res.data);
// });
// };



  const cancelReservation = (id: string) => {
    axios.delete("http://localhost:8000/admin/delete/" + id)
  };

    return (
      <AdminpageWrapper>

      <H1>Bokningsnummer: {id}</H1>

      <button onClick={() => cancelReservation(id)} style={btnStyle}>
    <strong>Avboka</strong></button>
      </AdminpageWrapper>
  );
};






