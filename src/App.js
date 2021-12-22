import React from "react";
import ValuePicker from "./components/ValuePicker";
import "./app.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ValueDetalis from "./components/ValueDetails";
import CreateValue from "./components/CreateValue";
import NotFound from "./components/NotFound";
import ValueSorter from "./components/ValueSorter";
import ValueResults from "./components/ValueResults";
import ValueCompassStep1 from "./components/ValueCompassStep1";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "material-icons/iconfont/material-icons.css";
import CssBaseline from "@mui/material/CssBaseline";

//const ValueList = valueList
//console.log(ValueList)

// json-server --watch db.json --port8000

const theme = createTheme({
  typography: {
    fontFamily: ['"Montserrat"', "sans-seri"].join(","),
    h1: {
      fontSize: "2,2rem",
      fontWeight: "bolder",
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "1,4rem",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "1rem",
      fontWeight: "bold",
    },
    button: {
      fontWeight: "bold",
    },
  },
});

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Navbar />

        <div className="app">
          <ThemeProvider theme={theme}>
            {/* Switch = endast en kommer visas, route ger en path; i den path
           visa det i som finns i route elementet, om inte exact path så matchar /creat /*/}
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/values1">
                <ValueCompassStep1 />
              </Route>

              <Route exact path="/valueList">
                <ValuePicker text={" "} />
              </Route>
              <Route exact path="/valueSorter">
                <ValueSorter />
              </Route>
              <Route exact path="/valueResults">
                <ValueResults />
              </Route>

              <Route path="/createValue">
                <CreateValue />
              </Route>
              {/*  /:id för att dynamiskt kunna visa resultat uifrån route parmeter /*/}
              <Route path="/values/:id">
                <ValueDetalis />
              </Route>

              {/*  * fångar alla routes, måste vara i botten 404*/}
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </ThemeProvider>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
