import axios from "axios"
import { useState ,ChangeEvent } from "react"
import styled from "styled-components"
import { IbookingForm } from "./Booking"

export interface Ibooking{
  
    email:string;
    name:string;
    date:Date
    time:Number;
    seats:Number;
    phonenumber:Number;
    
}
interface Iprops{
    bookingForm:IbookingForm
    closeWindow():void;
}
const FormWindow =styled.div`
    background-color:red;
    width: 50%;
    height: 50%;
`
export const BookingFormComponent = (props:Iprops) => {
    
    const [form, setForm] = useState<Ibooking>({
        email:"",
        name:"",
        date:props.bookingForm.date,
        time:+props.bookingForm.time,
        seats:+props.bookingForm.noPeople,
        phonenumber:0
    })

    const inputHandling = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        setForm({...form, [name]:e.target.value})
        console.log(form)
    }
    function x(){
        props.closeWindow();
    }
    function sendPost(){
        console.log(form)
        axios.post("http://localhost:8000/bookings/", form).then((res)=>{
        if (res.status === 200){
            console.log("ABOW")
        }
        })
    }
    return (
            <FormWindow>
                <button onClick={x}>X</button>
                <input type="text" onChange={inputHandling} name="email"></input>
                <input type="text" onChange={inputHandling} name="name"></input>
                <input type="number" onChange={inputHandling} name="phonenumber"></input>
                <button onClick={sendPost}>Boka!</button>
            </FormWindow>
        )
}