import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import HistoryIcon from '@mui/icons-material/History';

function UetrInfo({data, value, isLoading}) {
    
    // console.log(items)
    if (value === '') {
        return '';
    } else if (value === data.uetr) {
    return (
        <Box
                sx={{
                maxWidth: '90vw',
                width: '100%',
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                borderRadius: 1,
                margin: '0 auto',
                "& > :not(style)": { m: 1, width: "90%" }
                }}
                noValidate
                autoComplete="off"
            >
                <Toolbar style={{display: 'flex', flexWrap: 'wrap', marginLeft: '0%', width: '100%', gap: 20, margin: '10px auto'}}>
                {data.latest_status === "Completed" ? <Box sx={{flex: "1", minWidth: 340, height: 110, bgcolor: '#388e3c', color: '#fff', p: 1.5, borderRadius: 1}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Final status</span>
                        <span>08 MAR 2023-10:30 PDT</span>
                    </Box>
                    {data.latest_status !== 'Completed' ? <Box style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                        <HistoryIcon sx={{fontSize: 50, color: '#fff', marginRight: 1}} />
                        <Box>
                            <Typography variant='h6' color="#fff">{data.latest_status}</Typography>
                            {/* <Typography sx={{fontSize: 14,}}>Credited to beneficiary customers</Typography> */}
                        </Box>
                    </Box>
                    :
                    <Box style={{display: 'flex', alignItems: 'center', marginTop: 10,}}>
                        <TaskAltIcon sx={{fontSize: 50, color: '#fff', marginRight: 1}} />
                        <Box>
                            <Typography variant='h6' color="#fff">{data.latest_status}</Typography>
                            {/* <Typography sx={{fontSize: 14,}}>Credited to beneficiary customers</Typography> */}
                        </Box>
                    </Box>}
                    
                </Box> 
                : 
                <Box sx={{flex: "1", minWidth: 340, height: 110, bgcolor: '#FFA07A', color: '#fff', p: 1.5, borderRadius: 1}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Final status</span>
                        <span>08 MAR 2023-10:30 PDT</span>
                    </Box>
                    {data.latest_status !== 'Completed' ? <Box style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                        <HistoryIcon sx={{fontSize: 50, color: '#fff', marginRight: 1}} />
                        <Box>
                            <Typography variant='h6' color="#fff">{data.latest_status}</Typography>
                            {/* <Typography sx={{fontSize: 14,}}>Credited to beneficiary customers</Typography> */}
                        </Box>
                    </Box>
                    :
                    <Box style={{display: 'flex', alignItems: 'center', marginTop: 10,}}>
                        <TaskAltIcon sx={{fontSize: 50, color: '#fff', marginRight: 1}} />
                        <Box>
                            <Typography variant='h6' color="#fff">{data.latest_status}</Typography>
                            {/* <Typography sx={{fontSize: 14,}}>Credited to beneficiary customers</Typography> */}
                        </Box>
                    </Box>}
                    
                </Box>}
                <Box sx={{flex: "1", minWidth: 280, height: 110, bgcolor: '#FFA07A', color: '#fff', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '40%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Instructed amount</span>
                        {/* <span>Credited amount</span> */}
                    </Box>
                    <Box style={{display: 'flex', marginTop: 0}}>
                            <Typography variant='h6'>{data.instructed_amount}</Typography>
                            {/* <ArrowForwardIcon sx={{fontSize: 30, color: 'gray', marginRight: 1}} />
                            <Typography variant='h6' >{data.credited_amount}</Typography> */}
                    </Box>
                    
                </Box>
                <Box sx={{flex: "1", minWidth: 100, height: 110, bgcolor: '#FFA07A', color: '#fff', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '25%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <Box>Deducts</Box>
                    </Box>
                    <Box style={{marginTop: 14}}>
                            <Typography variant='h6'>{data.deduct}</Typography>
                            {/* <Typography variant='body1'>SHA</Typography> */}
                    </Box>
                </Box>
                <Box sx={{flex: "1", minWidth: 200, height: 110, bgcolor: '#FFA07A', color: '#fff', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '25%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Total duration</span>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center', marginTop: 10}}>
                            <HistoryIcon sx={{fontSize: 30, color: '#fff', marginRight: 1}}/>
                            <Typography variant='h6'>{data.elapsed_time}</Typography>
                    </Box>
                </Box>
                <Box sx={{flex: "1", minWidth: 350, height: 110, bgcolor: '#FFA07A', color: '#fff', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '30%'}}>
                    <Box style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: 14,
                    }}>
                        <span>Tracking number</span>
                    </Box>
                    <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10}}>
                            <Typography>{data.uetr}</Typography>
                    </Box>
                </Box>
                <Box sx={{flex: "1", minWidth: '100%', height: 50, bgcolor: '#f8f8ff', p: 1.5, borderRadius: 1, display: 'flex', flexDirection: 'column', gap: '22%'}}>
                    <Box style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 0}}>
                            <marquee>{data.status_description}</marquee>
                    </Box>
                </Box>
            </Toolbar>
        </Box>
    )}
}

export default UetrInfo;