import { useState, ChangeEvent, useEffect } from "react"
import axios from "axios";
import { TableComponent } from "./TableComponent";
import { BookingFormComponent } from "./BookingFormComponent";
import styled from "styled-components";
import { ErrorBooking } from "./ErrorBooking";


export interface IbookingForm {
    date: Date | null;
    noPeople: number;
    time: number;

}


//Syfte är bara att hämta data strukturerat från api
export interface IAPIBookingData {
    time18: number;
    time21: number;
}

export interface IerrorObject{
    err:boolean;
    msgErr:string;

}

const BookingDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`
const InputDiv = styled(BookingDiv)`
    background-color: red;
    width: 30%;
`



//
export const Bookings = () => {

    const [stateTime18, setTime18] = useState(0)
    const [stateTime21, setTime21] = useState(0)
    const [dateAsString, setDateString] = useState("")
    const [errorState, setErrorState] = useState<IerrorObject>({err:false,msgErr:""})
 
    const [formWindowBool, setFormWindowBool] = useState(false)

    const [bookingForm, setbookingForm] = useState<IbookingForm>({
        date:null,
        noPeople: 0,
        time: 0
    })

    const inputHandling = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        setbookingForm({ ...bookingForm, [name]: e.target.value })
 

    }

    
    
    
    useEffect(() => {
        
            if(bookingForm.date != null){
                let  newDate = bookingForm.date.toLocaleString("se-SV", { year: 'numeric', month: 'numeric', day: 'numeric' })
             
           
                  setDateString(newDate)
                 
              
                  axios.get<IAPIBookingData>("http://localhost:8000/bookings/" + newDate)
                      .then((res) => {
      
                       
                          setTime18(res.data.time18)
                          setTime21(res.data.time21)
                          setErrorState({...errorState, err:false, msgErr:""})
                      })
             
            }
         


    }, [bookingForm.date])



    function showFormParent(time: number) {
        
        let today = new Date;
     
   
        let chosenDate = new Date(dateAsString);
        
        if(!bookingForm.date || !bookingForm.noPeople){
            
            setErrorState({...errorState, err:true, msgErr:"Vänligen välj datum och antal personer."})
        }
        else if(bookingForm.noPeople <= 0){
            setErrorState({...errorState, err:true, msgErr:"Antal personer måste vara större än noll."})
        }
         else if (chosenDate.setHours(0,0,0,0) < today.setHours(0,0,0,0)){
            setErrorState({...errorState, err:true, msgErr:"Detta datum är redan passerat."})
        } 
        else{
            setErrorState({...errorState, err:false, msgErr:""})
            setFormWindowBool(true);
            setbookingForm({ ...bookingForm, time: time })
        }
       

    }
    function closeForm() {
        setbookingForm({ ...bookingForm, noPeople: 0 })
        setFormWindowBool(false);
    }

    const setFormError = (error:boolean, msg:string) => {
        setErrorState({...errorState, err:error, msgErr:msg})
    }

    return (
        <BookingDiv>
           

            {formWindowBool === true ? (
                <BookingFormComponent errorFunc={setFormError} closeWindow={closeForm} bookingForm={bookingForm} ></BookingFormComponent>
            ) : (
                <>
                <InputDiv>
                <input  name="date" value={dateAsString} onChange={inputHandling} type="date" ></input>
                <input name="noPeople" onChange={inputHandling} type="number"></input>


            </InputDiv>
            {bookingForm.date != null &&
                 <ul>
                 <TableComponent date={bookingForm.date} showForm={showFormParent} noPeople={bookingForm.noPeople} bookingsInDB={stateTime18} time={18}></TableComponent>
                 <TableComponent date={bookingForm.date} showForm={showFormParent} noPeople={bookingForm.noPeople} bookingsInDB={stateTime21} time={21}></TableComponent>
             </ul> 
            }
          
            </>
            )}
            {errorState.err === true?(
                <ErrorBooking msg={errorState.msgErr}></ErrorBooking>
            ):(
                null
            )}

        </BookingDiv>

    )

}