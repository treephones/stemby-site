import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../navbar/Navbar.css';
import { Accordion, Container } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import { options, particlesInit, particlesLoaded } from '../../particleOptions.js';
import cmds from './commands.json';

function Commands() {
    var ckey = "";
    return (
        <div className="App">
            <header className="App-header" id='commands'>
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
            </header>
            <Particles  init={particlesInit} loaded={particlesLoaded} options={options} />
        </div>
    );
}

export default Commands;