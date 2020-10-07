import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {AnimalContextProvider} from './AnimalContext';

ReactDOM.render(
  <AnimalContextProvider>
    <App />
  </AnimalContextProvider>,
  document.getElementById('root')
);
