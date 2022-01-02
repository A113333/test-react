import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ItsDoneComponent from "./ItsDoneComponent";
import LinearProgress from '@mui/material/LinearProgress';
//import FormGroup from "@mui/material/FormGroup";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";

//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function ValueLister({ values }) {
  const [checkedState, setCheckedState] = useState(
    new Array(values.length).fill(false)
  );
  const [nrsPicked, setnrsPicked] = useState(0);
  const [picked, setPicked] = useState([]);
  const [itsDone, setitsDone] = useState(false);
  const [showItsDone, setshowItsDone] = useState(false);

  useEffect(() => {
     // using camelCase for variable name is recommended.
     console.log("-.-.-.-.-")
    console.log(checkedState)
  
    let nr = 0
    const updateNrsPicked = () => {
      checkedState.forEach((item, index) => {
      if (item) {
        nr= nr +1
      }
    });
   
    setnrsPicked(nr);
  }
  updateNrsPicked();
  if(nr >= 5){
    setitsDone(true)
  } else {setitsDone(false)}

  }, [checkedState]); // this will call getChildChange when ever name changes.

  const handleOnChange = ({ id, title }) => {


     // sätter true / false för checkbox items
    const updatedCheckedState = checkedState.map((item, index) =>
    index === id ? !item : item
  );
     

      if(itsDone && checkedState[id] ) {
        setCheckedState(updatedCheckedState) 
        setshowItsDone(false);
      } else if(itsDone) {
         setshowItsDone(true);
      } else {
        setCheckedState(updatedCheckedState) 
        setshowItsDone(false);
      }
       // setUserValues(updatedValues);
    
    
  };
  const history = useHistory();

  const scroll = () => {
    window.scrollTo({ top: 0 });
    console.log("scroll körs");
  };
  //handler för nästa knappen
  const nextPage = () => {
    const userValueArray = [];

  
    checkedState.map((item, index) => {
      if (item) {
        userValueArray.push(values[index]);
      }
    });

    scroll();
    history.push({
      pathname: "/valuesorter",
      state: userValueArray,
    });
  };



  return (
    <div>
      <div >
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
                  <input
                    className="value-list-checkbox"
                    type="checkbox"
                    /*${id} låter mig sätta ett dynamiskt värde i html    */
                    id={`custom-checkbox-${id}`}
                    title={title}
                    checked={checkedState[id]}
                    onChange={() => handleOnChange({ id: id, title: title })}
                  />
                  <label htmlFor={`custom-checkbox-${id}`}>
                    <Typography variant="h3">
                      {id + 1 + ". " + title + " "}
                    </Typography>
                    <Typography variant="body1">{desc}</Typography>
                  </label>
                </div>
              </li>
            );
          })}
        </List>
        <br></br>
        <br></br>
      </div>

      {showItsDone && <ItsDoneComponent title= "Du har valt tio värderingar" 
      text="Välj bort en värdering om du vill välja en ny"
      option2= "Okej"/>
     
      }
      <LinearProgress variant="determinate" value={((100/5 )* nrsPicked)
} sx={{mb:"36px",}}/>

      {nrsPicked >= 5 &&  (
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

      {nrsPicked < 5 && (
        <Button
          fullWidth={true}
          variant="contained"
          sx={{ position: "fixed", bottom: "0", maxWidth: "852px" }}
        >
          <Typography variant="body1" sx={{ color: "white" }}>
            {" "}
            Välj minst {5 - nrsPicked + " "} till{" "}
          </Typography>
        </Button>
      )}
    </div>
  );
}