import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import ValueListJson from "../valueList.json";
import ValuesComponent from "./Value";
import valuesCompareComponet from "./valuesCompare";

// destruct props .text och .values samma som  (props) const = props.value
//export default function ValueList({ text, values })
export default function ValueList({ text }) {
  // deconstruct return obj {data:values} döper om data till values
  const {
    data: values,
    isPending,
    error,
  } = useFetch("http://localhost:8000/valueList");


  // useEffect körs på varje render, här hämtas data från JSON server

  return (
    <div className="valueCompassWrapper">
      {isPending && <div> Laddar ....</div>}
      {error && <div> {error} </div>}
      <div className="valueWrapper">
        <h2>Skapa din personliga värderingslista</h2>
        <p>
          {text}
          Välj alla värderingsord som känns viktiga för dig. Detta för att göra
          listan mer överskådlig inför nästa steg och för att du ska få bekanta
          dig med värderingsorden. (försvinner på scroll)
        </p>
        {/* om values finns så körs ValuesComponet med values*/}
     
        
       
      </div>
    </div>
  );
}
