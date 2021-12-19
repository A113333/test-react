import React from "react";
import ValueList from "./components/ValueList";
import "./app.css";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ValueDetalis from "./components/ValueDetails";
import CreateValue from "./components/CreateValue";
import NotFound from "./components/NotFound";
import ValueSorter from "./components/ValueSorter";
import ValueResults from "./components/ValueResults";
//const ValueList = valueList
//console.log(ValueList)

// json-server --watch db.json --port8000
function App() {
  const text = "lalal";
  //console.log(values);

  const ValueListBtn = () => {
    console.log("heheh");
  };

  return (
    <Router>
      <div className="App">
        <Navbar />

        <div className="content">
          {/* Switch = endast en kommer visas, route ger en path; i den path
           visa det i som finns i route elementet, om inte exact path så matchar /creat /*/}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route exact path="/valueList">
              <ValueList text={text} />
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
        </div>
      </div>
    </Router>
  );
}

const SAMPLE_VALUELIST = [
  {
    id: 1,
    title: "Accepterande",
    desc: "öppen för, tillåtande av eller tillfreds med mig själv, andra, livet, mina känslor osv.",
    pts: 0,
  },
  {
    id: 2,
    title: "Äventyrlig",
    desc: "villig att skapa eller sträva efter nya, spännande erfarenheter",
    pts: 0,
  },
  {
    id: 3,
    title: "Självsäker",
    desc: "att lugnt, rättvist och respektfullt stå upp för mina rättigheter och våga be om det jag vill ha",
    pts: 0,
  },

  {
    id: 4,
    title: "Autentisk",
    desc: "att vara genuin, äkta och sann mot mig själv",
    pts: 0,
  },
  {
    id: 5,
    title: "Omtänksam",
    desc: "att aktivt ta hand om mig själv, andra, miljön osv.",
    pts: 0,
  },
  {
    id: 6,
    title: "Medkänsla och självmedkänsla",
    desc: "att svara vänligt mot mig själv och andra när mitt eller deras liv är svårt.",
    pts: 0,
  },
  {
    id: 7,
    title: "Kurage",
    desc: "att vara modig eller djärv; att stå kvar när man möter fara, risk eller hot",
    pts: 0,
  },
];

export default App;
