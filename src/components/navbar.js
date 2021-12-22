import React from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

export default function Navbar() {
  return (
    <div>
      <Grid container>
        <Grid s={12}>
          <nav className="navbar">
            <div className="links">
              {/* använder  linktaggen för att den inte ska skicka request till server*/}
              <Link to="/">Hem</Link>
              <Link to="/valueList">Värderingslista</Link>
              <Link to="/valuesorter">Värderingssorterare</Link>

              <Link to="/createValue">Skapa</Link>
            </div>
          </nav>
        </Grid>
      </Grid>
    </div>
  );
}
