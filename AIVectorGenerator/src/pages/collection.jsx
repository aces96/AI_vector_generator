import { Grid, Box } from "@mui/material";
import { SvgDisplayCompo, CollectionSideBar } from "../components/collection.components";
import { Scrollbar } from 'react-scrollbars-custom';

import '../index.css'

export const Collection = ()=>{


    return (
        <Box sx={{width: '100%', height: '92%', display: 'flex', flexDirection: 'row'}}>
            <Box className='sidebar'  sx={{width: {xs: '0%', md: '30%', lg: '20%'}, height: '100%'}}>
                <CollectionSideBar />
            </Box>
            <Box sx={{width: {xs: '100%', md: '75%', lg: '80%'}, height: '100%'}}>
                <SvgDisplayCompo/>
            </Box>
        </Box>
    )
}