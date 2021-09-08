import axios from "axios"
import { useState ,ChangeEvent } from "react"
import {AniDiv, AniSpan, AniSpanLine, AniSpanLine2, CloseForm, FormButton, FormInput, FormInputDiv, FormLabel, FormWindow, InputSpanBorder} from "./styles/BookingFormStyle";
import { IbookingForm } from "../pages/Booking"
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
      
    }
    function x(){
        props.closeWindow();
    }

    const [anima,setAnima] = useState(false)
    
    function sendPost(){
        console.log(form)
        if (form.email.includes("@") === false){
            return props.errorFunc(true, "Det verkar som att du angett en ogiltig email-adress.")
        }
        axios.post("http://localhost:8000/bookings/", form).then((res)=>{
        if (res.status === 200){
        
            props.errorFunc(false,"")
            setAnima(true);
            setTimeout(()=> {
                setSuccess(true);
            },2500) 
       
           
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
               <CloseForm onClick={x}>Tillbaka</CloseForm>
                <FormInputDiv>
                        <InputSpanBorder>
                            <FormLabel>DATUM</FormLabel>
                            <span>{props.bookingForm.date}</span>
                        </InputSpanBorder>

                        <InputSpanBorder>
                            <FormLabel>TID</FormLabel>
                            <span>{props.bookingForm.time}</span>
                        </InputSpanBorder>
                        
                        <InputSpanBorder>
                            <FormLabel>ANTAL GÄSTER</FormLabel>
                            <span>{props.bookingForm.noPeople}</span>
                            </InputSpanBorder>

                        <InputSpanBorder>
                            <FormLabel>EPOST</FormLabel>
                            <FormInput placeholder="..." type="email" onChange={inputHandling} name="email"></FormInput>
                        </InputSpanBorder>

                        <InputSpanBorder>
                            <FormLabel>NAMN</FormLabel>
                            <FormInput placeholder="..."type="text" onChange={inputHandling} name="name"></FormInput>
                        </InputSpanBorder>

                        <InputSpanBorder style={{borderBottom:"1px solid lightgrey"}}>
                            <FormLabel>TELEFONNUMMER</FormLabel>
                            <FormInput placeholder="..." type="number"  onChange={inputHandling} name="phonenumber"></FormInput>
                        </InputSpanBorder>
         
          
                         <FormButton onClick={sendPost}>BOKA</FormButton>
               </FormInputDiv>
              
               {anima === true? 
               (
                <AniDiv>
               <AniSpan>

               <AniSpanLine></AniSpanLine>
               <AniSpanLine2></AniSpanLine2>
               </AniSpan>
               

               </AniDiv>
               ):(
                   null
               )}
               
                </FormWindow>
            ):(
                <SuccessBooked email={form.email}></SuccessBooked> 
            ) }
         
        </>
           
        )
}