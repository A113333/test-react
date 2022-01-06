import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import useFetch from "../useFetch";
import ExerciseAppbar from "./ExerciseAppbar";
import ValueLister from "./ValueLister";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";

// destruct props .text och .values samma som  (props) const = props.value
//export default function ValueList({ text, values })
export default function ValueList({ text }) {
  // deconstruct return obj {data:values} döper om data till values

  const values = [
    {
      id: 1,
      title: "Accepterande",
      desc: "Vara öppen, tillåtande och tillfreds med mig själv, andra, livet och mina känslor.",
      pts: 0,
    },
    {
      id: 2,
      title: "Äventyrlig",
      desc: "Sträva efter och skapa nya, spännande erfarenheter.",
      pts: 0,
    },
    {
      id: 3,
      title: "Självsäker",
      desc: "Lugnt, rättvist och respektfullt stå upp för mina rättigheter och våga be om det jag vill ha.",
      pts: 0,
    },
    {
      id: 4,
      title: "Autentisk",
      desc: "Vara genuin, äkta och sann mot mig själv.",
      pts: 0,
    },
    {
      id: 5,
      title: "Omtänksam",
      desc: "Aktivt och medvetet ta hand om mig själv, andra och miljön.",
      pts: 0,
    },
    {
      id: 6,
      title: "Medkänsla och självmedkänsla ",
      desc: "Vara vänlig mot mig själv och andra när livet är svårt.",
      pts: 0,
    },
    {
      id: 7,
      title: "Samarbetsvillig",
      desc: "Vara villig att assistera, hjälpa och arbeta med andra.",
      pts: 0,
    },
    {
      id: 8,
      title: "Mod",
      desc: "Våga stå kvar när jag möter fara, risk eller hot.",
      pts: 0,
    },
    {
      id: 9,
      title: "Kreativ",
      desc: "Vara fantasifull och uppfinningsrik.",
      pts: 0,
    },
    {
      id: 10,
      title: "Nyfiken",
      desc: "Ha en öppen, villig och intresserad inställning när det handlar om att utforska och upptäcka.",
      pts: 0,
    },
    {
      id: 11,
      title: "Uppmuntrande",
      desc: "Stödja, inspirera och belöna beteenden som jag ser som positiva.",
      pts: 0,
    },
    {
      id: 12,
      title: "Uttrycksfull",
      desc: "Förmedla mina tankar och känslor genom det jag säger och gör.",
      pts: 0,
    },
    {
      id: 13,
      title: "Fokuserad",
      desc: "Fokusera på och engagera mig i det jag gör.",
      pts: 0,
    },
    {
      id: 14,
      title: "Rättvis",
      desc: "Agera rätt och rättvist mot mig själv och andra.",
      pts: 0,
    },
    {
      id: 15,
      title: "Flexibel",
      desc: "Vara villig till och ha förmågan att anpassa mig till föränderliga omständigheter.",
      pts: 0,
    },
    {
      id: 16,
      title: "Vänlig",
      desc: "Vara varm, öppen, omsorgsfull och kärleksfull mot andra.",
      pts: 0,
    },
    {
      id: 17,
      title: "Förlåtande",
      desc: "Kunna släppa agg och bitterhet mot andra och mig själv.",
      pts: 0,
    },
    {
      id: 18,
      title: "Tacksam",
      desc: "Kunna uppskatta och se det jag redan har.",
      pts: 0,
    },
    {
      id: 19,
      title: "Hjälpsam",
      desc: "Ge till, hjälpa och assistera andra människor.",
      pts: 0,
    },
    {
      id: 20,
      title: "Ärlig",
      desc: "Vara ärlig, sanningsenlig och uppriktig mot mig själv och andra.",
      pts: 0,
    },
    {
      id: 21,
      title: "Självständig",
      desc: "Själv välja vad jag gör och hur jag lever mitt liv.",
      pts: 0,
    },
    {
      id: 22,
      title: "Arbetsam",
      desc: "Arbeta hårt och vara flitig.",
      pts: 0,
    },
    {
      id: 23,
      title: "Snäll",
      desc: "Visa hänsyn, vara hjälpsam och bry sig om mig själv och andra.",
      pts: 0,
    },
    {
      id: 24,
      title: "Kärleksfull",
      desc: "Vara kärleksfull och tillgiven, visa att jag verkligen bry mig om mig själv och andra.",
      pts: 0,
    },
    {
      id: 25,
      title: "Närvarande",
      desc: "Vara fullt närvarande och engagerad i vad jag än gör.",
      pts: 0,
    },
    {
      id: 26,
      title: "Öppen",
      desc: "Våga visa vem jag är, vad jag tänker och känner.",
      pts: 0,
    },
    {
      id: 27,
      title: "Välordnad",
      desc: "Vara ordentlig och organiserad.",
      pts: 0,
    },
    {
      id: 28,
      title: "Ihärdig",
      desc: "Vara villig att fortsätta även när problem eller svårigheter uppstår.",
      pts: 0,
    },
    {
      id: 29,
      title: "Lekfull",
      desc: "Ha roligt, leva med ett sinne för humor och kunna vara lättsam.",
      pts: 0,
    },
    {
      id: 30,
      title: "Skyddande",
      desc: "Se till att jag själv och andra är säkra och trygga.",
      pts: 0,
    },
    {
      id: 31,
      title: "Respektfull",
      desc: "Behandla mig själv och andra med omsorg och hänsyn.",
      pts: 0,
    },
    {
      id: 32,
      title: "Ansvarsfull",
      desc: "Vara trovärdig, pålitlig och ta ansvar för mina handlingar.",
      pts: 0,
    },
    {
      id: 33,
      title: "Skicklig",
      desc: "Göra saker på ett bra sätt, använda min kunskap, erfarenhet och träning optimalt.",
      pts: 0,
    },
    {
      id: 34,
      title: "Stödjande",
      desc: "Vara hjälpsam, uppmuntrande och tillgänglig för mig själv och andra.",
      pts: 0,
    },
    {
      id: 35,
      title: "Pålitlig",
      desc: "Vara lojal, ärlig, trogen, uppriktig och ansvarsfull.",
      pts: 0,
    },
    {
      id: 36,
      title: "Förtroende",
      desc: "Tro på ärlighet, uppriktighet och förmågan hos andra.",
      pts: 0,
    },
  ];

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    setSlide(true);
  }, []); // Only re-run the effect if count changes
  // useEffect körs på varje render, här hämtas data från JSON server

  return (
    <div>
      <ExerciseAppbar header={"Värderinskompassen"} step={"2 av 3"} />

      <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
        <Container sx={{ backgroundColor: "white" }}>
          <Typography variant="h1"> Välj dina värderingsord </Typography>

          <Typography variant="body1">
            {text}
            {/* finns x antal ord läs igenom alla innan du går vidare 
                när du är klar: säker att du vill gå vidare (har du läst alla?) */}
            Nedan finner du en lista med 36 värderingsord med en kort
            förklaring. Läs igenom listan och välj de 10 värderingar som känns
            viktigast för dig. Har du svårt att välja? Testa att ställa dig
            frågan: med vilka ord hade jag velat att den som kännde mig bäst
            hade beskrivigt mig med på min egna begravning?
          </Typography>
          <br></br>
          {/* om values finns så körs ValuesComponet  */}

          {values && <ValueLister values={values} />}
        </Container>
      </Slide>
    </div>
  );
}