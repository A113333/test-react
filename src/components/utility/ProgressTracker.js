import React, { useState, useEffect } from 'react';
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";






function ProgressTracker({nrsToPick, nrsPicked, isItDone}) {
    const [animate, setAnimate] = useState(false);

    const handleAnimate = () => setAnimate(!animate);

    useEffect(() => {
        handleAnimate();
    }, [nrsPicked]);

    // rest of component
  {/*   className={ animate ? className + " " + "shake-horizontal" :className }  
 className={  className + " " + "bounce-in-top"  }
*/} 

    const className = isItDone? "doneProgress" : "notDoneProgress"
    return (
        <div>
             <LinearProgress
          variant="determinate"
          value={(100 / nrsToPick) * nrsPicked}
          color="secondary"
          sx={{
            position: "fixed",
            top: "55px",
            left: "0px",
            width: "100%",
            padding: "0px",
            zIndex: 100,
            height: 15,
            // borderRadius: 5,
          }}
        />
        <Box 
     
     className={ animate ? className + " " + "shake-horizontal" :className }  
           sx={{ 
            
            position: "fixed",
            top: "36px",
            maxWidth: "854px",
            left: "50%",
            transform: "translate(-50%, 0)",
            zIndex: "1000",
           minWidth: "52px",
           textAlign: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: "1rem",
            padding: "5px",
            pb: "13px",
            pt: "13px",
            border: "2px solid white",
            borderRadius: '50%',
            "&:hover": {
                backgroundColor: "primary.light",
              },
           
             }}
            > 
            
            {nrsPicked} / {nrsToPick } 
           
            </Box>
        </div>
    )
}

export default ProgressTracker
