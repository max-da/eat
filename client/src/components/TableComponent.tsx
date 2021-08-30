import { useEffect, useState } from "react"


interface Iprops{
 
    bookingsInDB:number;
    time:number;
    noPeople:number;
    showForm(time:number, noPeople: number):void;
  
}


export const TableComponent = (props:Iprops) => {

    const [disable, setDisable] = useState(false);
    const [availableTables, setAvailableTables] = useState(0);
  
   
    
    useEffect(()=> {
       
        let placesNeeded = Math.ceil(props.noPeople/6)
        let available = 15 - props.bookingsInDB;
        setAvailableTables(available)
      
        if(availableTables < placesNeeded ){
            
            setDisable(true)
        }else{
            setDisable(false)
        }

        // console.log(availableTables + "available")
        // console.log(placesNeeded + "pNeed")
        
    },[props.bookingsInDB,props.noPeople]) 

    function onClick(){
        // console.log(availableTables)
        // console.log(props.bookingsInDB)
        
        props.showForm(props.time, props.noPeople);
      
    }
    return(
        <div>
            
            <span> {props.time}</span>
            <button onClick={onClick}disabled={disable}>Boka</button>
          

        </div>
    )
}