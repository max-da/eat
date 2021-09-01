import axios from "axios"
import { useState ,ChangeEvent, useEffect} from "react"
import styled from "styled-components"
import { setConstantValue } from "typescript"
import { IbookingForm } from "./Booking"
import { ErrorBooking } from "./ErrorBooking"
import { SuccessBooked } from "./SuccessBooked"

export interface Ibooking{
  
    email:string;
    name:string;
    date:Date | null;
    time:Number;
    seats:Number;
    phonenumber:Number;
    
}
interface Iprops{
    bookingForm:IbookingForm
    closeWindow():void;
    errorFunc(error:boolean, msgErr:string):void;
}
const FormWindow =styled.div`
    background-color:red;
    width: 50%;
    height: 50%;
`
export const BookingFormComponent = (props:Iprops) => {
    
    const [success, setSuccess] = useState(false);

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
        props.errorFunc(false,"")
        setForm({...form, [name]:e.target.value})
        console.log(form)
    }
    function x(){
        props.closeWindow();
    }
    function sendPost(){
     
        axios.post("http://localhost:8000/bookings/", form).then((res)=>{
        if (res.status === 200){
            console.log(res)
            props.errorFunc(false,"")
            setSuccess(true);
           
        }else{
      
        }
        })
        .catch(err => {
         
            props.errorFunc(true, err.response.data.message)
        })
    }
    return (
        <>
                 {success === false? (
               <FormWindow>
               <button onClick={x}>X</button>
               <input type="text" onChange={inputHandling} name="email"></input>
               <input type="text" onChange={inputHandling} name="name"></input>
               <input type="number" onChange={inputHandling} name="phonenumber"></input>
               <button onClick={sendPost}>Boka!</button>
                </FormWindow>
            ):(
                <SuccessBooked></SuccessBooked> 
            ) }
         
        </>
           
        )
}