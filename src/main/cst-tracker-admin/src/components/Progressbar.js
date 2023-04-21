import DoneIcon from '@mui/icons-material/Done';
import HistoryIcon from '@mui/icons-material/History';
import UetrData from '../components/UetrData';
import { Box, Typography  } from '@mui/material';
import styled from 'styled-components'
import search from '../images/search.svg'
import notFound from '../images/notfound.svg'

const Illustration = styled.img`
  max-width: 700px;
  width: 70%;
  margin: 60px auto !important;
  margin: 0 auto;
`

function Progressbar({ data, value, inputValue, uetrValue }) {
    const senderData = (data.sender_data)
    const receiverData = (data.receiver_data)
    const intermediaryData = (data.intermediary_data)
    // console.log(senderData)
    
    // console.log(data)
    
    if (uetrValue.length === 0 || value === '') {
        return <Box height= '100%' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
                    <Box sx={{display: 'grid', placeContent: 'center', maxWidth: 510}}>
                        <Typography variant='h2'  fontWeight='bold' color='#115293' textAlign='center'>Search For A UETR</Typography>
                        <Typography variant='h5' color="#616161" sx={{marginTop: '40px', textAlign: 'center'}}>Search Now ...</Typography>
                    </Box>
                    <Box sx={{display: 'grid', placeContent: 'center'}}>
                        <Illustration src={search} />
                    </Box>
                </Box>
    } 
    if (value !== data.uetr && value !== '') {
        return <Box height= '100%' sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
        <Box sx={{display: 'grid', placeContent: 'center'}}>
            <Illustration src={notFound} />
        </Box>
        <Box sx={{display: 'grid', placeContent: 'center', maxWidth: 510}}>
            <Typography variant='h2'  fontWeight='bold' color='error' textAlign='center'>UETR Not Found !</Typography>
            <Typography variant='h5' color="#616161" sx={{marginTop: '40px', textAlign: 'center'}}>Try Again ...</Typography>
        </Box>
    </Box>
    }
    else if (value === data.uetr){
    return <>
        <Box className='progressbar'>
            <Box className="line"></Box>
                    <Box className='circles'>
                        <Box className='circle'>
                            {senderData.event_data.status !== 'Completed' ? <HistoryIcon sx={{color: 'grey', fontSize: 30}}/> : <DoneIcon sx={{color: 'green', fontSize: 30}}/>}
                        </Box>
                        <UetrData data={senderData} value={value} inputValue={inputValue}/>
                    </Box>
                    {intermediaryData.map((intermediary, index) => {
                       return <Box key={index} className='circles'>
                                <Box className='circle'>
                                    {intermediary.event_data.status !== 'Completed' ? <HistoryIcon sx={{color: 'grey', fontSize: 30}}/> : <DoneIcon sx={{color: 'green', fontSize: 30}}/>}
                                </Box>
                                <UetrData data={intermediary} intermediary={intermediary} value={value} inputValue={inputValue}/>
                            </Box>
                    })}
                    <Box className='circles'>
                        <Box className='circle'>
                            {receiverData.event_data.status !== 'Completed' ? <HistoryIcon sx={{color: 'grey', fontSize: 30}}/> : <DoneIcon sx={{color: 'green', fontSize: 30}}/>}
                        </Box>
                        <UetrData data={receiverData} value={value} inputValue={inputValue}/>
                    </Box>
        </Box>
    </>
}}
export default Progressbar;