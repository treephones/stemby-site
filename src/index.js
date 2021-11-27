//required
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//pages
import Commands from './components/pages/Commands.js';
import Faq from './components/pages/faq.js';
import Support from './components/pages/Support.js';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route exact path='/' element={<App />}/>
          <Route exact path='/home' element={<App />}/>
          <Route exact path='/commands' element={<Commands />}/>
          <Route exact path='/faq' element={<Faq />}/>
          <Route exact path='/support' element={<Support />}/>
        </Routes>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
