import React from 'react';
import { store } from './componentes/redux/store';
import { Provider } from 'react-redux';
import Home from './componentes/Home/Home';
import './App.Style.scss'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './componentes/redux/store'
import { Grid, Container } from '@mui/material';
function App() {
  return (
    <Grid bgcolor={" background-image: linear-gradient(to right ,#65bef5,#E4E5E6)"} >

      <Provider store={store}>
        <PersistGate persistor={persistor} />
        <Container>
          <Home />
        </Container>
      </Provider>
    </Grid>
  );
}

export default App;
