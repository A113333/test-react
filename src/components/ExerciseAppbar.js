import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useHistory } from "react-router-dom";

export default function ExerciseAppbar({ header: header, step: step }) {
  const history = useHistory();
  const close = () => {
    history.push({
      pathname: "/",
    });
  };
  return (
    <Box sx={{ flexGrow: 1, mb: "15px" }}>
      <AppBar
        position="sticky"
        sx={{ width: "100%", maxWidth: "852px", mx: "auto", padding: "0px" }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {header}
          </Typography>

          <Button color="inherit"> Steg {step}</Button>

          <IconButton
            onClick={() => close()}
            size="medium"
            edge="end"
            color="inherit"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
