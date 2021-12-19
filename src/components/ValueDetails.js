import React from "react";
import { useParams, useHistory } from "react-router-dom";
import useFetch from "../useFetch";

export default function ValueDetalis() {
  /* för att kunna välja vilket value som ska visas utifrån route */
  const { id } = useParams();
  // deconstrut svaret från
  console.log("körs");
  const history = useHistory();
  const {
    data: value,
    error,
    isPending,
  } = useFetch("http://localhost:3000/valueList/" + id);

  const handleClick = () => {
    fetch("http://localhost:3000/valueList/" + value.id, {
      method: "DELETE",
    }).then(() => history.push("/"));
  };
  return (
    <div>
      {isPending && <div> Laddar.... </div>}
      {error && <div> {error} </div>}
      {value && (
        <artical>
          <h2> {value.title}</h2>
          <p> {value.desc}</p>
        </artical>
      )}
      <button onClick={handleClick}> Delete </button>
    </div>
  );
}
