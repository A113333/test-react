import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router-dom";
import { Divider } from "@mui/material";
import Avatar from "@mui/material/Avatar";

export default function MultiActionAreaCard({
  text,
  rubrik,
  linkTo,
  state,
  stateColor,
  backgroundcolor,
  isActive,
  img,
  nr,
}) {
  const history = useHistory();
  const goTo = () => {
    history.push({
      pathname: linkTo,
    });
  };

  return (
    <Card
      sx={{
        backgroundColor: backgroundcolor,
        boxShadow: 15,
        mx: "auto",
        transform: "scale(1)",
      }}
    >
      <CardActionArea onClick={goTo}>
        <CardMedia
          className="svg"
          component="img"
          height="200"
          image={img}
          alt="Värderingsbild"
        />

        <CardContent
          sx={{
            padding: "0px",
            minHeight: "160px",
          }}
        >
          <Typography
            variant="body1"
            component="div"
            sx={{
              fontWeight: "bold",
              fontSize: "1,4rem",
              padding: "5px",
              pb: "1px",
              textAlign: "center",
              color: "primary.main",
            }}
          >
            {rubrik}
          </Typography>

          <Divider />

          <Typography
            variant="body1"
            sx={{
              padding: "5px",
              pl: "10px",
              pr: "10px",
              margin: "0",
            }}
          >
            {text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ padding: "0px" }}>
        <Button
          fullWidth={true}
          onClick={goTo}
          variant="text"
          color={stateColor}
          disabled={!isActive}
          sx={{
            pl: "0px",
            pr: "0px",
            borderRadius: 0,
          }}
        >
          {isActive ? "STARTA ÖVNINGEN" : "kommer snart"}
        </Button>
      </CardActions>
    </Card>
  );
}
