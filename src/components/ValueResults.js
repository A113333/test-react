import React from "react";
import { useLocation } from "react-router-dom";

function ValueResults(obj) {
  const location = useLocation();
  const valueArray = location.state;
  console.log(valueArray);
  const results = valueArray.sort((a, b) => {
    return b.pts - a.pts;
  });
  return (
    <div className="noStyleList">
      {results.map(({ title, desc, pts }, id) => {
        return (
          <li key={id}>
            <div>
              <h3>
                {id + 1 + ": " + title + " -" + desc + " " + "pts: " + pts}
              </h3>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default ValueResults;
