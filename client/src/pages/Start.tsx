import { useEffect } from "react";
import { PageWrapper, HeroImage, HeroText, TextDiv, H1, H2, H3, H4Light } from "./styles/StartStyle";

export const Start = () => {

        useEffect(()=> {
            clearTimeout()
        },[])
        
    return (
      <PageWrapper>
          <HeroImage>
          <HeroText>
          Eat
      </HeroText>
      </HeroImage>
     <TextDiv>  
         <H1>EAT</H1>
<H2>Välkommen till din kvarterskrog i Hornstull </H2>
<H3>Hornstulls strand 7</H3>
<H4Light>Tisdag - Torsdag: 17:00-23:00 </H4Light>
<H4Light>Fredag - Lördag 17:00-00:30</H4Light> 
<H4Light>Söndagar 17:00-21:00</H4Light>
</TextDiv>
</PageWrapper>
    );
};