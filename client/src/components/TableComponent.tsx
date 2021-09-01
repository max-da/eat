import { useEffect, useState } from "react"



interface Iprops{
 
    bookingsInDB:number;
    time:number;
    noPeople:number;
    date:Date | null;
    showForm(time:number):void;
  
}

/* X är enbart här i testsyfte, och kan tas bort senare */
export const TableComponent = (props:Iprops) => {

    const [disable, setDisable] = useState(false);
   
    const [x, setx] = useState(0)
   
    
    useEffect(()=> {
        setDisable(false);
        let placesNeeded = Math.ceil(props.noPeople/6)
        let available =  15 - props.bookingsInDB
       
      
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