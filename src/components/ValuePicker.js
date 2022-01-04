import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import ExerciseAppbar from "./ExerciseAppbar";
import ValueLister from "./ValueLister";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";

// destruct props .text och .values samma som  (props) const = props.value
//export default function ValueList({ text, values })
export default function ValueList({ text }) {
  // deconstruct return obj {data:values} döper om data till values
  const {
    data: values,
    isPending,
    error,
  } = useFetch("http://localhost:3000/valueList");

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, []); // Only re-run the effect if count changes
  // useEffect körs på varje render, här hämtas data från JSON server

  return (
    <div>
      <ExerciseAppbar header={"Värderinskompassen"} step={"2 av 3"} />

      {isPending && <div> Laddar ....</div>}
      {error && <div> {error} </div>}
      <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
        <Container sx={{ backgroundColor: "white" }}>
          <Typography variant="h1"> Välj dina värderingsord </Typography>

          <Typography variant="body1">
            {text}
            {/* finns x antal ord läs igenom alla innan du går vidare 
                när du är klar: säker att du vill gå vidare (har du läst alla?) */}
            Nedan finner du en lista med 36 värderingsord och en kort
            förklaring. Läs igenom listan och välj de 10 orden som känns
            viktigast för dig. Har du svårt att välja, testa att ställa dig
            frågan: med vilka ord hade jag velat att den som kännde mig bäst
            hade beskrivigt mig med på min egna begravning?
          </Typography>
          <br></br>
          {/* om values finns så körs ValuesComponet  */}

          {values && <ValueLister values={values} />}
        </Container>
      </Slide>
    </div>
  );
}
