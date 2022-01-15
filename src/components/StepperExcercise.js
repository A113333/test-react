import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useMediaQuery } from "@mui/material";

const steps = ["Välj tio", "Välj fem", "Prioritera"];

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(props.activeStep);
  const [skipped, setSkipped] = React.useState(new Set());

  const smallScreen = useMediaQuery("(max-width:322px)");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      sx={{
        width: "75%",
        pt: "25px",
        mx: "auto",
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
