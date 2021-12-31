import React, { useState } from "react";
import ItsDoneComponent from "./ItsDoneComponent";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import CloseConfirmation from "./CloseConfirmation"
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';


export default function ExerciseAppbar({ header, step }) {
  const [showCloseDialog, setshowCloseDialog] = useState(false)

  const history = useHistory();

  const pressClose = ()=> {
    setshowCloseDialog(true)
  }

  const donotQuite = ()=> {
    setshowCloseDialog(false)
    console.log("Körs")
  }

  
  return (
    <div className="appBarPadder">
      <Box sx={{ flexGrow: 1, mb: "15px", backgroundColor:"secondary" }}>
        <AppBar
          position="fixed"
          sx={{
            width: "100%",
            maxWidth: "852px",
            mx: "auto",
            padding: "0px",
            left: "50%",
            transform: "translate(-50%, 0)",
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
             {header}
            </Typography>

            <Button color="inherit"> Steg {step}</Button>

            <Tooltip title="Avsluta övningen" > 
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
      {showCloseDialog && 
      <CloseConfirmation title= "Är du säker att du vill avsluta övningen?" 
        text="Avslutar du nu kommer ditt resultat kommer inte sparas och du får börja om från början nästa gång"
        option1="Nej"
        option2="Ja"
        donotQuite={donotQuite}
     
        />
      }

    </div>
  );
}
