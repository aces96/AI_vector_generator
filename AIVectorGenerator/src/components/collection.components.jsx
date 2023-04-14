import { Box, Typography, Grid, Paper, IconButton, Card, CardActionArea, CardContent } from "@mui/material";
import { ReactComponent as Svg }  from '../assets/pic.svg'
import { styled } from '@mui/material/styles';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import DownloadIcon from '@mui/icons-material/Download';
import FileSaver from 'file-saver'
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import {useDispatch} from 'react-redux'
import {addImages} from '../redux/slices/images.slice'
import { useLoaderData } from "react-router-dom";




const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: '100%',
    position: "relative"
  }));



export const SvgDisplayCompo = (props)=>{


    return (
        <Box sx={{width: "100%", height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography marginTop={2} variant="overline" color={'black'} fontWeight='600'>
                    {`"${props.prompt}"`}
                </Typography>
                <Box sx={{width: '100%', height: '100%'}}>
                    <Grid  container spacing={2}>
                            {props.images.map((e)=>{
                            return (
                                <Grid display={'flex'}  justifyContent={'center'} item xs={12} md={6} lg={4}>
                                    <Item>
                                        <img src={e} style={{width: 200, height: 200}}/>
                                        <IconButton onClick={()=>{
                                            FileSaver.saveAs(e, `${e}.svg`);
                                        }} style={{position: 'absolute', bottom: 0, right: 0}}>
                                            <DownloadIcon style={{width: 30, height: 30, color: '#5D13E7'}}/>
                                        </IconButton>
                                    </Item>
                                </Grid>
                            )
                            })}
                        
                        
                        
                    </Grid>
                </Box>
        </Box>
    )
}


export const CollectionSideBar = (props)=>{

    const data = useLoaderData()

    const dispatch = useDispatch()


    return (
        <ScopedCssBaseline enableColorScheme>
        <>
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'scroll', height: '92vh'}}>
            <Typography variant="h5" color={'black'} fontWeight={'800'} marginTop={3}>
                Request History
            </Typography>

            {data !== null ? 
                data.history.map((e)=>{
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
            })

            : <Typography variant="overline" textAlign={'center'} color={'black'}>There no generating history</Typography>}
            


        </Box>
        </>
        </ScopedCssBaseline>

    )
}