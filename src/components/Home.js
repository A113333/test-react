import Modal from "./Modal";
import React from "react";
import Cards from "./Cards";
import Grid from "@mui/material/Grid";

// Grid är 12 columer

export default function Home() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid flow="vertically" item xs={10} md={4} lg={3}>
          <Cards
            text={
              "Få hjälp att hitta din kurs, hur vill du vara som människa? Vad är viktigt för dig på riktigt?"
            }
            rubrik={"Värderingskompassen, Steg 1"}
            linkTo={"/values1"}
          />
        </Grid>
        <Grid item xs={10} md={4} lg={3}>
          <Cards
            text={
              "Fördjupa dig i dina värderingar: vilka livsområden är särskilt viktiga för dig? "
            }
            rubrik={"Värderingskompassen, Steg 2."}
            linkTo={"/varderingskompassenSteg2"}
          />
        </Grid>{" "}
        <Grid item xs={10} md={4} lg={3}>
          <Cards
            text={
              "Fördjupa dig i dina värderingar: vilka livsområden är särskilt viktiga för dig? "
            }
            rubrik={"Värderingskompassen, Steg 3."}
            linkTo={"/varderingskompassenSteg3"}
          />
        </Grid>
      </Grid>

      <Modal
        text={
          "Lorem ipsum dolor sit amet, t, consectetur adipiscing elit. Duis sit amet ultrices erat, eget luctus tellus. Fusce in mattis elit. Aenean lacinia sagittis ultrices. Aliquam ut imperdiet turpis. Phasellus a tellus auctor, egestas mi rutrum, tincidunt nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam iaculis mi nec ligula malesuada egestas. Aliqt, consectetur adipiscing elit. Duis sit amet ultrices erat, eget luctus tellus. Fusce in mattis elit. Aenean lacinia sagittis ultrices. Aliquam ut imperdiet turpis. Phasellus a tellus auctor, egestas mi rutrum, tincidunt nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam iaculis mi nec ligula malesuada egestas. Aliqconsectetur adipiscing elit. Duis sit amet ultrices erat, eget luctus tellus. Fusce in mattis elit. Aenean lacinia sagittis ultrices. Aliquam ut imperdiet turpis. Phasellus a tellus auctor, egestas mi rutrum, tincidunt nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam iaculis mi nec ligula malesuada egestas. Aliquam eget nibh risus.idiculus mus. Praesent dui ex, porta nec interdum et, gravida id mi."
        }
      />
    </div>
  );
}
