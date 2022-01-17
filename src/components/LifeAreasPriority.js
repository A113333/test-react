import ExerciseAppbar from "./ExerciseAppbar";
import Headline from "./Headline";
import BackButton from "./BackButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Paper from "@mui/material/Paper";
import { Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import StepperExercise from "./StepperExcercise";

import { useLocation } from "react-router-dom";

function LifeAreasPriority() {
  function valuetext(value) {
    return "${value}";
  }
  const history = useHistory();

  const nextPage = () => {
    const lifeAreas = [];

    history.push({
      pathname: "/next",
      state: lifeAreas,
    });
  };

  const location = useLocation();
  const lifeAreas = location.state;
  console.log(lifeAreas);

  return (
    <div>
      <ExerciseAppbar header={"Dina Livsområden"} step={" "} />
      <Container>
        <StepperExercise activeStep={1} />
        <Headline text="Prioritera dina livsområden" />
        <Box sx={{ maxWidth: "725px", mx: "auto" }}>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat
          </Typography>
        </Box>
        <Box>
          {lifeAreas.map(({ title }, index) => {
            console.log(title);
            return (
              <Box
                boxShadow={2}
                sx={{
                  border: "1px solid black",
                  margin: "15px",
                  borderRadius: "6px",
                  padding: "15px",
                  mx: "auto",
                  maxWidth: "100%",
                }}
              >
                <Headline text={title} />
                <Typography sx={{ mb: "35px" }}>
                  Hur nöjd är du med {title} idag? (0 = helt onöjd; 10 = helt
                  och hållet nöjd).
                </Typography>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  justifyContent="center"
                >
                  <Typography sx={{ fontWeight: "bold", pt: "3px" }}>
                    0
                  </Typography>
                  <Slider
                    aria-label={title}
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    step={1}
                    marks
                    min={0}
                    max={10}
                    valueLabelDisplay="on"
                    sx={{ width: "75%" }}
                  />
                  <Typography sx={{ fontWeight: "bold", pt: "3px" }}>
                    10
                  </Typography>
                </Stack>

                <Typography sx={{ mb: "35px" }}>
                  Hur viktigt är {title} för dig? ( 0 = helt oviktigt ; 10 =
                  väldigt viktigt)
                </Typography>
                <Stack
                  spacing={2}
                  direction="row"
                  sx={{ mb: 1 }}
                  justifyContent="center"
                >
                  <Typography sx={{ fontWeight: "bold", pt: "3px" }}>
                    {" "}
                    0{" "}
                  </Typography>{" "}
                  <Slider
                    aria-label={title}
                    defaultValue={5}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="auto"
                    step={1}
                    marks
                    min={0}
                    max={10}
                    sx={{ width: "75%" }}
                  />
                  <Typography sx={{ fontWeight: "bold", pt: "3px" }}>
                    {" "}
                    10{" "}
                  </Typography>
                </Stack>
                <Typography sx={{ mb: "15px" }}>
                  {" "}
                  Vad hindrar dig från att ha {title} såsom du vill ha det?{" "}
                </Typography>
                <TextField
                  fullWidth
                  id="obstacle"
                  label="Skriv in vad som hindrar dig här"
                  variant="outlined"
                />
              </Box>
            );
          })}
        </Box>
        <BackButton goTo={"/valj-livsomraden"}>Tillbaka</BackButton>
        <Button
          variant="contained"
          disabled
          color="success"
          aria-label="Backa"
          endIcon={<ArrowForwardIosIcon />}
          onClick={nextPage}
          sx={{ float: "right", mb: "15px", mt: "45px", mr: "15px" }}
        >
          Nästa
        </Button>
        <Box sx={{ width: "100%", height: "15px", clear: "both" }}> </Box>
      </Container>
    </div>
  );
}

export default LifeAreasPriority;
