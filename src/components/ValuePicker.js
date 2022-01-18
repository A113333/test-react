import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ItsDoneComponent from "./ItsDoneComponent";
import LinearProgress from "@mui/material/LinearProgress";
import BackButton from "./BackButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import Checkbox from "@mui/material/Checkbox";

//import FormGroup from "@mui/material/FormGroup";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";

// fixa hoover

export default function ValueLister({
  values,
  nrsToPick: nrsToPick,
  next,
  back,
}) {
  const [checkedState, setCheckedState] = useState(
    new Array(values.length).fill(false)
  );
  const [nrsPicked, setnrsPicked] = useState(0);
  const [isItDone, setisItsDone] = useState(false);
  const [showItsDone, setshowItsDone] = useState(false);
  const smallScreen = useMediaQuery("(max-width:322px)");
  //  [checkedState]);  gör att enbart kör när checkedstate ändras
  useEffect(() => {
    let nr = 0;
    const updateNrsPicked = () => {
      checkedState.forEach((item, index) => {
        if (item) {
          nr = nr + 1;
        }
      });
      setnrsPicked(nr);
    };
    updateNrsPicked();
    if (nr >= nrsToPick) {
      setisItsDone(true);
    } else {
      setisItsDone(false);
    }
  }, [checkedState]);

  const handleOnChange = ({ id, title }) => {
    // sätter true / false för checkbox items
    const updatedCheckedState = checkedState.map((item, index) =>
      index === id ? !item : item
    );

    if (isItDone && checkedState[id]) {
      setCheckedState(updatedCheckedState);
      setshowItsDone(false);
    } else if (isItDone) {
      setshowItsDone(true);
    } else {
      setCheckedState(updatedCheckedState);
      setshowItsDone(false);
    }
    // setUserValues(updatedValues);
  };
  const history = useHistory();

  //handler för nästa knappen
  const nextPage = () => {
    const userValueArray = [];

    checkedState.forEach((item, index) => {
      if (item) {
        userValueArray.push(values[index]);
      }
    });

    history.push({
      pathname: next,
      state: userValueArray,
    });
  };

  return (
    <Box sx={{ overflow: "hidden" }}>
      <div>
        <LinearProgress
          variant="determinate"
          value={(100 / nrsToPick) * nrsPicked}
          color="secondary"
          sx={{
            position: "fixed",
            top: "64px",
            width: "100%",
            maxWidth: "854px",
            left: "50%",
            transform: "translate(-50%, 0)",
            padding: "0px",
            zIndex: 100,
            height: 15,
            // borderRadius: 5,
          }}
        />
        <Box 
           className={isItDone? "success" : "primary"}
           sx={{ position: "fixed",
            top: "45px",
            maxWidth: "854px",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: "1000",
           minWidth: "52px",
           textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "0.9rem",
            padding: "5px",
            pb: "12px",
            pt: "12px",
            border: "2px solid white",
            borderRadius: '50%' }}
            > 
            
            {nrsPicked} / {nrsToPick } 
           
            </Box>
        <List
          sx={{
            width: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            maxHeight: "100%",
            "& ul": { padding: 0 },
          }}
          subheader={<li />}
        >
          {values.map(({ title, desc }, id) => {
            return (
              <li key={id}>
                <div
                  className={checkedState[id] ? "picked" : "value-list-item"}
                >
                  <Checkbox
                    color="default"
                    sx={{
                      "& .MuiSvgIcon-root": { fontSize: 30 },
                      position: "absolute",
                      right: "30px",
                    }}
                    id={`custom-checkbox-${id}`}
                    title={title}
                    checked={checkedState[id]}
                    onChange={() => handleOnChange({ id: id, title: title })}
                  />
                  <Box
                    sx={{
                    
                      "&:hover": {
                        transform: "scale(1.01)",
                      },
                    }}
                  >
                    <label htmlFor={`custom-checkbox-${id}`}>
                      <Typography variant="h3" sx={{ padding: "10px", pb:"0px", width: "90%" }}>
                        {id + 1 + ". " + title + " "}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ padding: "10px", pt: "0px" , width: "90%"}}
                      >
                        {desc}
                      </Typography>
                    </label>
                  </Box>
                </div>
              </li>
            );
          })}
        </List>
        <br></br>
        <br></br>
        <Box
          sx={{ transform: smallScreen ? "scale(0.9)" : null, width: "100%" }}
        >
          <BackButton goTo={back} />

          {isItDone && (
            <Button
              variant="contained"
              color="primary"
              aria-label="Backa"
              endIcon={<ArrowForwardIosIcon />}
              onClick={nextPage}
              sx={{ float: "right", mb: "15px", mt: "45px", mr: "15px" }}
            >
              Nästa
            </Button>
          )}

          {nrsPicked < nrsToPick && (
            <Button
              variant="contained"
              disabled
              color="success"
              aria-label="Backa"
              endIcon={<ArrowForwardIosIcon />}
              onClick={nextPage}
              sx={{ float: "right", mb: "15px", mt: "45px", mr: "15px" }}
            >
              Välj {nrsToPick - nrsPicked} till
            </Button>
          )}
        </Box>
      </div>

      {showItsDone && (
        <ItsDoneComponent
          title="Du har valt tio värderingar"
          text="Välj bort en värdering om du vill välja en ny"
          option2="Okej"
        />
      )}
    </Box>
  );
}
