import { CloseButton, ErrorDiv } from "./styles/ErrorStyle"

export interface IpropsError{
    msg: string
    closeWindow(err:boolean, msg:string):void;
}

export const ErrorBooking = (props:IpropsError) => {

    const Close = () => {
        
        props.closeWindow(false,  "");
    }
    return (
        <ErrorDiv>
          <CloseButton onClick={Close}>X</CloseButton>
        <h1 style={{paddingBottom:"10px"}}> Hoppsan!</h1>
        <p style={{paddingBottom:"25px"}}>{props.msg}</p>
        </ErrorDiv>
    )
}