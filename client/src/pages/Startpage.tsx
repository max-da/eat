import React from "react";
import styled from "styled-components";
import img from '../assets/bar.jpg';

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

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

const HeroText = styled.h1`
 color: white;
 font-size: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoDiv = styled.div`
 padding: 3%;
 text-align: center;
`;

const H1 = styled.h1`
 font-size: 3rem;
 font-weight: 400;
`;

const H2 = styled.h2`
 font-size: 1,5rem;
 font-style: italic;
 font-weight: 300;
 padding-bottom: 2%;
 `;

const H3Bold = styled.h3`
font-size: 1,5rem;
`;

const H3Light = styled.h3`
font-size: 1,5rem;
font-weight: 300;
`;

 
export const Startpage = () => {

    return (
      <PageWrapper>
          <HeroImage>
          <HeroText>
          Eat
      </HeroText>
      </HeroImage>
     <InfoDiv>  
         <H1>EAT</H1>
<H2>Välkommen till din kvarterskrog i Hornstull </H2>
<H3Bold>Hornstulls strand 13</H3Bold>
<H3Light>Öppettider: Dygnet runt </H3Light>
</InfoDiv>
</PageWrapper>
    );
};