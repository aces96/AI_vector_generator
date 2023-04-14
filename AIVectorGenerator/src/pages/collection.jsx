import { Grid, Box, IconButton, Button, Card, CardActionArea, CardContent, Typography, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { SvgDisplayCompo, CollectionSideBar } from "../components/collection.components";
import { Scrollbar } from 'react-scrollbars-custom';
import { NotLoggedIn } from "../components/error.components";
import { useSearchParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux'
import {addImages} from '../redux/slices/images.slice'
import { ReactComponent as NothingSvg }  from '../assets/nothing.svg'
import '@fontsource/roboto/700.css';





import '../index.css'

export const Collection = ()=>{
    const [logged, setLogged] = useState(true)
    const imgs = useSelector((state)=>state.images.value)
    const [history, setHistory] = useState([])
    const [prompt, setPrompt] = useState("")
    const [searchParms, setSearchParams] = useSearchParams()
    const data = useLoaderData()
    const [openDrawer, setOpenDrawer] = useState(false)
    const navigation = useNavigate()
    const dispatch = useDispatch()

    const toggleDrawer = ()=>{

        setOpenDrawer(!openDrawer)
    }

    useEffect(()=>{
        console.log(prompt);
        setPrompt(data.prompt)
        if(data.data == null){
            setLogged(false)

        }else if(data.data !== null && prompt == null){
            setLogged(true)


        }else if(data.data !== null && prompt !== null){
            setLogged(true)
        }
    },[])


    


    return (
        <Box sx={{width: '100%', height: '92%', display: 'flex', flexDirection: 'row'}}>
                {!logged ? 
                    <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
                        <NotLoggedIn/>
                    </Box>

                : logged &&
                <Box sx={{width: '100%', height: '100%', display: 'flex', flexDirection: 'row'}}>
                    <Box className='sidebar'  sx={{width: {xs: '0%', md: '30%', lg: '20%'}, height: '92vh', display: {xs: 'none', md: 'block', lg: 'block'}}}>
                        <CollectionSideBar history={data !== null ? data.history : []} />
                    </Box>

                    <Box className='sidebar'  sx={{width: {xs: '0%', md: '30%', lg: '70%'}, height: '100%', display: {xs: 'block', md: 'none', lg: 'none'}}}>
                    <IconButton
                        onClick={toggleDrawer}
                        size="large"
                        edge="start"
                        color='#5D13E7'
                        aria-label="menu"
                        sx={{ mr: 2, marginRight: 'auto' , position: 'absolute', zIndex: 10}}
                    >
                        <MenuIcon style={{width: 35, height: 35}}/>
                    </IconButton>
                    <Drawer sx={{display: {xs: 'block', md: 'none', lg: 'none', xl: 'none'}}}  anchor='left' variant='temporary'  onClose={()=>setOpenDrawer(!openDrawer)} open={openDrawer}>
                        <Box sx={{width: 250, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            {data.history.map((e)=>{
                                return (
                                <Card sx={{width: '80%', height: 150, marginBottom: 3}}>
                                <CardContent>
                                <CardActionArea onClick={()=>{
                                    let imgsUrls = [];
                                    e.images.map((i)=>{
                                        const url = URL.createObjectURL(new Blob([i], { type: 'image/svg+xml' }))
                                        imgsUrls.push(url)
                                        console.log('imagessss',imgsUrls);
                                    })
                                    setPrompt(e.prompt)
                                    dispatch(addImages(imgsUrls))
                                }}>
                                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: 120}}>
                                        <Typography variant="h6" fontSize={18} fontWeight={'600'} color={'black'} textAlign={'center'}>
                                            {e.prompt}
                                        </Typography>
                                        <Typography>
                                            27/03/2023 11:01pm
                                        </Typography>
                                    </Box>
                                </CardActionArea>
                                </CardContent>
                                </Card>
                                )
                            })}
                    </Box>
                </Drawer>
                    </Box>


                {imgs.length == 0 ? 
                
                    <Box sx={{width: '100%', height: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Paper sx={{width: {xs: '100%', md: '60%', lg: '50%'}, height: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                            <Typography marginBottom={2} fontWeight={700} variant="h6" color={'black'}>
                                there not to display, please start generating
                            </Typography>
                            <NothingSvg style={{width: 150, height: 150, marginBottom: 30}}/>
                            <Button onClick={()=>{
                                navigation('/')
                            }} style={{backgroundColor: "#5D13E7", width: '65%'}} variant="contained"  >
                                Get started
                            </Button>
                        </Paper>
                    </Box>
            
            
                : imgs.length > 0 &&
                    <Box sx={{width: {xs: '100%', md: '70%', lg: '70%'}, height: '100%'}}>
                        <SvgDisplayCompo prompt={prompt}  images={imgs} />
                    </Box>
                    }
                </Box>
                }
                
        </Box>
    )
}