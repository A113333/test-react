import * as React from "react";
import LinearProgress from "@mui/material/LinearProgress";

export default function Progressbar({ maxValue, currentValue }) {
  console.log(maxValue);
  console.log(currentValue);
  return (
    <>
      <LinearProgress
        variant="determinate"
        value={(100 / { maxValue }) * { currentValue }}
        color="secondary"
        sx={{
          position: "fixed",
          top: "64px",
          left: "100px",
          maxWidth: "852px",
          mx: "auto",
          zIndex: "100",
          height: "10",
          borderRadius: "5",
        }}
      />
    </>
  );
}
