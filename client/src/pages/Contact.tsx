import styled from "styled-components";
import { PageWrapper, TextDiv, H1, H2, H3, H4Light } from "./styles/GlobalStylesPages";

const Li = styled.li`
        list-style: none;
        text-align: center;
        text-decoration: underline;
        cursor: pointer;`

export const Contact = () => {

    return (
    <PageWrapper>
      <TextDiv>
        <H1>KONTAKT</H1>
        <H2>Vi svarar gärna på frågor och förfrågningar via mail <Li>info@eat.se</Li> </H2>
        <H3>08-550 602 66</H3>
      <H4Light> Tisdag - Torsdag 17:00-23:00 </H4Light>
      <H4Light> Fredag - Lördag 17:00-00:30 </H4Light>
      <H4Light> Söndagar 17:00-21:00</H4Light>
      </TextDiv>
    </PageWrapper> 
    );
};