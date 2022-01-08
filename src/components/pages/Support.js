import '../../App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../navbar/Navbar.css';
import { Button, Container } from 'react-bootstrap';

function Support() {
    return (
        <div className="App" id='support'>
            <header className="App-header">
                <div>
                    <h1 id='stemby'>Support</h1>
                    <p>For any concerns or extra clarification using the bot, please contact <code>Treephones#4601</code> or <code>crolaf#3494</code> on discord.</p>
                </div><br/>
                <p id='secondary'><span id='stemby'>Stemby. </span>The best discord homework bot.</p>
                <Container>
                    <Button className='hp-btns' id='inv-btn' href='https://discord.com/oauth2/authorize?client_id=840700895251005481&permissions=51264&scope=bot' target='_blank' rel="noopener noreferrer" variant="primary" size='lg'>Invite To Server</Button>{' '}
                    <Button className='hp-btns' href='#commands' rel="noopener noreferrer" variant="secondary" size='lg'>Commands</Button>{' '}
                </Container>
            </header>
        </div>
    );
}

export default Support;