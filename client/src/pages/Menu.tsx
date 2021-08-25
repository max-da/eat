import { Link } from "react-router-dom";
import styled from "styled-components";
import img from '../assets/restaurant.jpeg';
import { PageWrapper, H1, H4, H4Light, TextDiv, linkstyle } from "./styles/GlobalStylesPages";

const HeroImage = styled.div`
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

const HeroPopUp = styled.div`
 background-color: white;
 width: 70%;
 height: 60%;
 display: flex;
 align-items: center;  
 align-self: center;
 text-align: left;

 @media screen and (min-width: 768px) {
    width: 70%;
    height: 50%;
    }`
;

export const Menu = () => {

    return (
        <PageWrapper>
   <HeroImage>
<HeroPopUp>
    <TextDiv>
   <H1>MENY</H1> 
   <H4Light>På Eat serveras vi asiatiska mellanrätter som beställs till bordet och delas på. Nedan hittar du Eats olika menyer.</H4Light>
 <H4><Link to={{ pathname: "https://bar-bro.se/wp-content/uploads/2021/08/Meny-Matsal-sommar2021x4x.pdf" }} style={linkstyle} target="_blank">MENY </Link> </H4>
 <H4><Link to={{ pathname: "https://bar-bro.se/wp-content/uploads/2021/07/Sallskapsmeny-2021JULI.pdf" }} style={linkstyle} target="_blank"> SÄLLSKAPSMENY </Link>  </H4>
 <H4><Link to={{ pathname: "https://bar-bro.se/wp-content/uploads/2020/09/Under-Barbro-2020sep.pdf" }} style={linkstyle} target="_blank"> UNDER EAT MENY </Link>  </H4>
 <H4><Link to={{ pathname: "https://bar-bro.se/wp-content/uploads/2021/06/Cocktails-Web-2020.pdf" }} style={linkstyle} target="_blank"> COCKTAILS </Link>  </H4>
  </TextDiv>
</HeroPopUp>
   </HeroImage>
   </PageWrapper>
    );
};