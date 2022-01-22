import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ExerciseAppbar from "./ExerciseAppbar";
import ValuePicker from "./ValuePicker";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Headline from "./Headline";
import values from "./values";
import { useLocation } from "react-router-dom";
import StepperExercise from "./StepperExcercise";
import Fade from "@mui/material/Fade";

export default function ValueList() {
  // deconstruct return obj {data:values} döper om data till values

  const location = useLocation();
  const localValues = localStorage.getItem("userValues10");
  const valueArray = location.state ? location.state : JSON.parse(localValues);

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, []); // Only re-run the effect if count changes
  // useEffect körs på varje render, här hämtas data från JSON server

  return (
    <div>
      <ExerciseAppbar header={"Värdekompassen"} step={"Steg 2 av 3"} />
      <StepperExercise
        activeStep={1}
        steps={["Välj tio", "Välj fem", "Prioritera"]}
      />
      <Fade in={slide} mountOnEnter unmountOnExit>
        <Container sx={{ backgroundColor: "white" }}>
          <div className="textWrapper">
            <Headline text="Välj dina värderingsord" />{" "}
            <Typography variant="body1">
              {/* finns x antal ord läs igenom alla innan du går vidare 
                när du är klar: säker att du vill gå vidare (har du läst alla?) */}
              Välj nu ut de fem absolut viktigaste värderingarna av de tio du
              valde tidigare. Har du svårt att välja testa återigen att ställa
              dig frågan: hur hade jag velat bli ihågkommen?
            </Typography>
            <br></br>
            {/* om values finns så körs ValuesComponet  */}
            {values && (
              <ValuePicker
                values={valueArray}
                nrsToPick={5}
                next="/varderingsPrioritering"
                back="/valj10varder"
                saveAs=""
              />
            )}
          </div>
        </Container>
      </Fade>
    </div>
  );
}
