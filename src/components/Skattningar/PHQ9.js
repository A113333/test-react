import React from 'react'
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
    const [value, setValue] = React.useState([]);
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Välj ett alternativ');
    
    //funktion som lägger till item sist i statearray
    const addValue = (newValue) => setValue(state => [...state, newValue])
    const smallScreen = useMediaQuery("(max-width:745px)");

    const handleChange = (event) => {
      addValue(event.target.value);
      setError(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newState = [...value, event.target.value];
        setValue(newState);
        setHelperText("Välj minst ett alternativ");
        setError(true);

    }

    return (
        <div>
           <Typography variant="h3">
           Under de senaste 2 veckorna, hur ofta har du besvärats av något av följande problem?
           </Typography> 
          
           <form onSubmit={handleSubmit}>
      <FormControl
        sx={{ m: 3 }}
        component="fieldset"
        error={error}
        variant="standard"
      >
           <FormLabel >1. Lite intresse eller glädje av att göra saker </FormLabel>
     
      <RadioGroup
        aria-label="1. Lite intresse eller glädje av att göra saker "
        name="1"
      row={!smallScreen}
        onChange={handleChange}
      >
        <FormControlLabel required={true} value="1" control={<Radio />} label="Inte Alls" inputProps={{
    'aria-label': 'Inte Alls',
  }} />
        <FormControlLabel required={true} value="2" control={<Radio />} label="Flera dagar" inputProps={{
    'aria-label': 'Flera dagar',
  }} />
        <FormControlLabel required={true} value="3" control={<Radio />} label="Mer än hälften av dagarna" inputProps={{
    'aria-label': 'Mer än hälften av dagarna',
  }} />
        <FormControlLabel required={true} value="4" control={<Radio />} label="Nästan varje dag " inputProps={{
    'aria-label': 'RNästan varje dag',
  }} />
      </RadioGroup>
      <FormHelperText>{helperText}</FormHelperText>
      <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Check Answer
        </Button>
</FormControl>
</form>
          
<Typography variant="h3">
           2. Känt dig nedstämd, deprimerad eller upplevt känsla av hopplöshet
           3. Svårigheter att somna eller få en sammanhängande sömn, eller sovit för mycket 
           4. Känt dig trött eller haft för lite energi 
           5. Dålig aptit eller ätit för mycket 
           6. Tycker illa om dig själv – eller att du känt dig misslyckad eller att du svikit dig själv eller din familj 
           7. Svårigheter att koncentrera dig på saker, till exempel att läsa tidningen eller att titta på TV 
           8. Att du rört dig eller talat så långsamt att andra människor märkt det? Eller motsatsen – att du 
           varit så nervös eller rastlös att du rört dig mer än vanligt 
           9. Tankar att det skulle vara bättre om du var död eller att du skulle skada dig på något sätt 

           Om du svarat att du haft något av dessa problem, hur svårt har dessa problem gjort det för dig att
utföra ditt arbete, ta hand om saker hemma, eller att komma överens med andra människor?
Inte alls
svårt

Lite
svårt

Mycket
svårt

Extremt
svårt 

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
