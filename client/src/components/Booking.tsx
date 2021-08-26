import { useState ,ChangeEvent, useEffect} from "react"
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

export interface Ibooking{
    date:Date;
    email:string;
    name:string;
    time:number;
    id:number;
}

export const Bookings = () => {

    
    let defaultValue:Ibooking[]= []

    const [stateTime18, setTime18] = useState(0)
    const [stateTime21, setTime21] = useState(0)
    const [bookings, setBooking] = useState(defaultValue)

    const [bookingForm, setbookingForm] = useState<IbookingForm>({
        date:new Date(),
        noPeople:0,
    })
 

   
    

    let tableInfo:ITableinfo = {
        time18:0,
        time21:0,
        people:bookingForm.noPeople,
        date:bookingForm.date
    }



    const inputHandling = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.target.name
        setbookingForm({...bookingForm, [name]:e.target.value})
    }
    

    useEffect(()=> {
        let newDate = bookingForm.date.toLocaleString("se-SV",  {  year: 'numeric', month: 'numeric', day: 'numeric' })
        console.log("claling " + newDate)
        axios.get<Ibooking[]>("http://localhost:8000/bookings/" + newDate)
        .then((res)=> {
            setBooking(res.data);
      
        })
    }, [bookingForm.date])
    
    useEffect(()=> {

        
        for (let i = 0; i < bookings.length; i++){
            if (bookings[i].time === 21){
         
               tableInfo.time21 += 1;
            }
            else{
                tableInfo.time18 += 1;
            }
           
        } 
        setTime21(tableInfo.time21)
        setTime18(tableInfo.time18)

    },[bookings])

    function x (){
  
        console.log(tableInfo.time21)
        console.log(stateTime21)
    }
   
    return (
       <>

        <input name="date"  onChange={inputHandling} type="date"></input>
        <input name="noPeople" onChange={inputHandling} type="number"></input>
      
        <button onClick={x}>sasdsad</button>
        <ul>
            <TableComponent tableInfo={stateTime18} time={18}></TableComponent>
            <TableComponent tableInfo={stateTime21} time={21}></TableComponent>
        </ul>

       </>
    )
    
} 