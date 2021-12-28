import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Title } from "@mui/icons-material";

//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Test({ values }) {
  const [checkedState, setCheckedState] = useState(
    new Array(values.length).fill(false)
  );
  const [nrsPicked, setnrsPicked] = useState(0);
  const [picked, setPicked] = useState([]);

  // sätter true / false för checkbox items
  const handleOnChange = ({ id, title }) => {
    // counter för att se hur många values man valt
    picked.push(id);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === id ? !item : item
    );
    setCheckedState(updatedCheckedState);
    // setUserValues(updatedValues);
  };
  const history = useHistory();

  const scroll = () => {
    window.scrollTo({ top: 0 });
    console.log("körs");
  };
  //handler för nästa knappen
  const nextPage = () => {
    const userValueArray = [];

    console.log(checkedState);
    checkedState.map((item, index) => {
      if (item) {
        userValueArray.push(values[index]);
      }
    });
    console.log(userValueArray);
    scroll();
    history.push({
      pathname: "/valuesorter",
      state: userValueArray,
    });
  };

  useEffect(() => {
    const updatePicked = () => {
      let nrPick = 0;
      console.log();
      checkedState.map((item, index) => {
        if (item) {
          nrPick = nrPick + 1;
          console.log(item);
        }
      });
      console.log(nrPick);
      setnrsPicked(nrPick);
    };
    updatePicked();
  });

  return (
    <div>
      <div>
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

      {nrsPicked >= 3 && (
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

      {nrsPicked <= 2 && (
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
