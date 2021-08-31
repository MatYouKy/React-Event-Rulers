import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStateProvider } from './context/GlobalState.context';
import './styles/index.scss';
import { App } from './App';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

