import { Link } from "react-router-dom";
import styled from "styled-components";
import img from '../assets/restaurant.jpeg';
import { PageWrapper, H1, H3, H3Light, TextDiv } from "./styles/GlobalStylesPages";

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
 width: 60%;
 height: 60%;
 display: flex;
 align-items: center;  
 align-self: center;
 justify-content: center;
`;

const linkstyle = {
    color: "black",
    textDecoration: "none",
    fontSize: "1.2rem"     
}

export const Menu = () => {

    return (
        <PageWrapper>
   <HeroImage>
<HeroPopUp>
    <TextDiv>
   <H1>MENY</H1> 
   <H3Light>På Eat serveras vi asiatiska mellanrätter som beställs till bordet och delas på. Nedan hittar du Eats olika menyer.</H3Light>
 <H3><Link to={{ pathname: "https://bar-bro.se/wp-content/uploads/2021/08/Meny-Matsal-sommar2021x4x.pdf" }} style={linkstyle} target="_blank"> MENY </Link> </H3>
 <H3><Link to={{ pathname: "https://bar-bro.se/wp-content/uploads/2021/07/Sallskapsmeny-2021JULI.pdf" }} style={linkstyle} target="_blank"> SÄLLSKAPSMENY </Link>  </H3>
 <H3><Link to={{ pathname: "https://bar-bro.se/wp-content/uploads/2020/09/Under-Barbro-2020sep.pdf" }} style={linkstyle} target="_blank"> UNDER EAT MENY </Link>  </H3>
 <H3><Link to={{ pathname: "https://bar-bro.se/wp-content/uploads/2021/06/Cocktails-Web-2020.pdf" }} style={linkstyle} target="_blank"> COCKTAILS </Link>  </H3>
  </TextDiv>
</HeroPopUp>
   </HeroImage>
   </PageWrapper>
    );
};