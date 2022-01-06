import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";
import CloseConfirmation from "./CloseConfirmation";

export default function ExerciseAppbar({ header, step }) {
  const [showCloseDialog, setshowCloseDialog] = useState(false);

  const pressClose = () => {
    setshowCloseDialog(true);
  };

  const donotQuite = () => {
    setshowCloseDialog(false);
    console.log("Körs");
  };

  return (
    <div className="appBarPadder">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          sx={{
            height: "64px",
            width: "100%",
            maxWidth: "853px",
            left: "50%",
            transform: "translate(-50%)",
            bgcolor: 'primary.main',
          }}
        >
          <Toolbar
             sx={{
              bgcolor: 'primary.main',
            }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, userSelect: "none",}}>
              {header}
            </Typography>

            <Button color="inherit"> Steg {step}</Button>

            <Tooltip title="Avsluta övningen">
              <IconButton
                onClick={() => pressClose()}
                size="medium"
                edge="end"
                color="inherit"
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </Box>
      {showCloseDialog && (
        <CloseConfirmation
          title="Är du säker att du vill avsluta övningen?"
          text="Avslutar du nu kommer ditt resultat kommer inte sparas och du får börja om från början nästa gång"
          option1="Nej"
          option2="Ja"
          donotQuite={donotQuite}
        />
      )}
    </div>
  );
}