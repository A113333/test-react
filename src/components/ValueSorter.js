import CardSorter from "./Cardsorter";
import { useLocation } from "react-router-dom";
import ExerciseAppbar from "./ExerciseAppbar";

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
      <ExerciseAppbar step="2 av 3" header="Rangordnare" />

      {valueArray && <CardSorter valueArray={valueArray} />}
    </div>
  );
}
