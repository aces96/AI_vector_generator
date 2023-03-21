import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Link } from '@mui/material';
import {Container, TextField} from '@mui/material';


const navigationLinks = [
    {name: 'home', href: ''},
    {name: 'pricing', href: ''},
    {name: 'collection', href: ''},
    {name: 'my profil', href: ''},
]

export const NavBar = ()=>{

    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = ()=>{

        setOpenDrawer(!openDrawer)
    }

  return (
      <AppBar sx={{width: '100%', backgroundColor: '#FFFFFF', height: '8%'}} position="static">
        <Container maxWidth='xl' >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color='#5D13E7'
            aria-label="menu"
            sx={{ mr: 2, marginRight: 'auto' }}
          >
            <MenuIcon />
          </IconButton>
          
          <Box sx={{display: {xs: 'none', md: 'none', lg: 'block', xl: 'block'}}}>
            {navigationLinks.map((e)=>{
                return (
                    <Link sx={{marginRight: 3}}    variant='button' underline='none' href={e.href}>
                        <Typography variant='button'  style={{color: '#5D13E7', fontWeight: 600}}>
                            {e.name}
                        </Typography>
                    </Link>
                )
            })}
            <Button variant='contained' style={{color: 'white', backgroundColor: '#5D13E7'}}>Login</Button>
          </Box>

        <Box sx={{display: {xs: 'block', md: 'block', lg: 'none', xl: 'none'}}}>
            <IconButton
                onClick={toggleDrawer}
                size="large"
                edge="start"
                color='#5D13E7'
                aria-label="menu"
                sx={{ mr: 2, marginRight: 'auto' }}
            >
                <MenuIcon style={{width: 35, height: 35}}/>
            </IconButton>
            <Drawer sx={{display: {xs: 'block', md: 'block', lg: 'none', xl: 'none'}}}  anchor='right' variant='temporary'  onClose={()=>setOpenDrawer(!openDrawer)} open={openDrawer}>
                <Box sx={{width: 250, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Button variant='text' style={{width: '100%', height: 40, backgroundColor: 'white', color: '#5D13E7', borderRadius: 0, border: '2px solid #5D13E7', marginTop: 10}}>
                        HOME
                    </Button>
                    <Button variant='text' style={{width: '100%', height: 40, backgroundColor: 'white', color: '#5D13E7', borderRadius: 0, border: '2px solid #5D13E7', marginTop: 10}}>
                        PRICING
                    </Button>
                    <Button variant='text' style={{width: '100%', height: 40, backgroundColor: 'white', color: '#5D13E7', borderRadius: 0, border: '2px solid #5D13E7', marginTop: 10}}>
                        COLLECTION
                    </Button>
                    <Button variant='text' style={{width: '100%', height: 40, backgroundColor: 'white', color: '#5D13E7', borderRadius: 0, border: '2px solid #5D13E7', marginTop: 10}}>
                        MY PROFIL
                    </Button>
                    <Button variant='contained' style={{width: '100%', height: 40, backgroundColor: '#5D13E7', color: 'white', borderRadius: 0, marginTop: 50}}>
                        Login
                    </Button>
                </Box>
            </Drawer>
        </Box>
        </Toolbar>
        </Container>
      </AppBar>
  );
}


export const Header = ()=>{


    return (
        <Box sx={{height: '91vh', width: '100%', backgroundColor: '#F6F6F6', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{width: {xs: '100%', md: '90%', lg: '45%'}, height: '500px', backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                <Typography  display={'block'} fontWeight={600} textAlign={'center'} color={'black'} variant='h3' component={'div'}>
                    Stunning vector 
                </Typography>

                <Typography display={'block'} fontWeight={600} textAlign={'center'} color={'black'} variant='h3' component={'div'}>
                    illustrations from text 
                </Typography>

                <Typography display={'block'} fontWeight={600} textAlign={'center'} color={'black'} variant='h3' component={'div'}>
                    prompts 
                </Typography>

                <Typography display={'block'}  textAlign={'center'} color={'black'} variant='body1' component={'div'}>
                    create something unique with ours <b>text to SVG</b> AI Tool
                </Typography>

                <TextField style={{borderRadius: 20}} sx={{fieldset: {borderColor: '#5D13E7'},width: {xs: '95%', md: '95%', lg:'70%', borderColor: '#5D13E7' , marginTop: 10}}} size='small' variant='outlined'/>
                
                <Button  size='small' variant='contained' sx={{color: 'white', backgroundColor: '#5D13E7',  marginTop: 2}} fullWidth={true}>
                    Generate SVG
                </Button>
            </Box>
        </Box>
    )
}