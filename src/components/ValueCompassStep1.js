import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Slide from "@mui/material/Slide";
import ExerciseAppbar from "./ExerciseAppbar";
import Container from "@mui/material/Container";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Paper from '@mui/material/Paper';
import { Divider } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ExploreIcon from '@mui/icons-material/Explore';
import Box from "@mui/material/Box";


function ValueCompassStep1() {
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    setSlide(true);
  }, []);

  const history = useHistory();
  const nextPage = () => {
    history.push({
      pathname: "/valueList",
    });
  };

  const prevPage = () =>{
    history.goBack()
  }

  const smallScreen = useMediaQuery('(max-width:445px)');
console.log(smallScreen)

  return (
    <Slide direction="left" in={slide} mountOnEnter unmountOnExit>
      <div>
        <ExerciseAppbar header={"VärdeKompassen"} step={"1 av 3"} />
        <Container maxWidth="md">

        <Typography variant="h2" gutterBottom align="center" sx={{mt: "30px", }}>
        Vad är en värdering?
          </Typography>
          <Divider sx={{width: "75%", mx: "auto"}}></Divider>
 

          <Typography variant="body1" sx={{fontWeight: "bold", lineHeight: 1.7, mt:"25px" ,}} gutterBottom>
          Värderingar är vårt hjärtas innersta önskan och är beskriver hur du vill agerade i världen. 
          Värderingar handlar inte om vad du vill uppnå, ha eller prestera, utan representerar kvaliteter 
          som du önskade att du kunde införliva i dina handlingar. Vad vill jag att mitt liv ska handla om? Hur vill jag behandla mig 
          själv och andra människor? Vilken typ av människa vill jag vara?
          <br></br> </Typography>

          <Paper elevation={3}     
           sx={{
          display: 'flex',
          flexWrap: 'wrap',
          m: "25px",
          mt: "10px",
          mx: "auto",
          p: "15px",
          width: smallScreen ? "90%" : "45%",
          float: smallScreen ? null : "right",
          bgcolor: 'primary.main',
          color: "white",    
      }}>
            <Typography sx={{fontWeight: "bold",}}>Att leva efter sina värderingar kan: </Typography>
            <Typography variant="body1" > minska
            nedstämdhet, skapa mening och motivation, hjälpa dig ta dig igenom
            svåra situationer och underlättar svåra val.
            nedstämdhet, skapa mening och motivation, hjälpa dig ta dig igenom
            svåra situationer och underlättar svåra val.
          
           
            </Typography> 
          
          </Paper>

          <Typography variant="body1" sx={{ lineHeight: 1.7, width: smallScreen ? "100%" : "50%",
          }} gutterBottom>
          Man kan jämföra värderingar med en kompass; du kan aldrig komma fram till “norr”, men du kan 
          ständigt vandra norrut. Värderingar ger dig en riktigt att sträva mot; en kompasskurs i livet.
          <br></br></Typography>
          <Typography variant="body1" sx={{lineHeight: 1.7, width: smallScreen ? "100%" : "50%",
          }} gutterBottom>
          Till skillnad från ett mål går det aldrig att uppnå eller bli klar med en värdering. 
          Som exempel kan man ta målet att gifta sig, jämfört med värderingen att vara en öppen, omtänksam 
          och kärleksfull partner.
         </Typography>


        

          <Typography variant="h3" sx={{mt:"15px"}} gutterBottom>
            Hur fungerar Värdekompassen?
          </Typography>
          <Divider></Divider>   

    <Typography variant="body1" sx={{lineHeight: 1.7, mt:"10px"}} gutterBottom>
    Värdekompassen är uppbyggd i tre steg.
        I det första steget kommer du välja ut tio värderingsord ur vår värderingslista.
        I det andra steget ska du välja mellan dina värderingar för att hitta de fem värderingar som är absolut viktigast för dig.
        När du har gjort detta kommer du få se ditt resultat och få möjlighet att läsa mer om dina valda värderingar.
        Du kommer säkert märka när du läser vår värderingslista att olika värderingarkan ha olika vikt 
        i olika delar av livet; vissa värderingar är viktiga på arbetet, andra i relationer och återigen andra på fritiden. 
        Detta ä något vi kommer jobba vidare med i nästa etapp.
        </Typography>

          <List sx={{ 
          display: 'flex',
          flexWrap: 'wrap',
          mt: smallScreen ? "50px" : "110px",
          mb: smallScreen ? "50px" : "110px",
        
          width: smallScreen ? "90%" : "45%",
          float: smallScreen ? null : "left",
          
      }}>
      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.main", color: "white", fontWeight: "bold"}} >
            1
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Välj värderingar" secondary="Välj ut de 10 värderingsord som känns viktigast 
        för dig ur vår värderingslista." />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.main", color: "white", fontWeight: "bold"}} >
           2
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Rangordna din värderingar" secondary="Ställ ord mot ord för att rangordna din lista." />
      </ListItem>

      <ListItem>
        <ListItemAvatar>
          <Avatar sx={{ bgcolor: "primary.main", color: "white", fontWeight: "bold"}}>
          3
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Se ditt resultat" secondary="Titta nog igenom din topp fem lista och 
        fundera över dina värderingar" />
      </ListItem>

    </List>
    <Box sx={{ width: "49%", float: "right", width: smallScreen ? "90%" : "45%",
          float: smallScreen ? null : "left",   padding: "15px",
          mt: "25px", mb: "25px",}}>
    <Typography variant="h3" sx={{}} gutterBottom >
            Ett sista tips
          </Typography>
          <Divider></Divider>
    <Typography variant="body1" sx={{lineHeight: 1.7, mt:"10px",  }} gutterBottom>
       

Tänka på att dina värderingar ska vara dina egna. Värderingar tappar sitt värde om dom är baserad på 
vad hur du tror att andra vill att du ska vara. Det finns inget rätt och fel, inga bra eller dåliga värden. 
Dina värderingar är dina, för att dom ska kunna fungera vägvisande i livet och för att dem ska bli meningsfulla för 
dig är det viktigt att dom är Dina. Du behöver aldrig kunna förklara varför en värdering är viktig för dig; precis som
 att du aldrig behöver ha ett argument för varför blått är din favoritfärg, det är ditt tycke och din smak.

         
          </Typography>
          </Box>
       

          <Button variant="contained" color='primary' aria-label="Nästa" startIcon={< ArrowBackIosIcon/>} onClick={prevPage}
        sx={{ ml:"15px", mb:"15px", }}>
          Tillbaka 
        </Button>

        <Button variant="contained" color='primary' aria-label="Backa" endIcon={<ArrowForwardIosIcon />} onClick={nextPage}
        sx={{float:"right", mr:"15px", mb:"15px", }}>
          Nästa 
        </Button>


        </Container>

    



      </div>
    </Slide>
  );
}

export default ValueCompassStep1;
