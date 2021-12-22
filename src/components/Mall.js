import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slide from "@mui/material/Slide";
import ExerciseAppbar from "./ExerciseAppbar";
import Container from "@mui/material/Container";

function mall() {
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
        <Container maxWidth="md"></Container>
        <Button variant="contained" fullWidth={true} onClick={nextPage}>
          Starta Värderingskompassen
        </Button>
      </div>
    </Slide>
  );
}

export default ValueCompassStep1;
