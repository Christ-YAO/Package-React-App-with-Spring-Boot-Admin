import React, { useState } from 'react';
import { Box, Link, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import Button from "@mui/material/Button";
import TimelineIcon from '@mui/icons-material/Timeline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import CancelIcon from '@mui/icons-material/Cancel';
import PaidIcon from '@mui/icons-material/Paid';

function Select(props) {
    const { urlValue } = useParams()
    // console.log("Question Number : ", urlValue)

    const [uetrValue, setUetrValue] = useState(urlValue)

    return <>
    <h1 style={{color: '#1976d2', width: '100%', fontSize: '17px', padding: '0px 0px 10px', marginBottom: '-20px', marginTop: '-80px', marginLeft: '40px',}}>Virements > <Link sx={{textDecoration: 'none'}} textDecoration="none" href='/virementsentrant'>Virements Entrant</Link> > {uetrValue}</h1><br />
    <Box sx={{display: 'flex'}}>
            <Link href={`/uetrPage/${uetrValue}`} sx={{
                // maxWidth : "75%",
                //   minWidth : 400,
                display: 'flex',
                textDecoration: 'none',
                margin: '130px auto',
                borderRadius: 1,
                }}
                >
                    <Button variant='outlined' sx={{position: 'relative', transition: '0.3s' ,margin: '10px', textTransform: 'uppercase', display: 'block', width: '200px',
                            background: '#0a62d0', height: '200px', borderRadius: '50%',
                            color: '#fff',
                            "&:hover": { background: '#fff', color: "#0a62d0", transform: 'translateY(-5%)'},}}>
                            <TimelineIcon fontSize='large'/>
                        <Box><Typography variant="h6" sx={{fontSize:{md:'20px', sm:'17px', xs: '17px'}, fontWeight: 'bold'}}>Tracking</Typography></Box>
                    </Button>
            </Link>
            <Link sx={{
                // maxWidth : "75%",
                //   minWidth : 400,
                display: 'flex',
                textDecoration: 'none',
                margin: '150px auto',
                borderRadius: 1,
                }}
                >
                    <Button color='warning' variant='outlined' sx={{position: 'relative', transition: '0.3s' ,margin: '10px', textTransform: 'uppercase', display: 'block', width: '200px',
                            background: '#e65100', height: '200px', borderRadius: '50%',
                            color: '#fff',
                            "&:hover": { background: '#fff', color: "#e65100", transform: 'translateY(-5%)'},}}>
                            <PaidIcon fontSize='large' />
                        <Box><Typography variant="h6" sx={{fontSize:{md:'20px', sm:'17px', xs: '17px'}, fontWeight: 'bold'}}>Statuts de Paiement</Typography></Box>
                    </Button>
            </Link>
            <Link sx={{
                // maxWidth : "75%",
                //   minWidth : 400,
                display: 'flex',
                textDecoration: 'none',
                margin: '150px auto',
                borderRadius: 1,
                }}
                >
                    <Button color='success' variant='outlined' sx={{position: 'relative', transition: '0.3s' ,margin: '10px', textTransform: 'uppercase', display: 'block', width: '200px',
                            background: '#388e3c', height: '200px', borderRadius: '50%',
                            color: '#fff',
                            "&:hover": { background: '#fff', color: "#388e3c", transform: 'translateY(-5%)'},}}>
                            <AutorenewIcon fontSize='large' />
                        <Box><Typography variant="h6" sx={{fontSize:{md:'20px', sm:'17px', xs: '17px'}, fontWeight: 'bold'}}>Modification</Typography></Box>
                    </Button>
            </Link>
            <Link sx={{
                // maxWidth : "75%",
                //   minWidth : 400,
                display: 'flex',
                textDecoration: 'none',
                margin: '150px auto',
                borderRadius: 1,
                }}
                >
                    <Button color='error' variant='outlined' sx={{position: 'relative', transition: '0.3s' ,margin: '10px', textTransform: 'uppercase', display: 'block', width: '200px',
                            background: '#d50000', height: '200px', borderRadius: '50%',
                            color: '#fff',
                            "&:hover": { background: '#fff', color: "#d50000", transform: 'translateY(-5%)'},}}>
                            <CancelIcon fontSize='large' />
                        <Box><Typography variant="h6" sx={{fontSize:{md:'20px', sm:'17px', xs: '17px'}, fontWeight: 'bold'}}>Annulation</Typography></Box>
                    </Button>
            </Link>
        </Box>
    </>
}

export default Select;