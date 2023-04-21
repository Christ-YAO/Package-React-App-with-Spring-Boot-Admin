import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Link } from '@mui/material';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../data/Data.js';

function App() {
  const [clients, setClients] = useState(data);
  const [search, setSearch] = useState('');

  // const sortName = () => {
  //   setContacts(
  //     data.sort((a, b) => {
  //       return a.first_name.toLowerCase() < a.first_name.toLowerCase()
  //         ? -1
  //         : a.first_name.toLowerCase() > a.first_name.toLowerCase()
  //         ? 1
  //         : 0;
  //     })
  //   );
  // };

  return (
    <Box bgcolor='#f8f8ff' padding='50px 0px' width='100%' height='100%' marginTop='-100px !important' margin="0 auto">
      <h1 style={{color: '#1976d2', width: '100%', fontSize: '17px', padding: '0px 0px 10px', marginBottom: '-20px', marginTop: '-40px', marginLeft: '40px',}}>Comptes clients</h1><br />
      <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, maxWidth: '100vw', width: {xl: '95%', md: '95%', sm: "98%", xs: "98%"}, margin: ' 0 auto', background: '#fff', padding: {xl: '5px 40px', lg: '50px', md: '50px', sm: '40px', xs: '20px'}, border: '5px solid #f8f8ff', borderRadius: 1}}>
        {/* <Form> */}
          <InputGroup className='my-3'>

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
              <th>N° de Compte</th>
              <th>Nom & Prénom</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {clients
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.first_name.toLowerCase().includes(search) || item.last_name.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td><Link href='/virementsentrant'>{item.account}</Link></td>
                  <td>{item.Name} {item.first_Surname}</td>
                  <td>{item.Email}</td>
                  <td>{item.contacts}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default App;
