import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Particles from 'react-tsparticles';
import { options, particlesInit, particlesLoaded } from './particleOptions.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Particles  init={particlesInit} loaded={particlesLoaded} options={options}/>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
