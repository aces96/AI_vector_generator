import { Box, Typography, Grid } from "@mui/material";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';





export const Pricing = ()=>{

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
        width: {xs: '95%', md: '70%', lg: '50%'}
      }));


    return (
        <Box sx={{backgroundColor: '#F6F6F6', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography marginTop={5} textAlign={'center'} lineHeight={1.3} variant="h4" fontWeight={600} color={'black'}>
                Get the tokens to create stunning illustrations.
            </Typography>
            <Typography  textAlign={'center'} lineHeight={1.3} variant="overline" fontWeight={600} color={'black'}>
                Pick the bundle that's perfect for your need:
            </Typography>

            <Box sx={{width: {xs: '70%', md: '50%', lg: '50%', marginTop: 30}}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12} lg={6}>
                    <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={12} md={12} lg={6}>
                    <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}