import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Slide from "@mui/material/Slide";
import ExerciseAppbar from "./ExerciseAppbar";
import Container from "@mui/material/Container";

function Mall() {
  const history = useHistory();
  const nextPage = () => {
    history.push({
      pathname: "/nästasteg",
    });
  };
  const [isItDone, setisItDone] = useState(false);
  const [slide, setSlide] = useState(true);
  return (
    <div>
      <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
        <div>
          <ExerciseAppbar header={"Värderinskompassen"} step={"1 av 3"} />
          <Container maxWidth="md">{/*  Content here */}</Container>
        </div>
      </Slide>
      {/*  Done button */}

      {isItDone && (
        <Button
          color="success"
          fullWidth={true}
          variant="contained"
          sx={{
            position: "fixed",
            bottom: "0",
            maxWidth: "852px",
            fontWeight: "bloder",
          }}
          onClick={() => nextPage()}
        >
          <Typography variant="body1"> Nästa </Typography>
        </Button>
      )}

      {/*  Not Done button */}

      {isItDone && (
        <Button
          fullWidth={true}
          variant="contained"
          sx={{ position: "fixed", bottom: "0", maxWidth: "852px" }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            {" "}
            Välj minst till{" "}
          </Typography>
        </Button>
      )}

      {/* Vanlig knapp om inte behövs is it done  
      <Button variant="contained" fullWidth={true} onClick={nextPage}>
        Starta Övningen
      </Button>
      */}
    </div>
  );
}

export default Mall;
