import styled from "styled-components";
import img from '../assets/restaurant.jpeg';

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

export const Menu = () => {

    return (
   <HeroImage></HeroImage>
    );
};