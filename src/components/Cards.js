import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router-dom";
import userEvent from "@testing-library/user-event";

export default function MultiActionAreaCard({
text,
  rubrik,
  linkTo,
 state,
  stateColor,
  isActive,
  img
}) {
  console.log(stateColor);

  const history = useHistory();
  const goTo = () => {
    history.push({
      pathname: linkTo,
    });
  };
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        boxShadow: 5,
        mx: "auto",
        transform: "scale(1)",
      }}
    >
      <CardActionArea onClick={goTo}>
        <CardMedia
          component="img"
          height="100"
          image={img}
          alt="Kompass"
        />

        <CardContent sx={{ padding: "8px" }}>
          <Typography gutterBottom variant="body1" component="div" sx={{ fontWeight: "bold", fontSize: "1,4rem", }}>
            {rubrik}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          fullWidth={true}
          onClick={goTo}
          variant="contained"
          color={stateColor}
          disabled={!isActive}
        >
         { isActive? "STARTA ÖVNINGEN": "kommer snart"}
        </Button>
      </CardActions>
    </Card>
  );
}
