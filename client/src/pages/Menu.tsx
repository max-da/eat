import { Link } from "react-router-dom";
import { PageWrapper, HeroImage, HeroPopUp, H1, H4, H4Light, TextDiv, linkstyle } from "./styles/MenuStyles";

export const Menu = () => {

    return (
        <PageWrapper>
   <HeroImage>
<HeroPopUp>
    <TextDiv>
   <H1>MENY</H1> 
   <H4Light>På Eat serveras vi asiatiska mellanrätter som beställs till bordet och delas på. Nedan hittar du Eats olika menyer.</H4Light>
 <H4><Link to={{ pathname: "#" }} style={linkstyle} >MENY </Link> </H4>
 <H4><Link to={{ pathname: "#" }} style={linkstyle} > SÄLLSKAPSMENY </Link>  </H4>
 <H4><Link to={{ pathname: "#" }} style={linkstyle} > UNDER EAT MENY </Link>  </H4>
 <H4><Link to={{ pathname: "#" }} style={linkstyle} > COCKTAILS </Link>  </H4>
  </TextDiv>
</HeroPopUp>
   </HeroImage>
   </PageWrapper>
    );
};