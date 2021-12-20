import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import ValuesComponent from "./Value";

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
        <Typography variant="h1"> Välj dina värderingsord </Typography>
        <Typography variant="body1">
          {text}
          Välj alla värderingsord som känns viktiga för dig. Välj minst fem och
          max 10. Har du svårt att välja, testa att ställa dig frågan: med vilka
          ord hade jag velat att den som kännde mig bäst hade beskrivigt mig med
          på min egna begravning?
        </Typography>
        <br></br>
        {/* om values finns så körs ValuesComponet  */}
        {values && <ValuesComponent values={values} />}
      </div>
    </div>
  );
}
