import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Container from "@mui/material/Container";
//import FormGroup from "@mui/material/FormGroup";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";

//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Value({ values }) {
  const [checkedState, setCheckedState] = useState(
    new Array(values.length).fill(false)
  );
  const [nrsPicked, setnrsPicked] = useState(0);

  const handleOnChange = ({ id, title }) => {
    // sätter true / false för checkbox items
    const updatedCheckedState = checkedState.map((item, index) =>
      index === id ? !item : item
    );
    setCheckedState(updatedCheckedState);
    // setUserValues(updatedValues);
  };
  const history = useHistory();

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
    history.push({
      pathname: "/valuesorter",
      state: userValueArray,
    });
  };

  useEffect(() => {
    // Update the document title using the browser API
    console.log(checkedState);
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
          <ListSubheader>
            {
              <Typography
                variant="h3"
                sx={{
                  textAlign: "center",
                  border: "1px",
                  borderRadius: "50%",
                  margin: "10px",
                }}
              >
                {nrsPicked} Valda
              </Typography>
            }
          </ListSubheader>
          {values.map(({ title, desc }, id) => {
            return (
              <li key={id}>
                <div className="value-list-item">
                  <div>
                    <input
                      type="checkbox"
                      className="value-list-checkbox"
                      /*${id} låter mig sätta ett dynamiskt värde i html   */
                      id={`custom-checkbox-${id}`}
                      title={title}
                      checked={checkedState[id]}
                      onChange={() => handleOnChange({ id: id, title: title })}
                    />
                    <label htmlFor={`custom-checkbox-${id}`}>
                      <Typography variant="body1">
                        {id + 1 + ". " + title + " - " + desc}
                      </Typography>
                    </label>
                  </div>
                </div>
              </li>
            );
          })}
        </List>
      </div>
      <Button
        fullWidth={true}
        variant="contained"
        color="primary"
        onClick={() => nextPage()}
        sx={{}}
      >
        NÄSTA
      </Button>
    </div>
  );
}
