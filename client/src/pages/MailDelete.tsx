import { useParams } from "react-router-dom";
import axios from "axios";
import { AdminpageWrapper, H1, btnStyle} from "./styles/AdminStyles";

type BookingParams = {
  id: string;
};

export const MailDelete = () => {

const { id } = useParams<BookingParams>();

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






