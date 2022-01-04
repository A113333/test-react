import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

function BackButton() {
  const history = useHistory();

  const prevPage = () => {
    history.goBack();
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        aria-label="Nästa"
        startIcon={<ArrowBackIosIcon />}
        onClick={prevPage}
        sx={{ mb: "15px", mt: "15px" }}
      >
        Tillbaka
      </Button>
    </>
  );
}

export default BackButton;
