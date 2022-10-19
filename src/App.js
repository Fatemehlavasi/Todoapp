import React from 'react';
import { store } from './componentes/redux/store';
import { Provider } from 'react-redux';
import Home from './componentes/Home/Home';
import './App.Style.scss'

function App() {


  return (
    <div className='Containerapp' >
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
