import React from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";


function BackToHomeButton() {
  const history = useHistory();



  const toStart = () => {
    history.push({
      pathname: "/",
    });
  };
 
  return (
    <div>
      <Button variant="contained" onClick={toStart} sx={{ mb: "25px", mt:"25px",}} >
        Tillbaka till startsidan
      </Button>
    </div>
  );
}

export default BackToHomeButton;
