import styled from "styled-components"
/* TableComponent */

export const TableDiv = styled.div`
    background-color: white;
    width: 100%;
    height:50px;
    box-shadow: 1px 3px 10px -5px black;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    border-radius: 5px;

    @media screen and (min-width: 768px) {
        font-size: 1.7rem;
        height: 70px;
    }
`
export const Button = styled.button`
    height: 100%;
    width: 25%;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    text-transform:uppercase;
    font-weight: 600;
    font-size: .9rem;
    border: none;
    cursor: pointer;
    background-color: #52a39f;
    @media screen and (min-width: 768px) {
        font-size: 1.7rem;
    }
`

