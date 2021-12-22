import { Button, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slide from "@mui/material/Slide";
import ExerciseAppbar from "./ExerciseAppbar";
import Container from "@mui/material/Container";
function ValueCompassStep1() {
  useEffect(() => {
    setSlide(true);
  }, []);

  const history = useHistory();
  const nextPage = () => {
    history.push({
      pathname: "/valueList",
    });
  };
  const [slide, setSlide] = useState(true);
  return (
    <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
      <div>
        <ExerciseAppbar header={"Värderinskompassen"} step={"1 av 3"} />
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            Värderingar
          </Typography>

          <Typography variant="body1" gutterBottom>
            Dina värderingar står för det som är allra viktigaste för dig. Dom
            representerar hur du önskar att du levde ditt liv. Till skillnad
            från mål går det aldrig att uppnå en värdering. Som expel kan man ta
            målet att gifta sig, jämfört med värderingen att vara en öppen,
            omtänksam partner.
          </Typography>

          <Typography variant="h2" component="div" gutterBottom>
            Varför ska man utforska sina värderingar?
          </Typography>

          <Typography variant="body1" gutterBottom>
            Forskningen är tydlig när det kommer till vinsten i att ha insikt i
            sina egna värderingar och att låta dom fungera vägledande genom
            livet. Att leva efter sin värderingar kan bland annat; minskar
            nedstämdhet, skapa mening och motivation, hjälpa dig ta dig igenom
            svåra situationer och underlättar svåra val.
          </Typography>

          <Typography variant="h2" component="div" gutterBottom>
            Hur fungerar värderingskompassen?
          </Typography>

          <Typography variant="body1" gutterBottom>
            Värderingskompassen är särskilt framtagen och testad för att hjälpa
            dig hitta dina värderingar. Övningen tar ca X minuter och när du är
            klar kommer du få en rangordnad lista på dina 5 viktigaste
            värderingar. Du kommer sedan få övningar som hjälper dig att leva
            efter dina värderingar och vi kommer använda dina värderingar som
            bas när vi sätter dina långsiktiga mål.
          </Typography>
        </Container>
        <Button variant="contained" fullWidth={true} onClick={nextPage}>
          Starta Värderingskompassen
        </Button>
      </div>
    </Slide>
  );
}

export default ValueCompassStep1;
