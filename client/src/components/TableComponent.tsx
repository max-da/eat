import { useEffect, useState } from "react"
import { BookingFormComponent } from "./BookingFormComponent";
import { Navbar } from "./Navbar";


interface Iprops{
 
    bookingsInDB:number;
    time:number;
    noPeople:number;
    date:Date | null;
    showForm(time:number):void;
  
}


export const TableComponent = (props:Iprops) => {

    const [disable, setDisable] = useState(false);
    const [availableTables, setAvailableTables] = useState(0);
    const [x, setx] = useState(0)
   
    
    useEffect(()=> {
        setDisable(false);
        let placesNeeded = Math.ceil(props.noPeople/6)
        let available =  15 - props.bookingsInDB
        setAvailableTables(available)
      
        if(available < placesNeeded || available === 0){
            
            setDisable(true)
        }else{
            setDisable(false)
        }
        setx(available);
  
        
    },[props.bookingsInDB, props.noPeople]) 

    function onClick(){
   
         
        props.showForm(props.time);
      
    }
    return(
        <div>
            
            <span> {props.time}</span>
            <span>   </span>
            <span>{x}</span>
            <button onClick={onClick}disabled={disable}>Boka</button>
          

        </div>
    )
}