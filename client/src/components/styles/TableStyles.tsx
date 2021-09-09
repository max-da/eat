import styled from "styled-components"
/* TableComponent */

export const TableDiv = styled.div`
    width: 80%;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    font-size: 1rem;
    box-shadow: 1px 3px 10px -5px black;
    border-radius: 5px;
    margin-bottom: 5px;
    @media screen and (min-width: 768px) {
        width: 65%;
        height: 40px;
        font-size: 1.1rem;
    }
`

export const TimeDiv = styled.div`
    width: 75%;
    display: flex;
    justify-content: center;
`

export const Button = styled.button`
    width: 25%;
    height: 100%;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1rem;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    cursor: pointer;
    background-color: #52a39f;
    @media screen and (min-width: 768px) {
        font-size: 1.1rem;
    }
`

