import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import Slide from "@mui/material/Slide";
import Container from "@mui/material/Container";
import UndoRoundedIcon from '@mui/icons-material/UndoRounded';
import LinearProgress from '@mui/material/LinearProgress';
import ItsDoneComponent from "./ItsDoneComponent";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function CardSorter({ valueArray: arryOfValues }) {
  //  console.log("arryOfValues ");
    console.log(arryOfValues);
  const history = useHistory();
  const [valueArray, setvalueArray] = useState(arryOfValues);

  const [showTop, setShowTop] = useState(0);
  const [showBottom, setShowBottom] = useState(1);
  const [startValue, setstartValue] = useState(2);

  const [slide, setSlide] = useState(false);
  const [cardsSorted, setcardsSorted] = useState(0);
  const [totalClicks, settotalClicks] = useState(0);
  const [whatIf, setwhatIf] = useState("");

  const [pickedCards, setPickedCards] = useState([]);

  const [isItDone, setisItDone] = useState(false);

  const goToResult = ()=>{
    history.push({
      pathname: "/valueResults",
      state: valueArray,
    });
  }

  const prevPage = () =>{
    history.goBack()
  }


  useEffect(() => {
    setSlide(true);
    countTotalClicks();
  }, []); // Only re-run the effect if count changes
  // useEffect körs på varje render, här hämtas data från JSON server

  const handleChange = () => {
    setSlide((prev) => !prev);
  };

  const countTotalClicks = () => {
    let clicks = 0;
    arryOfValues.map((item, index) => {
      clicks = clicks + index;
    });
    console.log("clicks :" + clicks);
    settotalClicks(clicks);
  };



  const scroll = () => {
    window.scrollTo({ top: 0 });
    console.log("scroll körs");
  };
  // scroll();

  // körs vid sista kortet för att ta bort första kortet ur displayn
  const restartArr = () => {
    console.log("arr slut");
    // en counter som ökar med 1 för varje iteration genom kortleken
    setstartValue(startValue + 1);
    // updaterar så att nästa item visas
    setShowBottom(startValue);

    setShowTop(showTop + 1);
    console.log("showtop / startvalue" + startValue);
  };

  // id kommer vara samma tills den startar om
  const clickTop = ({ index, id }) => {
    //lägger idet på valde kortet sist i arrayn (för backa funktionen)
   setPickedCards(prevArray => [...prevArray, id])


       //lägger till pts
       !isItDone &&  valueArray.map((item, index) => {
        if (id === item.id) {  (item.pts = item.pts + 1) }
      });
// !isItDone för att den inte ska ändra sig på click vid färdigt
      !isItDone && setcardsSorted(cardsSorted + 1);


    if (startValue === valueArray.length) {
      
      // om övningen är klar
    
      console.log("done");
      console.log(valueArray);
      setisItDone(true)
    /*  history.push({
        pathname: "/valueResults",
        state: valueArray,
      }); */
      return
    }

    
    // om vi är på sista kortet
    if (showBottom + 1 === valueArray.length) {
      setstartValue(startValue + 1);
      setShowTop(showTop + 1);
      setShowBottom(startValue);
    } else {
      setShowBottom(showBottom + 1);
    }
  };

  const clickBottom = ({ index, id }) => {
   

setPickedCards(prevArray => [...prevArray, id])

    //om övningen är klart
        //lägger till pts
        !isItDone &&  valueArray.map((item, index) => {
      if (id === item.id) {  (item.pts = item.pts + 1) }
    });

  // !isItDone för att den inte ska ändra sig på click vid färdigt
        !isItDone && setcardsSorted(cardsSorted + 1);
  
      if (startValue === valueArray.length) {
        
        // om övningen är klar
      
        console.log("done");
        console.log(valueArray);
        setisItDone(true)

        return
      }

    index + 1 === valueArray.length ? restartArr() : setShowBottom(index + 1);

  };

  const goBack = () => {

      // om i början av övningen q
      if (cardsSorted === 0) {
        console.log("om i början av övningen q")
        return;

        // todo visa usern att hen inte kan backa mer
      }

    // för att rätt antal klick ska vara kvar
  
    if (cardsSorted>0) {setcardsSorted(cardsSorted - 1);}

    console.log("cardsSorted ");
    console.log(cardsSorted);


    // tar bort pts från kort när man backar
    const id = pickedCards[pickedCards.length-1]
    pickedCards.pop()

    valueArray.map((item, index) => {
      if (id === item.id) {  (item.pts = item.pts - 1) }
    });

  
    // om vi är på sista kortet
    if (startValue === valueArray.length) {
      console.log("sista kortet");
      setisItDone(false)
      // return;
    }

    // om vi är på första kortet i bottenhögen, dvs om vi måste ändra showTop
    if (startValue === showBottom+1) {
      console.log("är på första kortet i top, dvs om vi måste ändra showTop")
      setstartValue(startValue - 1);
      setShowTop(showTop - 1);

      setShowBottom(valueArray.length - 1);

    
      console.log("-------------");
      console.log(startValue);
      console.log(valueArray.length);
    } else {
      setShowBottom(showBottom - 1);
    }

    //ta bort points
  };

  return (
    <Slide direction="left" in={slide}>
      <div>
        <Container>

          <Typography variant="h2"> Sortera din lista </Typography>
          <Typography variant="body1">
            {" "}
            Om du enbart kunde leva efter en av de två värderingarna, vilken
            hade du valt?
          </Typography>

          {valueArray.map(({ title, desc, id }, index) => {
            return (
              <Box
                className={index === showTop ? "show" : "hidden"}
                onClick={() => clickTop({ index: index, id: id })}
                component="span"
                sx={{
                  display: "table",
                  mx: "auto",
                  transform: "scale(1)",
                  margin: "auto",
                  mt: "15px",
                  boxShadow: 5,
                  borderColor: "grey.500",
                  height: "120px",
                  width: "75%",
                  maxWidth: "500px",
                  backgroundColor: "white",
                  padding: "15px",
                  borderRadius: "6px",
             
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ textAlign: "center", paddingBottom: "5px" }}
                >
                  {title}  {id}
                </Typography>
                <Divider></Divider>
                <Typography variant="body1" sx={{ padding: "5px" }}>
                  {desc}
                </Typography>
              </Box>
            );
          })}

          <Divider>
            {" "}
            <Typography variant="h3" margin={"auto"} gutterBottom>
              Eller..
            </Typography>
          </Divider>
          <LinearProgress variant="determinate" value={Math.round((100 / totalClicks) * cardsSorted)
} />

          {valueArray.map(({ title, desc, id }, index) => {
            return (
              <div className={whatIf}>
                <Box
                  className={showBottom === index ? "show" : "hidden"}
                  onClick={() => clickBottom({ index: index, id: id })}
                  component="span"
                  sx={{
                    display: "table",
                    mx: "auto",
                    transform: "scale(1)",
                    margin: "auto",
                    mt: "15px",
                    boxShadow: 2,
                    borderColor: "grey.500",
                    height: "120px",
                    width: "75%",
                    maxWidth: "500px",
                    backgroundColor: "white",
                    padding: "15px",
                    borderRadius: "6px",
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{ textAlign: "center", paddingBottom: "5px" }}
                  >
                    {title} {"id:" +id}
                  </Typography>
                  <Divider></Divider>
                  <Typography variant="body1" sx={{ paddingTop: "5px" }}>
                    {desc}
                  </Typography>
                </Box>
              </div>
            );
          })}

          <Paper
            className="zindex"
            sx={{
              mx: "auto",
              margin: "auto",
              marginTop: "20px",
              mb: "25px",
              boxShadow: 5,
              border: "1px solid",
              borderColor: "grey.500",
              height: "120px",
              width: "75%",
              maxWidth: "500px",
              position: "relative",
              top: "-134px",
              left: "5px",
              borderRadius: "6px",
            }}
          ></Paper>

          <Paper
            className="zindex"
            sx={{
              mx: "auto",
              margin: "auto",
              marginTop: "20px",
              mb: "25px",
              boxShadow: 3,
              border: "1px solid",
              borderColor: "grey.500",
              height: "120px",
              width: "75%",
              maxWidth: "500px",
              position: "relative",
              top: "-282px",
              left: "3px",
              borderRadius: "6px",
            }}
          ></Paper>

        <Button variant="outlined"  startIcon={<UndoRoundedIcon />}  sx={{
            position: "relative",
           
          }}onClick={() => goBack()}>
          Ångra val
        </Button>

        <Button variant="contained" color='primary' aria-label="Nästa" startIcon={< ArrowBackIosIcon/>} onClick={prevPage}
        sx={{ ml:"15px", }}>
          Tillbaka 
        </Button>


      {isItDone &&  (

<Button variant="contained"  color='primary' aria-label="Backa" endIcon={<ArrowForwardIosIcon />} onClick={goToResult}
sx={{float:"right", mr:"15px", mb:"15px", }}>
  Visa Resultat 
</Button>

      )}

      {!isItDone && (
        <Button variant="contained"  disabled ="true" color='success' aria-label="Backa" endIcon={<ArrowForwardIosIcon />} 
sx={{float:"right", mr:"15px", mb:"15px", }}>
   Sortera {totalClicks - cardsSorted} kort till
</Button>
      )}
        </Container>
       
  {/*      {isItDone && 
        <ItsDoneComponent title= "Bra jobbat!" 
        text="Du är nu klar med värderingskompassen, är du redo att se ditt resultat?"
        option1="Nej, jag ångrar mitt sista val"
        option2="Ja!"
        onYes={goToResult}
        />
      }
      */} 
      </div>
    </Slide>
  );
}

export default CardSorter;
