import { useState ,ChangeEvent, useEffect} from "react"
import axios from "axios";
import { TableComponent } from "./TableComponent";
import { BookingFormComponent } from "./BookingFormComponent";
import styled from "styled-components";


export interface IbookingForm{
    date:Date;
    noPeople:number;
    time:number;

}
export interface ITableinfo{
    time18:number;
   time21:number;
    /* people:number; 
    date:Date */
    
}

//Syfte är bara att hämta data strukturerat från api
export interface IAPIBookingData{
    date:Date;
    email:string;
    name:string;
    time:number;
    id:number;
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
export const Bookings = () => {

    
    let defaultValue:IAPIBookingData[]= []

    const [stateTime18, setTime18] = useState(0)
    const [stateTime21, setTime21] = useState(0)
    const [APIbookingData, setAPIBookingData] = useState(defaultValue)
    const [formWindowBool, setFormWindowBool] = useState(false)

    const [bookingForm, setbookingForm] = useState<IbookingForm>({
        date:new Date(),
        noPeople:0,
        time:0
    })
 

   
    
/* 
    let tableInfo:ITableinfo = {
        time18:0,
        time21:0, */
  /*       people:bookingForm.noPeople,
        date:bookingForm.date */
/*     } */



    const inputHandling = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        setbookingForm({...bookingForm, [name]:e.target.value})
        
    }
    

    useEffect(()=> {
        let newDate = bookingForm.date.toLocaleString("se-SV",  {  year: 'numeric', month: 'numeric', day: 'numeric' })
        console.log("claling " + newDate)
        axios.get<IAPIBookingData[]>("http://localhost:8000/bookings/" + newDate)
        .then((res)=> {
            setAPIBookingData(res.data);
      
        })
    }, [bookingForm.date])
    
    useEffect(()=> {

        let time21 = 0;
        let time18 = 0;
        for (let i = 0; i < APIbookingData.length; i++){
            if (APIbookingData[i].time === 21){
         
           
               time21++
              
            }
            else{
                time18++;
            }
           
        } 
        setTime21(time21)
        setTime18(time18)
     

    },[APIbookingData])

    function showFormParent (time:number){
      
        setFormWindowBool(true);
        setbookingForm({...bookingForm, time:time})
        console.log(bookingForm)
        console.log(bookingForm.noPeople)
    }
    function closeForm(){
        setFormWindowBool(false);
    }
   
    return (
       <BookingDiv>
 <InputDiv>
        <input name="date"  onChange={inputHandling} type="date"></input>
        <input name="noPeople" onChange={inputHandling} type="number"></input>
      
        </InputDiv>
        <ul>
            <TableComponent showForm={showFormParent} noPeople={bookingForm.noPeople} bookingsInDB={stateTime18} time={18}></TableComponent>
            <TableComponent showForm={showFormParent} noPeople={bookingForm.noPeople} bookingsInDB={stateTime21} time={21}></TableComponent>
        </ul>
   
        {formWindowBool === true? (
              <BookingFormComponent closeWindow={closeForm} bookingForm={bookingForm} ></BookingFormComponent>
            ):(
                <div></div>  
            ) }
       </BookingDiv>
    )
    
} 