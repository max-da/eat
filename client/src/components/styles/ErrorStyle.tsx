import styled from "styled-components"


export const ErrorDiv = styled.div`
    position: absolute;
    top: 25%;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction:column;
    align-items:center;
    color: #52a39f;
    font-family: 'Source Sans Pro', sans-serif;
    border-radius: 5px;
    box-shadow: 0px 4px 11px 0px darkgrey;
    text-align: center;
    max-width: 700px;
    @media screen and (min-width: 768px) {
        font-size: 1.8rem;
        width: 50%;
    }
`

export const CloseButton = styled.button`
    background-color: #52a39f;
    display: flex;
    align-items: center;
    justify-content: center;
    color:white;
    font-weight:500;
    border-radius: 1px;
    border:0;
    cursor: pointer;
   
    padding: 5px 12px 5px 12px;
    align-self: flex-end;
  
    
    
   
`