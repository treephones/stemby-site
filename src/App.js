import './App.css';
import logo from './stemby_bare_icon.png'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './components/navbar/Navbar.css';
import { Route, Routes } from 'react-router-dom';
import Navi from './components/navbar/Navbar.js'
import { Button, Container } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import { options, particlesInit, particlesLoaded } from './particleOptions.js';

function App() {
  return (
    <div className="App">
      <Navi logo={logo} />
      <Routes>
        <Route exact path='/'/>
      </Routes>
      <header className="App-header">
        <div>Welcome to <p id='tt'>Stemby</p></div><br/>
        <p id='secondary'>The best discord homework bot.</p>
        <Container>
          <Button className='hp-btns' href='invlink' rel="noopener noreferrer" variant="primary" size='lg'>Invite To Server</Button>{' '}
          <Button className='hp-btns' href='invlink' rel="noopener noreferrer" variant="secondary" size='lg'>Commands</Button>{' '}
        </Container>
      </header>
      <Particles  init={particlesInit} loaded={particlesLoaded} options={options} />
    </div>
  );
}

export default App;
