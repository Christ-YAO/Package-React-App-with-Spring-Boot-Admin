import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { entrant } from '../data/Data.js';

function App() {
  const [transaction, setTransaction] = useState(entrant);
  const [search, setSearch] = useState('');

  return (
    <Box bgcolor='#f8f8ff' padding='50px 0px' width='100%' minHeight='110vh' marginTop='-100px !important'>
    <h1 style={{color: '#1976d2', width: '100%', fontSize: '17px', padding: '0px 0px 10px', marginBottom: '-20px', marginTop: '-40px', marginLeft: '40px',}}>Virements > Virements Entrant</h1><br />
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, maxWidth: '100vw', width: {xl: '95%', md: '95%', sm: "98%", xs: "98%"}, margin: ' 0 auto', background: '#fff', padding: {xl: '20px 40px', lg: '50px', md: '50px', sm: '40px', xs: '20px'}, border: '5px solid #f8f8ff', borderRadius: 1}}>
        {/* <Form> */}
          <InputGroup>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            />
          </InputGroup>
        {/* </Form> */}
        <Table style={{maxWidth: '100%'}} striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>UETR</th>
              <th>Status</th>
              <th>Bank Emetrice</th>
            </tr>
          </thead>
          <tbody>
            {transaction
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.date.toLowerCase().includes(search) || item.uetr.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.date}</td>
                  <td><Link href={`/select/${item.uetr}`}>{item.uetr}</Link></td>
                  {item.status === "Completed" ? 
                        <td style={{color: 'green'}}>{item.status}</td> :
                        <>
                          {item.status === "Rejected" ? 
                           <td style={{color: 'red'}}>{item.status}</td> :
                           <td style={{color: 'orange'}}>{item.status}</td>}
                        </> 
                        
                        }
                  <td style={{width: 450, fontSize: '12px'}}>{item.bank_emetrice}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default App;
