import { Box, Typography } from "@mui/material";
import ValidPng from '../assets/valid.png'




export const HowItWorksCompo = ()=>{


    return (
        <Box sx={{width: {xs: '100%', md: '80%', lg: '60%'}, marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography textAlign={'center'} variant="h4" color={'black'} fontWeight={'700'}>
                How it works?
            </Typography>

            <Typography textAlign={'center'} variant="body1" color={'black'} fontWeight={'500'}>
                <b>One Token</b> is equivalent to <b>one illustration generation request.</b> in each request, <b>3 variants</b> of the same illustration are produced so as to be able to choose the best one.
            </Typography>
        </Box>
    )
}


export const LicenseCompo = ()=>{


    return (
        <Box sx={{width: {xs: '100%', md: '80%', lg: '60%'}, marginTop: 10, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography textAlign={'center'} variant="h4" color={'black'} fontWeight={'700'}>
                License
            </Typography>
            <Box sx={{height: 30, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={ValidPng} style={{width: 20, height: 20, marginRight: 7}}/>
                <Typography color={'black'} variant="body2">
                    All illustrations are <b>free to download</b> and use
                </Typography>
            </Box>

            <Box sx={{height: 30, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={ValidPng} style={{width: 20, height: 20, marginRight: 7}}/>
                <Typography color={'black'} variant="body2">
                    <b>Commercial</b> and non-commercial purposes
                </Typography>
            </Box>

            <Box sx={{height: 30, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={ValidPng} style={{width: 20, height: 20, marginRight: 7}}/>
                <Typography color={'black'} variant="body2">
                <b>No permission</b> needed (although attribution is appreciated).
                </Typography>
            </Box>

            <Box sx={{height: 30, width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <img src={ValidPng} style={{width: 20, height: 20, marginRight: 7}}/>
                <Typography color={'black'} variant="body2">
                Your illustrations are <b>unique</b> and cannot be accessed by other users.
                </Typography>
            </Box>
        </Box>
    )
}