import { useEffect, useState } from "react"
import { Navbar } from "./Navbar";


interface Iprops{
    tableInfo:number;
    time:number;
}


export const TableComponent = (props:Iprops) => {

    const [disable, setDisable] = useState(false);

    useEffect(()=> {
        if(props.tableInfo >= 2){
            setDisable(true)
        }else{
            setDisable(false)
        }
    },[props.tableInfo]) 

    function onClick(){
        console.log(props.tableInfo)
        return(
            <Navbar></Navbar>
        )
    }
    return(
        <div>
            
            <span> {props.time}</span>
            <button onClick={onClick}disabled={disable}>Boka</button>
     

        </div>
    )
}