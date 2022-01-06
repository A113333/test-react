import React from "react";
import Cards from "./Cards";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Navbar from "./navbar";
import useFetch from "../useFetch";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ExploreIcon from '@mui/icons-material/Explore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import useMediaQuery from "@mui/material/useMediaQuery";
import MapIcon from '@mui/icons-material/Map';
import BookIcon from '@mui/icons-material/Book';

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
  const smallScreen = useMediaQuery('(max-width:322px)');

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function Home() {
  const {
    data: user,
    isPending,
    error,
  } = useFetch("http://localhost:8000/user");

  console.log(user);
  //  { ...user.values && user.values  }


    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <div className="">
      <Navbar />



      <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab icon={<ExploreIcon />}  label="Värderingar" {...a11yProps(0)} />
          <Tab icon={<MapIcon/>}label="Mål" {...a11yProps(1)} />
          <Tab icon={<BookIcon/>} label="Loggbok" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
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
                rubrik={"Övning 1: Värdekompassen"}
                linkTo={"/values1"}
                isActive={true}
                img={"/images/compass.jpg"}
               
              />
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Fortsätt fördjupa dig i värderingar, nu utifrån livsområden. Lägger du din tid och energi på rätt saker?"
                }
                rubrik={"Dina livsområden"}
           
                img={"/images/map.jpg"}
              />
            </Grid>{" "}
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Här presenteras några verktyg för att hjälpa  dig att leva mer efter dina värderingar"
                }
                rubrik={"Lev som du önskar"}
                img={"/images/water.jpg"}
                
           
                
              />
            </Grid>
          </Grid>


      </TabPanel>
      <TabPanel value={value} index={1}>
 


      <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Vi jobbar hårt för att få detta färdigt"
                }
                rubrik={"Inte färdigt"}
                img={"/images/darkSky.jpg"}
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
            <Grid item xs={12} sm={4} md={4}>
              <Cards
                text={
                  "Kommer snart"
                }
                rubrik={"Vi har inte kommit så här långt ännu!"}
                linkTo={"/values1"}
                img={"/images/darkSky.jpg"}
                
               
              />
            </Grid>
      
          </Grid>



      </TabPanel>
      </Box>

  
  
  

      <div className="padderTop">
        <Container>
       
        </Container>
      </div>
    </div>
  );
}
