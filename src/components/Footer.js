import React from 'react'
import { Box, Typography, Button,  } from '@mui/material'
import Divider from '@mui/material/Divider'

function Footer() {
    return (
        <Box sx={{
            mt: "55px", 
            height: "55px",  
           
            marginTop: "15%",
            width: "100%",
            maxWidth: "852px", }}>
        <Divider/>
        <Button variant="outlined"  sx={{float: "right", mt:"25px"}}> Kontakta oss  </Button>  
        <Typography sx={{pt:"30px", width:"50%"}}> Bli Fri vill hjälpa dig hitta rätt genom livet. </Typography>
       
        </Box>



    )
}

export default Footer
