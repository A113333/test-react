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
import { borderRadius } from "@mui/system";

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


  const user = {
    values: results,
    state: 1, 
  };

  const postResult = () => {

    fetch("http://localhost:3000/user", {
      // berättar för servern att det är en post med JSON data
      method: "POST",
      headers: { "Content-Type": "application/json" },
      //datan som ska skickas
      body: JSON.stringify(user),
    }).then(() => {
      console.log(results);
      console.log("resultat sparat");
   
    // visa confomration att det sparats här?
    });
  
  };
  postResult()

  const nextPage = () => {
    history.push({
      pathname: "/",
      state: user,

    });
  };

  
  return (
    <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
      <div>
      
        <ExerciseAppbar header={"Värderinskompassen"} step={"3 av 3"}  />
        <Container maxWidth="md">

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
                <Box       sx={{
                  display: "table",
                  mx: "auto",
                  transform: "scale(1)",
                  margin: "auto",
                  mt: "15px",
                  boxShadow: 5,
                  borderColor: "grey.500",
                  height: "120px",
                  width: "75%",
                  maxWidth: "500px",
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "6px",
                  mb: "25px",
                }}>
                <li key={id}>
             
                  <Typography
                    variant="h3"
                    sx={{ textAlign: "center", paddingBottom: "5px" }}
                  >
                                     {id + 1 + ". " + title + " (" + pts + " Poäng)"}

                  </Typography>
                  <Divider></Divider>
                  <Typography variant="body1" sx={{ paddingTop: "5px" }}>
                  {" Jag vill vara " + desc}
                  </Typography>

                  <Typography variant="h4" gutterBottom>
                    Hur bra lever du värderingen {" " + title + " "} idag?
                  </Typography>

                </li>
                </Box>
               
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

        <Button variant="contained"  onClick={nextPage}>
          Tillbaka till startsidan
        </Button>
        
        </Container>
      </div>
    </Slide>
  );
}

export default ValueResults;
