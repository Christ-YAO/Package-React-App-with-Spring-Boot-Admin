import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from '@mui/material/Container';
import UetrInfo from "../components/UetrInfo";
import GoBackBtn from "../components/GoBackBtn";
import Progressbar from "../components/Progressbar";
import Loader from "../components/Loader";

// const url = "http://164.90.149.95:5001/api/v1/transactions/b9c917b1-e2ad-4b3f-8a6a-6ddae535517e"
// const url = "http://localhost:3000/posts"

function UetrPage({data, isLoading}) {
    // const [data, setData] = useState([])
    // const [isLoading, setLoading] = useState(true)
    // console.log(data)
  
      // useEffect(() => {
      //   if (!url) return
      //   setLoading(true)
      //   async function fetchData() {
      //     try {
      //       const response = await fetch(url)
      //       const data = await response.json()
      //       setData(data)
      //     } catch (err) {
      //       setLoading(true)
      //     } finally {setLoading(false)
      //       // setTimeout(() => {
      //       //   setLoading(false)
      //       // }, 2000)
      //     }
      //   }
      //   fetchData()
      //   }, []);


    const { urlValue } = useParams()
    // console.log("Question Number : ", urlValue)

    const [uetrValue, setUetrValue] = useState([])
    // const [input, setInput] = useState([])
    const [inputValue, setInputValue] = useState(urlValue)
    const [error, setError] = useState(false)
    const value = (uetrValue[0])
    // console.log(uetrValue.length)

    const handleSubmit = (event) => {
        event.preventDefault()
        setError(false)
        setUetrValue([inputValue])

        if (inputValue === '') {
          setError(!error)
        }
      }


    return (
        <Box className='uetrpage' bgcolor="#fff" height='120vh' marginLeft='3%' mb="50px" borderRadius='5px' sx={{ boxShadow: "15px 15px 33px 0px rgba(0,0,0,0.37)",}}>
                <Container maxWidth="xl" sx={{display: {sm: 'flex',},justifyContent: 'space-between',marginTop: '-80px !important', alignItems: 'center' ,gap: 5, width: '90%',}}>
                    <GoBackBtn />
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{
                        maxWidth: 800,
                        width: '100%',
                        // background: "#eee",
                        marginLeft: '-5px !important',
                        display: "flex",
                        flexWrap: "wrap",
                        borderRadius: 1,
                        marginBottom: 1,
                        marginTop: 1,
                        paddingTop: 5,
                        "& > :not(style)": { m: 1, width: "90%" }
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="filled-basic" type='search' label="UETR" variant="outlined" error={error} value={inputValue} onChange={(e) => setInputValue(e.target.value)} required sx={{maxWidth: 600}}/>
                        <Button type="submit" sx={{maxWidth: 150}} variant="contained" onClick={handleSubmit}>Rechercher</Button>
                    </Box>
                </Container>
                {isLoading ? (
                    <Box sx={{height: "100vh", display: 'grid', placeContent: 'center', marginTop: '-200px'}}>
                        <Loader />
                    </Box>
                ) : 
                // data.map((items) => {
                  // console.log(items)
                 <Box width='90%' margin='0 auto'>
                        <hr />
                        <UetrInfo data={data} isLoading={isLoading} value={value}/>
                        <hr />
                        <Progressbar data={data} isLoading={isLoading} value={value} uetrValue={uetrValue}/>
                        
                    </Box>
                // })
              }
        </Box>
    )
}

export default UetrPage;