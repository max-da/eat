import { useState, useEffect } from "react"
import axios from "axios";
import styled from "styled-components";

export interface IReservation {
    _id: string,
    date: Date,
    time: number,
    name: string,
    email: string
}

export const Admin = () => {
    const [allReservations, setAllReservations] = useState<IReservation[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8000/admin").then((res) => {
        //    console.log(res.data)
           setAllReservations(res.data)
       }) 
    }, []);

    const editReservation = () => {
        console.log("Du tryckte på minuset"); 
    }

    const cancelReservation = () => {
        console.log("Du har tryckt på krysset");
    }

    const inputHandler = () => {
        console.log("blä");
    }
    
    const onSubmit = () => {
        console.log("blä");
        
    //     let newDate = bookingForm.date.toLocaleString("se-SV", {year: 'numeric', month: 'numeric', day: 'numeric'})
        
    //     axios.get("http://localhost:8000/bookings/" + newDate).then((res) => {
    //        console.log(res)
           
    //        for (let i = 0; i < res.data.length; i++) {
    //             if (res.data[i].time === 18) {
    //                 setTime18(time18+1)
    //             } else {
    //                 setTime21(time21+1)
    //             }
    //         }  
    //    }) 
    }

    const AdminpageWrapper = styled.div`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 3.5%;
    `

    const H3 = styled.h3`
        color: #68b9b5;
        font-size: 1.7rem;
        text-transform: uppercase;
        text-shadow: 0 0 2px grey;

        &:first-of-type {
            font-size: 1.9rem;
        }
    `

    const ReservationContainer = styled.div`
        width: 90%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        @media screen and (min-width: 768px) {
            width: 60%;
        }
    `

    const InputContainer = styled.div`
        width: 90%;
        display: flex;
        justify-content: center;

        @media screen and (min-width: 768px) {
            width: 60%;
        }
    `

    const Input = styled.input`
        width: 140px;
        border: 1px solid black;
        border-radius: 10px;
        margin: 10px;
        padding: 2px 5px;
    `

    const SubmitBtn = styled.button`
        background-color: #68b9b5;
        color: white;
        border: 1px solid transparent;
        border-radius: 10px;
        cursor: pointer;
        padding: 3px 10px;

        &:hover {
            background-color: white;
            color: #68b9b5;
            border: 1px solid #68b9b5;
        }
    `

    const resStyle = {
        width: "40%",
        backgroundColor: "#ebebeb",
        borderRadius: "10px",
        margin: "0 10px 20px 10px",
        padding: "2px 5px"
    }

    const btnStyle = {
        cssFloat: "right",
        cursor: "pointer",
        border: "none",
        fontSize: "1rem",
        padding: "0 1% 1% 2%"
    }

    let reservations = allReservations.map((reservation) => {
            const redoDate = new Date(reservation.date).toString().split(' ');
            const formattedDate = `${redoDate[1]} ${+redoDate[2]} ${+redoDate[3]}`;

        return (
            <div key={reservation._id} style={resStyle}>
                <p style={{marginBottom: "0", textAlign: "center"}}><strong>{reservation.name}</strong></p>
                <p style={{margin: "0", textAlign: "center"}}>{formattedDate}, {reservation.time + ":00"}</p>
                <button onClick={cancelReservation} style={btnStyle}><strong>x</strong></button>
                <button onClick={editReservation} style={btnStyle}><strong>o</strong></button>
            </div>
        )
    })
   
    return (
       <AdminpageWrapper>
            <H3>Bokningar</H3>
            <ReservationContainer>{reservations}</ReservationContainer>
            <H3 style={{margin: "40px 0 10px 0"}}>Boka bord</H3>
            <InputContainer>
                <Input type="date" style={{fontFamily: "arial"}} onChange={inputHandler}></Input>
                <Input type="number" placeholder="Antal gäster" onChange={inputHandler}></Input>
            </InputContainer>
            <SubmitBtn onClick={onSubmit}>Sök</SubmitBtn>
       </AdminpageWrapper>
    ) 
} 