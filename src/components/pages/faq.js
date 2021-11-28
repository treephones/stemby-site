//required
import '../../App.css';
import logo from '../../stemby_bare_icon.png'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../navbar/Navbar.css';
import './pages.css';
import Navi from '../../components/navbar/Navbar.js'
import { Accordion, Button, Container } from 'react-bootstrap';
import Particles from 'react-tsparticles';
import { options, particlesInit, particlesLoaded } from '../../particleOptions.js';

//data
import qData from './faqs.json';

function Faq() {
    return (
        <div className="App">
            <Navi logo={logo} />
            <header className="App-header">
                <div>
                    <h1 id='stemby'>FAQs</h1>
                    <p>Frequently asked questions.</p>
                </div>
                <Container>
                    <Accordion>
                        {
                            qData.map(q => {
                                return (
                                    <Accordion.Item eventKey={q.qid} key={q.qid}>
                                        <Accordion.Header>{q.question}</Accordion.Header>
                                        <Accordion.Body>{q.answer}</Accordion.Body>
                                    </Accordion.Item>
                                );
                            })
                        }
                    </Accordion>
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

export default Faq;