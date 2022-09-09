import React, { useState } from 'react';
import { Container } from '@mui/material';
import Searcher from './components/Searcher';
import Users from './containers/Users';
import './styles/global.scss';

const App = () => {

  const initialState = 'octocat';
  const [inputUser, setInputUser] = useState(initialState);

  return (
    <Container sx={{
      background: '#24385b',
      minWidth: '80vw',
      minHeight: '450px',
      borderRadius: '16px',
      marginTop: '100px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: 3
    }}>
      <Searcher setInputUser={setInputUser}/>
      <Users inputUser={inputUser} />
    </Container>
  )
}

export default App;
