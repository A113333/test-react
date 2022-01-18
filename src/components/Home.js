import React from "react";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import useFetch from "../useFetch";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ExploreIcon from "@mui/icons-material/Explore";
import MapIcon from "@mui/icons-material/Map";
import BookIcon from "@mui/icons-material/Book";
import compassImg from "./img/compass.jpg";
import commingSoonImg from "./img/darkSky.jpg";
import roadImg from "./img/road.jpg";
import waterImg from "./img/water.jpg";
import lakeImg from "./img/lake.jpg";
import { Divider, Stack } from "@mui/material";
import Paper from "@mui/material/Paper";
import Footer from "./Footer";

// Grid är 12 columer
/*
xs, extra-small: 0px
sm, small: 600px
md, medium: 900px
lg, large: 1200px
xl, extra-large: 1536px
*/

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const { data: user } = useFetch("http://localhost:8000/user");

  console.log(user);
  //  { ...user.values && user.values  }

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="">
      <Navbar />

      <Box sx={{ width: "100%", padding:"0px", margin:"0px" }}>
        <Box
          sx={{
            bordeRadius: "6px 6px 6px 6px",
            backgroundColor: "white",
            borderBottom: 1,
            borderColor: "divider",
            mb: "35px",
            
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="Navigerings tabbar"
            centered
            textColor="primary"
            sx={{    }}
          >
            <Tab sx={{ fontSize: "0.7rem", padding: 0, margin: 0 }}  icon={<ExploreIcon />} label="Värderingar" {...a11yProps(0)} />
            <Tab sx={{ fontSize: "0.7rem", padding: 0, margin: 0 }} icon={<MapIcon  />} label="Mål" {...a11yProps(1)} />
            <Tab  sx={{ fontSize: "0.7rem", padding: 0, margin: 0  }} icon={<BookIcon />} label="Loggbok" {...a11yProps(2)} />
          </Tabs>
        </Box>

        <TabPanel value={value} index={0} sx={{bgColor: "primary.light"}}>

        <Grid item xs={12} spacing={0} 
            sx={{  paddingLeft: "0px", pr: "0px", }}>    
            <Stack direction="row"  justifyContent="center" alignItems="center" spacing={2}> 

            

              <Typography
                variant="h1"
                align="center"
                fontSize={{
                  md: "2rem",
                  xs: "1.2rem",
                }} >
                              Värderingskompassen 
              </Typography>
              </Stack>
              <Typography
              variant="subtitle1"
                align="center"
                fontSize={{
                  md: "1rem",
                  xs: "0.75rem",
                }}>
                              - Hitta din riktning i livet 
              </Typography>
            </Grid>
          <Container sx={{ pb:"35px", pt:"35px", border: "1px solid transpernt", borderRadius:"px"}}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}>

            
    
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "En djupdykning i dina värderingar. Utforska hur du vill vara som människa och vad viktigt för dig."
                }
                rubrik={"Dina värderingar"}
                linkTo={"/varderingar-information"}
                isActive={true}
                img={compassImg}
                backgroundcolor={"valueCompass.main"}
                nr={1}
              />
            </Grid>
      
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Fortsätt fördjupa dig i värderingar, nu utifrån livsområden. Lägger du din tid och energi på rätt saker?"
                }
                rubrik={"Dina livsområden"}
                img={roadImg}
                backgroundcolor={"lifeAreas.main"}
                nr={2}
                linkTo={"/livsomraden-information"}
              />
            </Grid>{" "}

            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Här presenteras några verktyg för att hjälpa  dig att leva mer efter dina värderingar."
                }
                rubrik={"Lev som du önskar"}
                img={waterImg}
                backgroundcolor={"liveByValues.main"}
                nr={3}
              />
            </Grid>
          
          </Grid>
        

          </Container>
   

         

        </TabPanel>
        <TabPanel value={value} index={1}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h1"
                align="center"
                fontSize={{
                  md: "2rem",
                  xs: "1.5rem",
                }}
              >
                Målkartan
              </Typography>
            </Grid>

            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={"Vi jobbar hårt för att få detta färdigt"}
                rubrik={"Inte färdigt"}
                img={commingSoonImg}
              />
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h1"
                align="center"
                fontSize={{
                  md: "2rem",
                  xs: "1.5rem",
                }}
              >
                Din Loggbok
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={"Kommer snart"}
                rubrik={"Vi har inte kommit så här långt ännu!"}
                linkTo={"/values1"}
                img={commingSoonImg}
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Box>
<Footer/>
    </div>
  );
}
