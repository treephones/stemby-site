import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/Navbar.css';
import { Route, Routes } from 'react-router-dom';
import Navi from './components/navbar/Navbar.js'

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route exact path='/'/>
      </Routes>
      <header className="App-header">
        <p>
          Welcome to <code id='tt'>Stemby</code><br/>
          <p id='secondary'>The best discord homework bot.</p>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
