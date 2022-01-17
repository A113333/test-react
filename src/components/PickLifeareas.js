import React, { useState, useEffect } from "react";
import ValuePicker from "./ValuePicker";
import lifeAreas from "./lifeAreas";
import { Typography } from "@mui/material";
import ExerciseAppbar from "./ExerciseAppbar";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Headline from "./Headline";
import values from "./values";
import { useLocation } from "react-router-dom";
import StepperExercise from "./StepperExcercise";

function PickLifeareas() {
  const location = useLocation();
  const valueArray = location.state;
  console.log(valueArray);

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, []); // Only re-run the effect if count changes
  // useEffect körs på varje render, här hämtas data från JSON server

  return (
    <div>
      <div>
        <ExerciseAppbar header={"Livsområden"} step={""} />
        <StepperExercise activeStep={0} />
        <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
          <Container sx={{ backgroundColor: "white" }}>
            <Headline text="Välj dina livsområden" />
            <div className="text">
              {" "}
              <Typography variant="body1">
                {/* finns x antal ord läs igenom alla innan du går vidare 
                när du är klar: säker att du vill gå vidare (har du läst alla?) */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat
              </Typography>
            </div>

            <br></br>
            {/* om values finns så körs ValuesComponet  */}

            {lifeAreas && (
              <ValuePicker
                values={lifeAreas}
                nrsToPick={5}
                next="/livsomraden-prioriteringar"
                back="/livsomraden-information"
              />
            )}
          </Container>
        </Slide>
      </div>
    </div>
  );
}

export default PickLifeareas;
