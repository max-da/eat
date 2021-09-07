/* BookingFormComponent */
import styled from "styled-components"
export const FormWindow =styled.div`

    background-color:white;
    margin-top: 25px;
    width: 80%;
    display: flex;
    flex-direction:column;
    align-items: center;
    height: 100%;
 
`
export const FormInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    border: none;
    margin-top: 20px;
    @media screen and (min-width: 768px) {
        font-size: 2rem;
        width: 90%;
    }
`

export const InputSpanBorder = styled.div`
    border-bottom:1px solid darkgrey;
    border-width:1px;
    display: flex;
    flex-direction: column; 
    padding: 10px 5px 5px 5px;
     width: 90%;
    
`


export const FormInput = styled.input`
    padding: 5px;
    border:none;
    font-size:1rem;
    background-color: white;
    &:focus-visible{
        outline: none;
        background-color: white;
    }
    &:focus{
        background-color: white;
    }
`
export const FormLabel = styled.span`
    font-size: .9rem;
    margin-bottom:5px;
`

export const FormButton = styled.button`
    width: 90%;
    font-size: 1.2rem;
    color: white;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 4px 11px 0px darkgrey;
    border: none;
    background-color:#52a39f;
    margin-bottom:  100px;
    &:focus-visible{
        outline: none;
    }
`
export const CloseForm = styled.button`
    background-color: #52a39f;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-weight:500;
    border-radius: 1px;
    border:0;
   
    padding: 5px 12px 5px 12px;
    align-self: flex-end;
    
   
`