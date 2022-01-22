import ExerciseAppbar from "../ExerciseAppbar.js";
import Headline from "../Headline";
import BackButton from "../BackButton";
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
import StepperExercise from "../StepperExcercise";
import { useLocation } from "react-router-dom";
import lifeAreasArray from "./lifeAreas";
import ProgressTracker from "../utility/ProgressTracker";

function LifeAreasValues() {
  const [isItDone, setIsItDone] = React.useState(false);
  const [showLifeArea, setShowLifeArea] = React.useState(0);
  const [valuesLifeAreas, setValuesLifeAreas] = React.useState();
  const [obstacle, setObstacle] = React.useState("");

  let saveAs = "valuesLifeArea";

  const location = useLocation();
  const localprioLifeAreas = localStorage.getItem("lifeAreas");
  const prioLifeAreas = location.state
    ? location.state
    : JSON.parse(localprioLifeAreas);
  // location.state;
  console.log(localprioLifeAreas);
  console.log(prioLifeAreas);

  const handleSubmit = ({ title }) => {
    let prioLifeAreas = {};
    console.log("---------------------");
    console.log(prioLifeAreas);
    setValuesLifeAreas((prevValues) => [...prevValues, valuesLifeAreas]);
    setShowLifeArea(showLifeArea + 1);
  };

  const history = useHistory();
  const nextPage = () => {
    localStorage.setItem(saveAs, JSON.stringify(valuesLifeAreas));

    history.push({
      pathname: "/livsomraden-resultat",
      state: valuesLifeAreas,
    });
  };

  return (
    <div>
      {" "}
      <ExerciseAppbar header={"Dina Livsområden"} />
      <ProgressTracker />
      <Container>
        <StepperExercise
          activeStep={1}
          steps={["Välj områden", "Prioritera", "Placeholder"]}
        />

        {isItDone && <Headline text="Bra jobbat" />}
        {!isItDone && (
          <Headline text="Hitta dina värderingar i dina olika livsområden" />
        )}

        <Box sx={{ maxWidth: "725px", mx: "auto" }}>
          {isItDone && <Typography>Du är färdig! Duktig du är!</Typography>}
          {!isItDone && (
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat. (0 = helt
              onöjd; 10 = helt och hållet nöjd). 0 = helt oviktigt ; 10 =
              väldigt viktigt)
            </Typography>
          )}
        </Box>
        <Box>
          {prioLifeAreas.map(({ title, howImportent, today, diff }, index) => {
            // console.log(title);
            return (
              <Box
                className={index === showLifeArea ? "show" : "hidden"}
                boxShadow={10}
                sx={{
                  display: "table",
                  border: "1px solid lightgrey",
                  margin: "15px",
                  borderRadius: "6px",
                  mx: "auto",
                  mb: "50px",
                  maxWidth: "100%",

                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
              >
                <Box
                  boxShadow={1}
                  sx={{
                    color: "white",
                    padding: "15px",
                    pt: "20px",
                    pb: "20px",
                    borderRadius: "6px 6px 0px 0px",
                    position: "relative",
                  }}
                >
                  <Box className="inverted-border-radius-left"> </Box>
                  <Box className="inverted-border-radius-right"> </Box>

                  <Typography variant="h2" textAlign={"center"} sx={{}}>
                    {" "}
                    {title} {howImportent} {today} {diff}
                  </Typography>
                </Box>
                <form onSubmit={handleSubmit}>
                  <Box
                    sx={{
                      bgcolor: "primary.extraLight",
                      padding: "15px",
                      pt: "30px",
                      pb: "30px",
                      borderRadius: "0px 0px 0px 0px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      textAlign={"center"}
                      sx={{ mb: "35px" }}
                    >
                      Hur nöjd är du med {title} idag?
                    </Typography>
                    <Stack
                      spacing={2}
                      direction="row"
                      sx={{}}
                      justifyContent="center"
                    >
                      <Typography sx={{ fontWeight: "bold", pt: "3px" }}>
                        0
                      </Typography>

                      <Typography sx={{ fontWeight: "bold", pt: "3px" }}>
                        10
                      </Typography>
                    </Stack>
                  </Box>

                  <Box sx={{ padding: "15px", pt: "30px", pb: "30px" }}>
                    <Typography
                      variant="h4"
                      textAlign={"center"}
                      sx={{ mb: "35px" }}
                    >
                      Hur viktigt är {title} för dig?
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
                      <Typography sx={{ fontWeight: "bold", pt: "3px" }}>
                        {" "}
                        10{" "}
                      </Typography>
                    </Stack>
                  </Box>

                  <Box
                    sx={{
                      bgcolor: "primary.extraLight",
                      padding: "25px",
                      pt: "30px",
                      pb: "60px",
                    }}
                  >
                    <Typography
                      variant="h4"
                      textAlign={"center"}
                      sx={{ mb: "15px" }}
                    >
                      {" "}
                      Finns det något som hindrar dig från att ha {title} såsom
                      du vill ha det?{" "}
                    </Typography>
                    <TextField
                      fullWidth
                      id="obstacle"
                      label="Om Ja, skriva in vad som hindrar dig här"
                      variant="outlined"
                      sx={{ backgroundColor: "white" }}
                      onChange={(e) => setObstacle(e.target.value)}
                    />

                    <Button
                      variant="contained"
                      aria-label="Backa"
                      startIcon={<ArrowBackIosIcon />}
                      onClick={() => handleSubmit({ title: title })}
                      sx={{
                        position: "absolute",
                        padding: "10px",
                        borderRadius: " 0  6px 0 6px",

                        left: "0px",
                        bottom: "0px",
                      }}
                    >
                      {" "}
                      Gå tillbaka{" "}
                    </Button>

                    <Button
                      variant="contained"
                      aria-label="Backa"
                      endIcon={<ArrowForwardIosIcon />}
                      onClick={() => handleSubmit({ title: title })}
                      sx={{
                        position: "absolute",
                        padding: "10px",
                        borderRadius: "6px 0  6px 0",
                        right: "0px",
                        bottom: "0px",
                      }}
                    >
                      {" "}
                      Nästa livsområde{" "}
                    </Button>
                  </Box>
                </form>
              </Box>
            );
          })}
        </Box>
        <BackButton goTo={"/valj-livsomraden"}>Tillbaka</BackButton>
        <Button
          variant="contained"
          disabled={!isItDone}
          color="success"
          aria-label="Nästa"
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

export default LifeAreasValues;
