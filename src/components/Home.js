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
import FavoriteIcon from '@mui/icons-material/Favorite';

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
          <Tab icon={<FavoriteIcon />} iconPosition="start"  label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Cards
                text={
                  "Få hjälp att hitta din kurs, hur vill du vara som människa? Vad är viktigt för dig på riktigt?"
                }
                rubrik={"Värderingskompassen, Steg 1"}
                linkTo={"/values1"}
                stateColor={"success"}
              />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      </Box>

  
  
  

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
