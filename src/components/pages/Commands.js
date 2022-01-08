import '../../App.css';
import logo from '../../stemby_bare_icon.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../navbar/Navbar.css';
import Navi from '../../components/navbar/Navbar.js'
import { Accordion, Button, Container } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import { options, particlesInit, particlesLoaded } from '../../particleOptions.js';
import cmds from './commands.json';

function Commands() {
    var ckey = "";
    return (
        <div className="App">
            <Navi logo={logo} />
            <header className="App-header" id='cmds'>
                <div>
                    <h1 id='stemby'>Commands</h1>
                    <p>Instructions and examples of all of <span id='stemby'>Stemby's</span> commands.</p>
                </div>
                <Container>
                    {
                        cmds.map(category => {
                            return <Container key={Date.now()*Math.random()+Math.random()}>
                                    <h1>
                                        {Object.keys(category)[0]}
                                    </h1>
                                    <Accordion>
                                    {
                                        category[Object.keys(category)[0]].map(cmd => {
                                            ckey = Date.now()*Math.random()+Math.random();
                                            return <Accordion.Item key={ckey} eventKey={ckey}>
                                                <Accordion.Header>{cmd.command}</Accordion.Header>
                                                <Accordion.Body>
                                                    Usage: {cmd.usage}
                                                    <br/><br/>
                                                    Description: {cmd.description}
                                                    <br/><br/>
                                                    Example: {cmd.example}
                                                    <br/><br/>
                                                    Aliases: {cmd.aliases}
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        })
                                    }
                                    </Accordion>
                            </Container>
                        })
                    }
                </Container>
                <br/>
                <p id='secondary'><span id='stemby'>Stemby. </span>The best discord homework bot.</p>
                <Container>
                    <Button className='hp-btns' id='inv-btn' href='invlink' rel="noopener noreferrer" variant="primary" size='lg'>Invite To Server</Button>{' '}
                    <Button className='hp-btns' href='/commands' rel="noopener noreferrer" variant="secondary" size='lg'>Commands</Button>{' '}
                </Container>
            </header>
            <Particles  init={particlesInit} loaded={particlesLoaded} options={options} />
        </div>
    );
}

export default Commands;