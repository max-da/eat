import styled from "styled-components";

export const PageWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 3.5%;
text-align: center;
`
export const H1 = styled.h1`
color: #68b9b5;
font-size: 1.7rem;
text-transform: uppercase;
text-shadow: 0 0 2px grey;
padding-bottom: 20px;
@media screen and (min-width: 768px) {
    font-size: 2rem;
}
`

export const resStyle = {
    width: "40%",
    backgroundColor: "#ebebeb",
    borderRadius: "10px",
    margin: "0 10px 20px 10px",
    padding: "15px 5px",
  };

export const btnStyle = {
    cssFloat: "center",
    color: "#52a39f",
    border: "none",
    margin: "20px 2.5px 0 2.5px",
    cursor: "pointer",
}