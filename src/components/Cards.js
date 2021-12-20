import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useHistory } from "react-router-dom";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export default function MultiActionAreaCard({
  text: text,
  rubrik: rubrik,
  linkTo: linkTo,
}) {
  console.log(linkTo);
  const history = useHistory();
  const goTo = () => {
    history.push({
      pathname: linkTo,
    });
  };
  return (
    <Stack direction="row" spacing={2}>
      <Card
        sx={{
          bgcolor: "background.paper",
          boxShadow: 1,
          m: 2,
          maxWidth: 200,
        }}
      >
        <CardActionArea onClick={goTo}>
          <CardMedia
            component="img"
            height="100"
            image="/images/compass.jpg"
            alt="Kompass"
          />

          <CardContent>
            <Typography gutterBottom variant="h1" component="div">
              {rubrik}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button fullWidth={true} variant="contained" color="primary">
            STARTA ÖVNINGEN
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
}
