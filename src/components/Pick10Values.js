import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ExerciseAppbar from "./ExerciseAppbar";
import ValuePicker from "./ValuePicker";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Headline from "./Headline";
import values from "./values";
import StepperExercise from "./StepperExcercise";

export default function ValueList() {
  // deconstruct return obj {data:values} döper om data till values
  console.log(values);

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, []); // Only re-run the effect if count changes
  // useEffect körs på varje render, här hämtas data från JSON server

  return (
    <div>
      <ExerciseAppbar header={"Värdekompassen"} step={"Steg 1 av 3"} />
      <StepperExercise activeStep={0} />
      <Slide direction="up" in={slide} mountOnEnter unmountOnExit>
        <Container sx={{ backgroundColor: "white" }}>
          <Headline text="Välj dina värderingsord" />

          <Typography variant="body1">
            {/* finns x antal ord läs igenom alla innan du går vidare 
                när du är klar: säker att du vill gå vidare (har du läst alla?) */}
            Nedan finner du en lista med 36 värderingsord med en kort
            förklaring. Läs igenom listan och välj de 10 värderingar som känns
            viktigast för dig. Har du svårt att välja? Testa att ställa dig
            frågan: med vilka ord hade jag velat att den som kännde mig bäst
            hade beskrivigt mig med på min egna begravning?
          </Typography>
          <br></br>
          {/* om values finns så körs ValuesComponet  */}

          {values && (
            <ValuePicker
              values={values}
              nrsToPick={5}
              next={"/valj5"}
              back="/varderingar-information"
            />
          )}
        </Container>
      </Slide>
    </div>
  );
}
