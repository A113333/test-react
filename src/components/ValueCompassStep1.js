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
          <Typography variant="h2" gutterBottom>
            Värderingar
          </Typography>

          <Typography variant="body1" gutterBottom>
            Dina värderingar står för det som är allra viktigaste för dig. Dina värderingar ska
            representerar hur du önskar att du levde ditt liv. Till skillnad
            från mål går det aldrig att uppnå en värdering. Som expempel kan man ta
            målet att gifta sig, jämfört med värderingen att vara en öppen,
            omtänksam och kärleksfull partner.
          </Typography>

          <Typography variant="h3" component="div" gutterBottom>
            Varför ska man utforska sina värderingar?
          </Typography>

          <Typography variant="body1" gutterBottom>
            Forskningen inom psykologi visar gång på gång att det finns vinster i att ha insikt i
            sina egna värderingar och att låta dom fungera vägledande genom
            livet. 
            <br></br>Att leva efter sin värderingar kan bland annat: minskar
            nedstämdhet, skapa mening och motivation, hjälpa dig ta dig igenom
            svåra situationer och underlättar svåra val.
          </Typography>

          <Typography variant="h3" component="div" gutterBottom>
            Hur fungerar värderingskompassen?
          </Typography>

          <Typography variant="body1" gutterBottom>
            Värderingskompassen är särskilt framtagen och testad för att hjälpa
            dig hitta dina värderingar. Övningen tar ca X minuter och när du är
            klar kommer du få en topplist med dina 5 viktigaste
            värderingar. I nästa steg, målkartan, kommer vi använda dina värderingar vägleda dig i dina målsättningar.
            Lite längre fram i behandlingen kommer du även få övningar och tips som hjälper dig att bli bättre på att leva
            efter dina värderingar.
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
