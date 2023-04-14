import { Box } from "@mui/material";
import { Header } from "../components/home.component";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import {addImages} from '../redux/slices/images.slice'
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import axios from 'axios'




export const LandingPage = ()=>{
    const [openErrorModal, setOpenErrorModal] = useState(false);
    const [openGenerateModal, setOpenGenerateModal] = useState(false);
    const [prompt, setPrompt] = useState("")
    const [loading, setLoading] = useState(false)
    const navigation = useNavigate()
    const dispatch = useDispatch()

    const getImages =  ()=>{
        setLoading(true)
        let imgsUrls= []
        const user = localStorage.getItem('user')
        const parsedData = JSON.parse(user)
        const imgs =  axios.post('https://starfish-app-o44bp.ondigitalocean.app/api/generateVector', {
            user: parsedData.id,
            prompt: prompt
        }).then((res)=>{
            let img 

            res.data.images.map((i)=>{
                const url = URL.createObjectURL(new Blob([i], { type: 'image/svg+xml' }))
                imgsUrls.push(url)
                console.log('imagessss',imgsUrls);
            })
            setLoading(false)
            dispatch(addImages(imgsUrls))

            localStorage.setItem('user', JSON.stringify({
                id: parsedData.id,
                name: parsedData.name,
                image: parsedData.image,
                tokens: parsedData.tokens-1,
                bundle: parsedData.bundle
            }))
            

            setTimeout(()=>{
                navigation(`/collection?prompt=${prompt}`)
            },1500)

        }).catch((err)=>{
            setLoading(false)
            alert('something error occured, please try again later')
            setOpenGenerateModal(false)
        })

        
    }

    const user = useLoaderData()


    const handleClose1 = ()=>{
        setOpenErrorModal(false)
    }
    const handleClose2 = ()=>{
        setOpenGenerateModal(false)
    }

    const handleGenerate = ()=>{
        const data = JSON.parse(user)
        if(data == null){
            setOpenErrorModal(true)
        }else {
            if(data.tokens == 0){
                alert('you dont have enough tokens')
            }else {
                console.log('psssssss', data.tokens);
                setOpenGenerateModal(true)
                getImages()
            }
        }
    }

    const handlePrompt = (e)=>{
        setPrompt(e.target.value)
        console.log(e.target.value);
    }

    return(
        <Box>
            <Header loading={loading} handleClose1={handleClose1} handleClose2={handleClose2} open1={openErrorModal} open2={openGenerateModal} prompt={prompt} handlePrompt={handlePrompt} handleGenerate={handleGenerate}/>
        </Box>
    )
}