//required
import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../navbar/Navbar.css';
import './pages.css';
import { Accordion, Container } from 'react-bootstrap';

//data
import qData from './faqs.json';

function Faq() {
    return (
        <div className="App" id='faq'>
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
            </header>
        </div>
    );
}

export default Faq;