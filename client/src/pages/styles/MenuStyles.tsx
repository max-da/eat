import styled from "styled-components";
import img from "../../assets/restaurant.jpeg";

export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
`;
export const HeroImage = styled.div`
  background-image: url(${img});
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export const HeroPopUp = styled.div`
  background-color: white;
  width: 70%;
  display: flex;
  align-self: center;
  text-align: center;
  border-radius: 10px;
  margin-top: -150px;
  @media screen and (min-width: 1200px) {
    margin-top: -50px;
  }
`;

export const TextDiv = styled.div`
  padding: 10% 5%;
  text-align: left;
  @media screen and (min-width: 1200px) {
    padding: 5%;
  }
`;

export const H1 = styled.h1`
  color: #68b9b5;
  font-size: 1.7rem;
  text-transform: uppercase;
  text-shadow: 0 0 2px grey;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const H4 = styled.h4`
  font-size: 1.2rem;
  padding-bottom: 2%;

  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
    padding-bottom: 0%;
  }
`;

export const H4Light = styled.h4`
  font-size: 1.2rem;
  font-weight: 300;
  padding-bottom: 10%;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    padding-bottom: 1%;
  }
`;

export const linkstyle = {
  color: "black",
  textDecoration: "none",
  fontSize: "1.2rem",
};
