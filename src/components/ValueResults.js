import React from "react";
import { useLocation } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Button, Typography, Card } from "@mui/material";

function ValueResults(obj) {
  const location = useLocation();
  const valueArray = location.state;
  console.log(valueArray);
  const results = valueArray.sort((a, b) => {
    return b.pts - a.pts;
  });
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Dina fem viktigaste värderingar
      </Typography>

      <Typography variant="body1" gutterBottom>
        Bra jobbat, ta ett djupt andetag och tacka dig själv, du har precis
        gjort något viktigt och meningsfullt för din egna skull. Ta nu en
        noggran titt på dina värderingar.
      </Typography>
      <div className="noStyleList">
        {results.map(({ title, desc, pts }, id) => {
          return (
            <li key={id}>
              <Typography variant="h3" gutterBottom>
                {id + 1 + ". " + title + " (" + pts + " Poäng)"}
              </Typography>

              <Typography variant="body1" gutterBottom>
                {" Jag vill vara " + desc}
              </Typography>
              <Card />
            </li>
          );
        })}
      </div>
      <br></br>
      <Typography variant="body1" gutterBottom>
        I nästa övning kommer vi fortsätta fördjupa oss i värderingar, då kommer
        vi kolla på hur dina värderingar ser ut i olika livsområden
      </Typography>
      <Button
        variant="contained"
        fullWidth={true}
        onClick={() => {
          console.log("hehe");
        }}
      >
        Tillbaka till startsidan
      </Button>
    </div>
  );
}

export default ValueResults;
