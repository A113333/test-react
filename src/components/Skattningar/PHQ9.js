import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Divider } from "@mui/material";
import FormHelperText from '@mui/material/FormHelperText';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import useMediaQuery from "@mui/material/useMediaQuery";




function PHQ9() {
    
    const [error, setError] = React.useState(false);
   
    const [helperText, setHelperText] = React.useState('Välj ett alternativ');

   const questions = [{text: "1. Lite intresse eller glädje av att göra saker", }, 
   {text: "2. Känt dig nedstämd, deprimerad eller upplevt känsla av hopplöshet"},
  {text: "3. Svårigheter att somna eller få en sammanhängande sömn, eller sovit för mycket"}, 
{text: "4. Känt dig trött eller haft för lite energi"},
{text: "5. Dålig aptit eller ätit för mycket "},
{text: "6. Tycker illa om dig själv – eller att du känt dig misslyckad eller att du svikit dig själv eller din familj"},
{text: "7. Svårigheter att koncentrera dig på saker, till exempel att läsa tidningen eller att titta på TV "},
{text: "8. Att du rört dig eller talat så långsamt att andra människor märkt det? Eller motsatsen - att du varit så nervös eller rastlös att du rört dig mer än vanligt"},
{text: "9. Tankar att det skulle vara bättre om du var död eller att du skulle skada dig på något sätt"}] 
const [radioState, setRadioState] = useState(
  new Array(questions.length).fill(false)
);  
const [value, setValue] = React.useState(new Array(questions.length).fill({question: Number, value: Number}));
    //funktion som lägger till item sist i statearray
    const addValue = (newValue) => setValue(state => [...state, newValue])
    const smallScreen = useMediaQuery("(max-width:745px)");

    const handleChange = (event) => {
      console.log("value1")
      console.log(value)
      const eventIndex = parseInt(event.target.name)
      const eventValue = parseInt (event.target.value)
      const updatedValue = value.map((element, index) => {
        if(index === eventIndex) { 
          console.log(index)
          console.log(eventIndex)
          console.log(element)
          element.value = eventValue
          element.question = eventIndex
         // element.value = eventValue 
        } else { element.value = element.value 
          element.question = element.question }
      })
      console.log("updatedValue")
      console.log(updatedValue)
     // console.log(updatedValue[1])
   
      

       //setValue(updatedValue);
    
  
      setError(false);
    };

    const handleSubmit = (event) => {
      console.log(value)
        event.preventDefault();
        const newState = [...value, event.target.value];
        
        setHelperText("Välj minst ett alternativ");
       

    }

    return (
        <div>
           <Typography variant="h3">
           Under de senaste 2 veckorna, hur ofta har du besvärats av något av följande problem?
           </Typography> 
          <Divider/>
           <form onSubmit={handleSubmit}>
    
           <FormControl
                    sx={{ m: 3 }}
                    component="fieldset"
                    error={error}
                    variant="standard"
                  >
            {questions.map((element, index)=>{
                return (
              
                 <RadioGroup
            aria-label={element.text}
        name={index}
      row={!smallScreen}
        onChange={handleChange}
      >

<FormLabel sx={{width: "100%", fontWeight: "bold", color:"primary.main"}}> {element.text}</FormLabel>

        <FormControlLabel required={true} value={1} control={<Radio  />} label="Inte Alls" inputProps={{
    'aria-label': 'Inte Alls',
  }} />
        <FormControlLabel required={true} value={2} control={<Radio />} label="Flera dagar" inputProps={{
    'aria-label': 'Flera dagar',
  }} />
        <FormControlLabel required={true} value={3} control={<Radio />} label="Mer än hälften av dagarna" inputProps={{
    'aria-label': 'Mer än hälften av dagarna',
  }} />
        <FormControlLabel required={true} value={4} control={<Radio />} label="Nästan varje dag " inputProps={{
    'aria-label': 'RNästan varje dag',
  }} />
      </RadioGroup>
            )})}

<RadioGroup
        aria-label="Om du svarat att du haft något av dessa problem, hur svårt har dessa problem gjort det för dig att
        utföra ditt arbete, ta hand om saker hemma, eller att komma överens med andra människor?"
        name={10}
      row={!smallScreen}
        onChange={handleChange}
      >

<FormLabel sx={{width: "100%", fontWeight: "bold", color:"primary.main"}}>Om du svarat att du haft något av dessa problem, hur svårt har dessa problem gjort det för dig att
utföra ditt arbete, ta hand om saker hemma, eller att komma överens med andra människor?</FormLabel>

<FormControlLabel required={true} value="1" control={<Radio />} label="Inte alls" inputProps={{
    'aria-label': 'Inte Alls',
  }} />

<FormControlLabel required={true} value="2" control={<Radio />} label="Svårt" inputProps={{
    'aria-label': 'Svårt',
  }} />

  <FormControlLabel required={true} value="3" control={<Radio />} label="Lite
svårt" inputProps={{
    'aria-label': 'Lite svårt',
  }} />

<FormControlLabel required={true} value="4" control={<Radio />} label="Mycket svårt" inputProps={{
    'aria-label': 'Mycket svårt',
  }} />

<FormControlLabel required={true} value="5" control={<Radio />} label="Extremt svårt" inputProps={{
    'aria-label': 'Extremt svårt ',
  }} />

</RadioGroup>
            </FormControl>
     
 
      <FormHelperText>{helperText}</FormHelperText>
      <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>

</form>
          
<Typography variant="h3">
           





0-4	Ingen, minimal	Inget
5-9	Mild	Utifrån klinisk undersökning bedöma behov av behandling utifrån funktionspåverkan och duration av symtom
10-14	Måttlig	Utifrån klinisk undersökning bedöma behov av behandling utifrån funktionspåverkan och duration av symtom
15-19	Måttligt till svår	Behov av depressionsbehandling (medicin och/eller psykoterapi)
20-27	Svår	Behov av depressionsbehandling (medicin och/eller psykoterapi)
           </Typography> 
        </div>
    )
}

export default PHQ9
