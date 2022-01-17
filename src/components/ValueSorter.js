import CardSorter from "./Cardsorter";
import { useLocation } from "react-router-dom";
import ExerciseAppbar from "./ExerciseAppbar";
import Typography from "@mui/material/Typography";
import StepperExercise from "./StepperExcercise";
import Headline from "./Headline";
import ErrorPage from "./ErrorPage";
import Box from "@mui/material/Box";

export default function ValueSorter(obj) {
  const location = useLocation();
  const valueArray = location.state; // tar valueArray från "history.push"
  console.log(valueArray);
  //const valueArray = obj.valueArray;
  // console.log(obj);

  // if current === length - 1: return 0 else return +1
  console.log(obj);

  return (
    <div>
      <ExerciseAppbar step="Steg 3 av 3" header="Prioritera din värdering" />
      <StepperExercise
        activeStep={2}
        steps={["Välj tio", "Välj fem", "Prioritera"]}
      />
      <Box sx={{ maxWidth: "725px", mx: "auto" }}>
        <Headline text="Prioritera din värdering" />

        <Typography variant="body1" sx={{ mb: "25px", mt: "25px" }}>
          Bra jobbat! Du är nu på sista steget i denna övning! Här kommer du
          ställa alla dina tidigare valda värderingar mot varandra och tvingas
          att välja en. Tryck på det värderingskort som är viktigast för dig av
          de två som visas, så kommer du få ett nytt kort att ta ställning till.
        </Typography>
      </Box>

      {valueArray ? (
        <CardSorter
          valueArray={valueArray}
          next="/varderingarResultat"
          back="/valj5"
        />
      ) : (
        <ErrorPage />
      )}
    </div>
  );
}
