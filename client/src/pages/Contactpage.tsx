import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

const H1 = styled.h1`
 padding: 4%;
 font-size: 3rem;
 font-weight: 300;
`;

const H2 = styled.h2`
 font-size: 1,5rem;
 font-style: italic;
 font-weight: 300;
 padding-bottom: 5%;
 `;

const H3Bold = styled.h3`
font-size: 1,5rem;
padding-bottom: 1.5%;
`;

// const H3Light = styled.h3`
// font-size: 1,5rem;
// font-weight: 300;
// `;

const Li = styled.li`
        list-style: none;
        text-align: center;
        text-decoration: underline;
        cursor: pointer;`

export const Contactpage = () => {

    return (
    <PageWrapper>
        <H1>KONTAKT</H1>
        <H2>Vi svarar gärna på frågor och förfrågningar via mail <Li>info@eat.se</Li> </H2>
        <H3Bold>08-550 602 66</H3Bold>
      <H3Bold> Öppettider: Tisdag - Torsdag 17:00-23:00 Fredag - Lördag 17:00-00:30 Söndagar 17:00-21:00</H3Bold>
    
    </PageWrapper> 
   
    );
};