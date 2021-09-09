import { useEffect, useState } from "react";

import { TableDiv, TimeDiv, Button } from "./styles/TableStyles";

interface Iprops {
  bookingsInDB: number;
  time: number;
  noPeople: number;
  date: Date | null;
  showForm(time: number): void;
}

/* Här sköts den huvudsakliga logiken, valde att göra det här för att dynamiskt kunna disable vidareknapp*/
/* Har senare insett att det kunnat skötas i backend oavsett, hade med mer tid flyttat det dit */

/* Målet här är att få bokningen att ta upp ett bord trots att man är färre än sex gäster */
/* Eller två trots att man är någonstans mellan 7-12 osv. */

/* Vi gör det genom att dela antalet personer på 6 (maxantalet vid ett bord) och avrunda uppåt till närmsta heltal */
/* T.ex. 7 personer bokar, 7/6 = 1.16 ≈ 2, dvs vi behöver två bord  */

/* Vi kollar sedan att antalet bokningar in är mer än 15 (antalet bord) och att antalet bord vi behöver inte är fler än dem som finns lediga */

export const TableComponent = (props: Iprops) => {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDisable(false);
    let placesNeeded = Math.ceil(props.noPeople / 6);
    let available = 15 - props.bookingsInDB;

    if (available < placesNeeded || available === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [props.bookingsInDB, props.noPeople]);

  function onClick() {
    props.showForm(props.time);
  }

  return (
    <TableDiv>
      <TimeDiv>Klockan {props.time}</TimeDiv>

      <Button onClick={onClick} disabled={disable}>
        Boka
      </Button>
    </TableDiv>
  );
};
