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
import { useLoaderData } from 'react-router-dom';
import Modal from '@mui/material/Modal';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';



const navigationLinks = [
    {name: 'home', href: '/'},
    {name: 'pricing', href: 'pricing'},
    {name: 'collection', href: `collection?tokens=${null}`},
    {name: 'My profile', href: 'profil'},
]

export const NavBar = ()=>{
    const [activeLink, setActiveLink] = useState()
    const navigation = useNavigate()

    const data = useLoaderData()

    const [openDrawer, setOpenDrawer] = useState(false)

    const toggleDrawer = ()=>{

        setOpenDrawer(!openDrawer)
    }

  return (
      <AppBar sx={{width: '100%', backgroundColor: '#FFFFFF', height: '8%'}} position="static">
        <Container sx={{display: 'flex', justifyContent: 'end'}} maxWidth='xl' >
        <Toolbar>
          
          <Box sx={{display: {xs: 'none', md: 'none', lg: 'block', xl: 'block'}}}>
            {navigationLinks.map((e)=>{
                return (
                    <Link onClick={()=>{
                        setActiveLink(e.name)
                        navigation(e.href)
                    }} sx={{marginRight: 3}}    variant='button' underline='none' href={e.href}>
                        <Typography variant='button'  style={{color: activeLink == e.name ? 'black': '#5D13E7', fontWeight: 600}}>
                            {e.name}
                        </Typography>
                    </Link>
                )
            })}
            {data == null ?
                <Button onClick={()=>{
                    navigation('/login')
                }} variant='contained' style={{color: 'white', backgroundColor: '#5D13E7'}}>Login</Button>
                :
                    <span style={{width: 60, height: 50}}>
                        <Typography fontSize={14} variant='overline' color={'black'}>
                            {`${data.tokens} Tokens`}
                        </Typography>
                    </span>
                }
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
                    <Button href='/' variant='text' style={{width: '100%', height: 40, backgroundColor: 'white', color: '#5D13E7', borderRadius: 0, border: '2px solid #5D13E7', marginTop: 10}}>
                        HOME
                    </Button>
                    <Button href='/pricing' variant='text' style={{width: '100%', height: 40, backgroundColor: 'white', color: '#5D13E7', borderRadius: 0, border: '2px solid #5D13E7', marginTop: 10}}>
                        PRICING
                    </Button>
                    <Button href='/collection'  variant='text' style={{width: '100%', height: 40, backgroundColor: 'white', color: '#5D13E7', borderRadius: 0, border: '2px solid #5D13E7', marginTop: 10}}>
                        COLLECTION
                    </Button>
                    <Button href='/profil'  variant='text' style={{width: '100%', height: 40, backgroundColor: 'white', color: '#5D13E7', borderRadius: 0, border: '2px solid #5D13E7', marginTop: 10}}>
                        MY PROFIL
                    </Button>
                    {data == null ?
                    <Button href='/login' variant='contained' style={{width: '100%', height: 40, backgroundColor: '#5D13E7', color: 'white', borderRadius: 0, marginTop: 50}}>
                        Login
                    </Button>
                    :
                    <span style={{width: '100%', height: 50, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Typography textAlign={'center'} fontSize={14} variant='overline' color={'black'}>
                            {`${data.tokens} Tokens`}
                        </Typography>
                    </span>
                }
                </Box>
            </Drawer>
        </Box>
        </Toolbar>
        </Container>
      </AppBar>
  );
}


export const Header = (props)=>{
    const style = {
        position: 'absolute' ,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      };

    const handleClose = () => setOpen(false);
    const navigation = useNavigate()

    React.useEffect(()=>{
        console.log(props.loading);
    },[])



    return (
        <Box sx={{height: '91vh', width: '100%', backgroundColor: '#F6F6F6', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Modal
                open={props.open1}
                onClose={props.handleClose1}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <RemoveCircleIcon color='#FC2947' style={{width: 80, height: 80, color: '#FC2947'}}/>
                    <Typography id="modal-modal-title" color={'black'} variant="h5" component="h2">
                        You're not logged in
                    </Typography>
                    <Typography color={'black'} id="modal-modal-description" sx={{ mt: 2 }}>
                        Get started ! 
                    </Typography>
                    <Button onClick={()=>{
                        navigation('/login')
                    }} sx={{width: 300, backgroundColor: '#7149C6', marginTop: 2}} variant='contained'>
                        Login
                    </Button>
                </Box>
            </Modal>
            <Modal
                open={props.open2}
                onClose={props.handleClose2}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {props.loading ? <CircularProgress size={50} style={{color: "#4BB543", marginBottom: 15 }}/> : !props.loading && <CheckCircleIcon color='#4BB543' style={{width: 80, height: 80, color: '#4BB543'}}/>}
                    <Typography id="modal-modal-title" color={'black'} variant="h5" component="h2">
                        Wait a moment while generating
                    </Typography>
                    <Typography variant='overline' textAlign={'center'} color={'black'} id="modal-modal-description" sx={{ mt: 2 }}>
                        You will be redirected to collection page when generating is done 
                    </Typography>
                </Box>
            </Modal>
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
                    create something unique with our <b>text to SVG</b> AI Tool
                </Typography>

                <TextField onChange={props.handlePrompt} style={{borderRadius: 20}} sx={{fieldset: {borderColor: '#5D13E7'},width: {xs: '95%', md: '95%', lg:'70%', borderColor: '#5D13E7' , marginTop: 10}}} value={props.prompt} size='small' variant='outlined'/>
                
                <Button onClick={props.handleGenerate}  size='small' variant='contained' sx={{color: 'white', backgroundColor: '#5D13E7',  marginTop: 2}} fullWidth={true}>
                    Generate SVG
                </Button>
            </Box>
        </Box>
    )
}