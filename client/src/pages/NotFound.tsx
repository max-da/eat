import { Redirect, useHistory } from "react-router-dom";
import { NotFoundWrapper, H1, TextContainer, PSubHeading, P, Button } from "./styles/NotFoundStyles";

export const NotFound = () => {
  const history = useHistory();

  function redirect() {
      history.push("/");
  }

  return (
    <NotFoundWrapper>
        <H1>Eat</H1>
        <TextContainer>
            <PSubHeading>Hoppsan!</PSubHeading>
            <P>Nu råkade du komma in på en sida som inte finns.</P>
            <Button onClick={() => redirect()}>Tillbaka till start</Button>
        </TextContainer>
    </NotFoundWrapper>
  );
};
