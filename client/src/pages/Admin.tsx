import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom";
import axios from "axios";
import { AdminpageWrapper, H3, ReservationContainer } from "./styles/AdminStyles";

export interface IReservation {
    _id: string,
    date: Date,
    time: number,
    name: string,
    email: string
}

export const Admin = () => {
    const [allReservations, setAllReservations] = useState<IReservation[]>([]);

    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/bookings").then((res) => {
           setAllReservations(res.data)
       }) 
    }, []);

    const editReservation = (reservation: string) => {
        history.push("/admin/change/" + reservation);
    }

    const cancelReservation = () => {
        console.log("Du har tryckt på krysset");
    }

    // const inputHandler = () => {
    //     console.log("blä");
    // }
    
    // const onSubmit = () => {
    //     console.log("blä");
    // }

    const resStyle = {
        width: "70%",
        backgroundColor: "#ebebeb",
        borderRadius: "10px",
        margin: "0 10px 20px 10px",
        padding: "15px 5px"
    }

    let reservations = allReservations.map((reservation) => {
            const redoDate = new Date(reservation.date).toString().split(' ');
            const formattedDate = `${redoDate[1]} ${+redoDate[2]} ${+redoDate[3]}`;

        return (
            <div key={reservation._id} style={resStyle}>
                <p style={{marginBottom: "0", textAlign: "center"}}><strong>{reservation.name}</strong></p>
                <p style={{margin: "0", textAlign: "center"}}>{formattedDate}, {reservation.time + ":00"}</p>
                <button onClick={cancelReservation} style={{float: "right", margin: "20px 10px 0 0", cursor: "pointer", border: "none", color: "#52a39f"}}><strong>Avboka</strong></button>
                <button onClick={() => editReservation(reservation._id)} style={{float: "left", margin: "20px 0 0 10px", cursor: "pointer", border: "none", color: "#52a39f"}}><strong>Ändra</strong></button>
            </div>
        )
    })
   
    return (
       <AdminpageWrapper>
            <H3>Bokningar</H3>
            <ReservationContainer>{reservations}</ReservationContainer>
       </AdminpageWrapper>
    ) 
} 