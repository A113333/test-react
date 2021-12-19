import React, { useState } from "react";
//import FormGroup from "@mui/material/FormGroup";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";

//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Value(value) {
  console.log("inside VALUE" + value);
  const [checkedState, setCheckedState] = useState(
    new Array(value.length).fill(false)
  );

  const [userValue, changeUserValues] = useState(0);

  const handleOnChange = (id) => {
    console.log(id);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === id ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="sectionWrapper">
      <h3>Välj Värderingar</h3>
      <ul className="value-list">
        {value.value.map(({ title, desc }, id) => {
          return (
            <li key={id}>
              <div className="value-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${id}`}
                    title={title}
                    value={title}
                    checked={checkedState[id]}
                    onChange={() => handleOnChange(id)}
                  />
                  <label htmlFor={`custom-checkbox-${id}`}>
                    {title + " - " + desc}
                  </label>
                </div>
                <div className="right-section">{}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

//onClick = {()=> setChecked(!checked)}
//{checked ?   <h3 style={{color:"gray"}}>   {value.value.title + " - "} </h3> :
//<h3 style={{color:"blue"}}>   {value.value.title + " - "} </h3> }
