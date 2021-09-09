import { Redirect } from "react-router"
import { useEffect, useState } from "react"
import { SuccessDiv, Heading, Span } from "./styles/SuccessStyle";


interface Iprops {
    email: string;
}
export const SuccessBooked = (props: Iprops) => {

    const [redir, setRedir] = useState(false);
 

    useEffect(()=> {
        let timer = setTimeout(() => {
            setRedir(true)
        }, 3500)
        return ()=> {
            clearTimeout(timer)
        }
    },[])
    return (
        <SuccessDiv>
            {redir === false ? (
                <>
                    <Heading>Bokning mottagen!</Heading>
                    <Span>Ett bekräftelsemail har skickats till {props.email}. </Span>
                    <Span>Du omdirigeras nu till startsidan...</Span>
                </>
            ) : (

                <Redirect to="/"></Redirect>
            )}
        </SuccessDiv>

    )
}