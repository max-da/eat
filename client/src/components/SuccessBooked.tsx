import { Redirect } from "react-router"
import { useState } from "react"
import { SuccessDiv,Heading,Span } from "./styles/SuccessStyle";


interface Iprops  {
    email:string;
}
export const SuccessBooked = (props:Iprops) => {

   
   
    const [redir,setRedir] = useState(false);
   setTimeout(()=> {
        setRedir(true)
    }, 3500) 
    return (
        <SuccessDiv>
        {redir === false ? (
            <>
               <Heading>Bokning mottagen!</Heading>
               <Span>Ett bekräftelsemail har skickats till {props.email}. </Span>
               <Span>Du omdirigeras nu till startsidan...</Span>
               </>
        ):(
        
            <Redirect to="/"></Redirect>
        )}
        </SuccessDiv>

    )
}