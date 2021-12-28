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
  } = useFetch("http://localhost:8000/valueList");

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, []); // Only re-run the effect if count changes
  // useEffect körs på varje render, här hämtas data från JSON server

  return (
    <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
      <div>
        <ExerciseAppbar header={"Värderinskompassen"} step={"1 av 3"} />
        {isPending && <div> Laddar ....</div>}
        {error && <div> {error} </div>}
        <Container maxWidth="md">
          <Typography variant="h1"> Välj dina värderingsord </Typography>
          <Typography variant="body1">
            {text}
            {/* finns x antal ord läs igenom alla innan du går vidare 
                när du är klar: säker att du vill gå vidare (har du läst alla?) */}
            Välj alla värderingsord som känns viktiga för dig. Välj minst fem
            och max 10. Har du svårt att välja, testa att ställa dig frågan: med
            vilka ord hade jag velat att den som kännde mig bäst hade beskrivigt
            mig med på min egna begravning?
          </Typography>
          <br></br>
          {/* om values finns så körs ValuesComponet  */}
        </Container>
        {values && <ValueLister values={values} />}
      </div>
    </Slide>
  );
}
