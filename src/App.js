import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Container from '@material-ui/core/Container';

import Home from './Components/Home';

import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <>
      <Header />
      
        <div className='app'>
        {/* <Container> */}
          <Home />
          {/* </Container> */}
        </div>
      
      </>
    </BrowserRouter>
  );
}

export default App;
