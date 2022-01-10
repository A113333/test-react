import React from "react";
import Headline from "./Headline";
import BackToHomeButton from "./BackToHomeButton";
import Navbar from "./Navbar";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function NotFound() {
  return (
    <div>
      <Navbar />
      <Headline text="Oj, något som verkat gått fel" />
      <Box textAlign="center">
        <Typography>
          {" "}
          Vi ber om ursäkt, men sidan är ny och vi håller på att reda ut alla
          buggar.{" "}
        </Typography>
        <BackToHomeButton />{" "}
      </Box>
    </div>
  );
}

export default NotFound;
