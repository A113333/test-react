import React from "react";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Navbar from "./navbar";
import useFetch from "../useFetch";
// Grid är 12 columer
/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/

export default function Home() {
  const {
    data: user,
    isPending,
    error,
  } = useFetch("http://localhost:8000/user");

  console.log(user);
  //  { ...user.values && user.values  }

  return (
    <div className="">
      <Navbar />

      <div className="padderTop">
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Få hjälp att hitta din kurs, hur vill du vara som människa? Vad är viktigt för dig på riktigt?"
                }
                rubrik={"Värderingskompassen, Steg 1"}
                linkTo={"/values1"}
                stateColor={"success"}
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Fördjupa dig i dina värderingar: vilka livsområden är särskilt viktiga för dig? "
                }
                rubrik={"Värderingskompassen, Steg 2."}
                linkTo={"/varderingskompassenSteg2"}
              />
            </Grid>{" "}
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Fördjupa dig i dina värderingar: vilka livsområden är särskilt viktiga för dig? "
                }
                rubrik={"Värderingskompassen, Steg 3."}
                linkTo={"/varderingskompassenSteg3"}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
