import React from "react";
import { Divider } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Headline(props) {
  return (
    <div>
      <Box>
        <Typography
          variant="h2"
          gutterBottom
          align="center"
          sx={{ mt: "30px", mb: "5px" }}
        >
          {props.text}
        </Typography>

        <Divider sx={{ width: "75%", mx: "auto", mb: "15px" }} />
      </Box>
    </div>
  );
}

export default Headline;
