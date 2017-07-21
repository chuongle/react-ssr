import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

console.log('index.js');

ReactDOM.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>, 
document.getElementById('app'));