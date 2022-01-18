import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import ExerciseAppbar from "./ExerciseAppbar";
import ValuePicker from "./ValuePicker";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import Headline from "./Headline";
import values from "./values";
import StepperExercise from "./StepperExcercise";
import Paper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from "@mui/material";
import Box from "@mui/material/Box";

export default function ValueList() {
  const smallScreen = useMediaQuery("(max-width:445px)");
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
      <StepperExercise
        activeStep={0}
        steps={["Välj tio", "Välj fem", "Prioritera"]}
      />
      <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
        <Container sx={{ backgroundColor: "white" }}>
          <Headline text="Välj dina värderingsord" />
          <Box className="text">
            <Typography variant="body1">
              {/* finns x antal ord läs igenom alla innan du går vidare 
                när du är klar: säker att du vill gå vidare (har du läst alla?) */}
              Läs noggrant instruktionerna och tipsrutan innan du börjar
              övningen. Nedan finner du en lista med 36 värderingsord med en
              kort förklaring. Börja med att ögna igenom listan och välj sedan
              de 10 värderingar som bäst beskriver hur du hade önskat att du
              agerade i världen. Har du svårt att välja? Testa att föreställ dig
              din egna begravning, se framför dig hur den som kände dig bäst i
              livet går fram för att hålla ett tal. Fundera sedan över vilka ord
              du hade önskat användes för att beskriva dig. Alltså hur hade du
              VELAT bli ihågkommen?
            </Typography>
            <Paper
              elevation={0}
              sx={{
                m: "25px",
                mt: "40px",
                mx: "auto",
                p: "15px",
                width: "90%",

                bgcolor: "primary.light",
                color: "white",
              }}
            >
              <Typography textAlign="center" sx={{ fontWeight: "bold" }}>
                Tips inför övningen:{" "}
              </Typography>
              <Divider
                sx={{ bgcolor: "white", width: "90%", mx: "auto", mt: "5px" }}
              >
                {" "}
              </Divider>
              <Typography variant="body1">
                <ul>
                  <li>
                    Du kan hela tiden se hur många värderingar du valt högst upp
                    på skärmen, under övningsmenyn.{" "}
                  </li>
                  <li>
                    {" "}
                    Orden du väljer behöver inte stämma överens med vem du är
                    idag, utan ska snarare spegla hur du önskar att du var.
                  </li>
                  <li>
                    {" "}
                    Ta det lugnt, andas, känn efter. Låt övningen ta lite tid,
                    du gör detta för din skull så gör det ordentligt!
                  </li>
                </ul>
              </Typography>
            </Paper>
          </Box>
          <br></br>

          {/* om values finns så körs ValuesComponet  */}

          {values && (
            <ValuePicker
              values={values}
              nrsToPick={10}
              next={"/valj5"}
              back="/varderingar-information"
            />
          )}
        </Container>
      </Slide>
    </div>
  );
}
