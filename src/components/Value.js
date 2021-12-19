import React, { useState, Link } from "react";

//import FormGroup from "@mui/material/FormGroup";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";

//const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Value({ values }) {
  const [checkedState, setCheckedState] = useState(
    new Array(values.length).fill(false)
  );
  const [userValue, setUserValues] = useState([]);
  // on click för items i listan
  const handleOnChange = ({ id, title }) => {
    //console.log(id);
    const updatedCheckedState = checkedState.map((item, index) =>
      index === id ? !item : item
    );
    setCheckedState(updatedCheckedState);
    // setUserValues(updatedValues);
    console.log(userValue);
  };

  //hadnler för nästa knappen

  return (
    <div>
      <h3>Välj Värderingar</h3>
      <ul className="value-list">
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
                    {id + 1 + ". " + title + " - " + desc}
                  </label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button className="next" onClick={() => console.log("hehes")}>
        <p>Nästa</p>
      </button>
    </div>
  );
}

//onClick = {()=> setChecked(!checked)}
//{checked ?   <h3 style={{color:"gray"}}>   {value.value.title + " - "} </h3> :
//<h3 style={{color:"blue"}}>   {value.value.title + " - "} </h3> }
