import { useLocation } from "react-router-dom";
import { Button, Typography, Card } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slide from "@mui/material/Slide";
import ExerciseAppbar from "./ExerciseAppbar";
import Container from "@mui/material/Container";
import Slider from "@mui/material/Slider";
import { Divider } from "@mui/material";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0: "Inte alls",

  1: "Ganska lite",

  2: "Lite",

  3: "En del",

  4: "Mycket",

  5: "Väldigt mycket",
};

function ValueResults(obj) {
  const [slide, setSlide] = useState(false);
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  useEffect(() => {
    setSlide(true);
  }, []);

  const location = useLocation();
  const valueArray = location.state;
  console.log(valueArray);
  const results = valueArray.sort((a, b) => {
    return b.pts - a.pts;
  });

  const history = useHistory();
  const nextPage = () => {
    history.push({
      pathname: "/",
    });
  };

  return (
    <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
      <div>
        <ExerciseAppbar header={"Värderinskompassen"} step={"3 av 3"} />
        <Container maxWidth="md"></Container>

        <div>
          <Typography variant="h2" gutterBottom>
            Dina fem viktigaste värderingar
          </Typography>

          <Typography variant="body1" gutterBottom>
            Bra jobbat, ta ett djupt andetag och tacka dig själv, du har precis
            gjort något viktigt och meningsfullt för din egna skull. Ta nu en
            noggran titt på dina värderingar.
          </Typography>

          <div className="noStyleList">
            {results.map(({ title, desc, pts }, id) => {
              return (
                <li key={id}>
                  <Divider textAlign="left" sx={{ mb: "15px" }}></Divider>

                  <Typography variant="h3" gutterBottom>
                    {id + 1 + ". " + title + " (" + pts + " Poäng)"}
                  </Typography>

                  <Typography variant="body1" gutterBottom>
                    {" Jag vill vara " + desc}
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    Hur bra lever du värderingen {" " + title + " "} idag?
                  </Typography>

                  <Card />
                </li>
              );
            })}
          </div>
          <br></br>
          <Typography variant="h3" gutterBottom>
            En fråga här?
          </Typography>
          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
              height: "40px",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={1}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>
          <Typography variant="body1" gutterBottom>
            I nästa övning kommer vi fortsätta fördjupa oss i värderingar, då
            kommer vi kolla på hur dina värderingar ser ut i olika livsområden
          </Typography>
        </div>

        <Button variant="contained" fullWidth={true} onClick={nextPage}>
          Tillbaka till startsidan
        </Button>
      </div>
    </Slide>
  );
}

export default ValueResults;
