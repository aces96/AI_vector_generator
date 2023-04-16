import { useState, useEffect } from "react";
import { Box, Button, Container, Typography, TextField, IconButton, Modal } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import LogoutIcon from '@mui/icons-material/Logout';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CircularProgress from '@mui/material/CircularProgress';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import { addCodes } from "../redux/slices/promocode.slice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export const Dashboard = ()=>{
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
    const [input, setInput] = useState('')
    const [open, setOpen] = useState(false)
    const [modalContent, setModalContent] = useState('')
    const codes = useSelector((state)=>state.promocode.value)
    const dispatch = useDispatch()
    const [codeNum, setCodeNum] = useState('')

    const handleClose= ()=>{
        setOpen(false)
    }

    useEffect(()=>{
        getAllCodes()
    },[])

    const getAllCodes = async ()=>{
            const data = await axios.post('https://starfish-app-o44bp.ondigitalocean.app/api/getPromocode')
            if(data){
                dispatch(addCodes(data.data.promocode))
            }
    }
    const handleGenerate = async ()=>{
        setModalContent('loading')
        setOpen(true)
        const code = `${input}-${Math.floor(Math.random() * (10002389 - 483483749 + 1)) + 483483749}`

        const generate = await axios.post('https://starfish-app-o44bp.ondigitalocean.app/api/addPromocode', {
            code: code
        })
        setModalContent('done')
        setOpen(false)

        if(generate){
            dispatch(addCodes(generate.data.promocode))
        }else{
            setOpen(false)
            alert('something wrong occured, please try again later')
        }
    }

    const handleRemove = async ()=>{
        setModalContent('loading')
        const code = `${input}-${Math.floor(Math.random() * (10002389 - 483483749 + 1)) + 483483749}`

        const removeCode = await axios.post('https://starfish-app-o44bp.ondigitalocean.app/api/deletePromocode', {
            code: codeNum
        })

        if(removeCode){
            setOpen(false)
            dispatch(addCodes(removeCode.data.promocode))
        }else {
            setOpen(false)
            alert('something wrong occured, please try again later')
        }
    }

    


    return (
        <Box sx={{height: '100%', width: '100%'}}>
            <ToastContainer autoClose={2000} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {modalContent == 'loading' ? 
                        <CircularProgress style={{color: '#03C988'}} size={40}/>
                    :  modalContent == 'done' ?
                        <CheckCircleIcon style={{color: '#03C988', height: 80, width: 80}}/>
                    : modalContent == 'delete' &&
                    <ReportGmailerrorredIcon style={{width: 80, height: 80, color: '#FC2947'}}/>
                    }
                    <Typography id="modal-modal-title" color={'black'} variant="overline" component="h2">
                        {modalContent == 'loading' ? 'Wait a moment while generating the promo code': modalContent == 'done' ? 'promo code generated successfully' : modalContent == 'delete' && 'Are you sure'}
                    </Typography>
                    {modalContent == 'delete' &&
                        <Button onClick={handleRemove}  sx={{width: 300, backgroundColor: 'red', marginTop: 2}} variant='contained'>
                            Remove
                        </Button>
                    }
                </Box>
            </Modal>
            <AppBar sx={{width: '100%', backgroundColor: '#FFFFFF', height: 65}} position="static">
                <Container sx={{display: 'flex', justifyContent: 'end',alignItems: 'center', height: '100%'}} maxWidth='xl'>
                    <Button endIcon={<LogoutIcon/>} sx={{width: 100, backgroundColor: '#F45050', height: 40, color: 'white'}}>
                        Log out
                    </Button>
                </Container>
            </AppBar>



            <Box sx={{height: '92%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography marginTop={2} fontWeight={700} variant="h4" color={'black'}>
                    Welcome back
                </Typography>

                <Typography marginTop={1} fontWeight={500} variant="button" color={'black'}>
                    Start generating promo codes 
                </Typography>

                <Typography marginTop={1}  variant="overline" color={'black'}>
                    How it works ?
                </Typography>

                <Typography marginBottom={3} textAlign={'center'} marginTop={1}  variant="body1" color={'black'}>
                    You will enter for example "abcde" and the generated promo code will be  "abcde-3719347104712014"
                </Typography>
                <Box sx={{width: {xs: '100%', md: '60%', lg: '70%'}, height: 70, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <TextField onChange={(e)=>{
                        setInput(e.target.value)
                    }} value={input} label='name' size="small" variant="outlined" sx={{width: '90%'}}/>
                    <Button onClick={handleGenerate} variant="contained" sx={{width: 90}}>
                        Generate
                    </Button>
                </Box>


                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Promo code</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {codes.length > 0 &&
                                    codes.map((e)=>{
                                        return (
                                <TableRow
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">{e._id}</TableCell>
                                    <TableCell align="right">{e.code}</TableCell>
                                    <TableCell align="right">
                                        <IconButton onClick={()=>{
                                            navigator.clipboard.writeText(e.code)
                                            toast.success("Promo code copied to clipboard", {
                                                position: toast.POSITION.TOP_CENTER
                                            });
                                        }}>
                                            <CopyAllIcon sx={{width: 30, height: 30}}/>
                                        </IconButton>

                                        <IconButton onClick={()=>{
                                            setModalContent('delete')
                                            setCodeNum(e.code)
                                            setOpen(true)
                                        }}>
                                            <DeleteIcon sx={{width: 30, height: 30, color: '#F45050'}}/>
                                        </IconButton>
                                    </TableCell>
                                    </TableRow>
                                        )
                                    })
                            }
                        </TableBody>
                    </Table>
                    </TableContainer>
            </Box>

        </Box>
    )
}