import { useState ,ChangeEvent, useEffect} from "react"
import styled from "styled-components"
import { IbookingForm } from "./Booking"
export interface Ibooking{
  
    email:string;
    name:string;
    date:Date
    time:number;
    
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
        time:props.bookingForm.time
    })

    const inputHandling = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        setForm({...form, [name]:e.target.value})
        console.log(form)
    }
    function x(){
        props.closeWindow();
    }
    return (
            <FormWindow>
                <button onClick={x}>X</button>
                <input type="text" onChange={inputHandling} name="email"></input>
                <input type="text" onChange={inputHandling} name="name"></input>
            </FormWindow>
        )
}