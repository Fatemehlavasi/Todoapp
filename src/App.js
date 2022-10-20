import React from 'react';
import { store }  from './componentes/redux/store';
import { Provider } from 'react-redux';
import Home from './componentes/Home/Home';
import './App.Style.scss'
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './componentes/redux/store'

function App() {


  return (
    <div className='Containerapp' >
      <Provider store={store}>
      <PersistGate  persistor={persistor} />
        <Home />
      </Provider>
    </div>
  );
}

export default App;
