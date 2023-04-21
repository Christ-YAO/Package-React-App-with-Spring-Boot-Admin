import React, { useState, useEffect } from 'react';
import axios from "axios";
import Sidebar from '../components/Sidebar'
import { Box } from '@mui/material';

const url = "http://164.90.149.95:5001/api/v1/transactions/b9c917b1-e2ad-4b3f-8a6a-6ddae535517e"

export default function App() {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(true)

    useEffect(() => {
      setLoading(true)
      async function fetchData() {
        try {
          const response = await fetch(url)
          const data = await response.json()
          setData(data)
        } catch (err) {
          setLoading(true)
        } finally {setLoading(false)
          // setTimeout(() => {
          //   setLoading(false)
          // }, 2000)
        }
      }
      fetchData()
      //   axios
      //     .get(url)
      //     .then((res) => setData(res.data));
      //     setLoading(false)
      }, []);

  return (
    <Box width='100%' minHeight='100%' overflow='hidden'>
      <Sidebar data={data} isLoading={isLoading} />
    </Box>
  );
}