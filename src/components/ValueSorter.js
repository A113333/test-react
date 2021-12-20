import React, { useState } from "react";
import BottomValueCard from "./BottomValueCard";
import ValueCard from "./ValueCard";
import { useLocation } from "react-router-dom";

export default function ValueSorter(obj) {
  const location = useLocation();
  const valueArray = location.state; // tar valueArray från "history.push"
  console.log(valueArray);
  //const valueArray = obj.valueArray;
  // console.log(obj);

  // if current === length - 1: return 0 else return +1

  return (
    <div className="valueSorterWrapper">
      {valueArray && <BottomValueCard valueArray={valueArray} />}
    </div>
  );
}
