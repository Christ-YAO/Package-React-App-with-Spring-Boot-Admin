import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from '../data/Data.js';
// import { Button } from 'bootstrap';
import Button from "@mui/material/Button";

function App() {
  const [transaction, setTransaction] = useState(data);
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
    <Box bgcolor='#f8f8ff' padding='50px 0px' width='100%' minHeight='110vh' marginTop='-100px !important'>
    <h1 style={{color: '#1976d2', width: '100%', fontSize: '17px', padding: '0px 0px 10px', marginBottom: '-20px', marginTop: '-40px', marginLeft: '40px',}}>Virements > Virements Sortant</h1><br />
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
        <Table style={{maxWidth: '100%'}} striped hover>
          <thead>
            <tr>
              {/* <th>Date</th> */}
              <th>Nom</th>
              <th>Prénoms</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transaction
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.last_name.toLowerCase().includes(search) || item.first_name.toLowerCase().includes(search) || item.email.toLowerCase().includes(search);
              })
              .map((item) => (
                <tr key={item.id}>
                  <td>{item.Name}</td>
                  <td>{item.Surname}</td>
                  <td>{item.Email}</td>
                  <td>{item.contacts}</td>
                  <td style={{ display: 'flex', justifyContent: 'space-around'}}><Button variant='outlined' color='success'>Valider</Button> <Button variant='outlined' color='error'>Refuser</Button></td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Box>
    </Box>
  );
}

export default App;
