import { useState } from "react"
import { ITableinfo } from "./Booking"

interface Iprops{
    tableInfo:any;
}


export const TableComponent = (props:Iprops) => {

    const [disable, setDisable] = useState(false)
    if(props.tableInfo <= 15){
        setDisable(true)
    }


    return(
        <div>
      
        <span>{props.tableInfo}</span> 
        <button disabled={disable}>Boka</button>
       
     

        </div>
    )
}