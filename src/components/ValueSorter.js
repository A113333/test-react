import CardSorter from "./Cardsorter";
import { useLocation } from "react-router-dom";
import ExerciseAppbar from "./ExerciseAppbar";
import Typography from '@mui/material/Typography';
import StepperExercise from "./StepperExcercise"

import ErrorPage from "./ErrorPage";


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
      <ExerciseAppbar step="Steg 3 av 3" header="Rangordnare" />
      <StepperExercise activeStep={2}/>
      {valueArray? <CardSorter valueArray={valueArray} /> : <ErrorPage/> }
    </div>
  );
}
