import { useState ,ChangeEvent} from "react"
import axios from "axios";
import { TableComponent } from "./TableComponent";


export interface IbookingForm{
    date:Date;
    noPeople:number;

}
export interface ITableinfo{
    time18:number;
   time21:number;
    people:number; 
    date:Date
    
}


export const Bookings = () => {

    
    

    const [time18, setTime18] = useState(0)
    const [time21, setTime21] = useState(0)
    const [bookingForm, setbookingForm] = useState<IbookingForm>({
        date:new Date(),
        noPeople:0,
    })
 

   
  

    let tableInfo:ITableinfo = {
        time18:time18,
        time21:time21,
        people:bookingForm.noPeople,
        date:bookingForm.date
    }



    const inputHandling = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        setbookingForm({...bookingForm, [name]:e.target.value})
    }
    
    function onClick() {
      
        let newDate = bookingForm.date.toLocaleString("se-SV",  {  year: 'numeric', month: 'numeric', day: 'numeric' })
        
       axios.get("http://localhost:8000/bookings/" + newDate)
       .then((res)=> {
        console.log(res)
        
        for (let i = 0; i < res.data.length; i++){
            if (res.data[i].time === 18){
               setTime18(time18+1)
            }
            else{
               setTime21(time21+1)
            }
        }
       

           
       }) 
    

    }
   
    return (
       <>
        <input name="date" onChange={inputHandling} type="date"></input>
        <input name="noPeople" onChange={inputHandling} type="number"></input>
        <button onClick={onClick}>submit</button>
        <ul>
            <TableComponent tableInfo={tableInfo.time18}></TableComponent>
            <TableComponent tableInfo={tableInfo.time21}></TableComponent>
        </ul>

       </>
    )
    
} 