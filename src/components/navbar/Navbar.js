import React from "react";
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';


class Navi extends React.Component {
    render() {
        return (
            <Navbar variant='dark' expand="lg">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src={this.props.logo}
                            width="90"
                            height="90"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href='/commands'>Commands</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/support">Support</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="https://discord.com/api/oauth2/authorize?client_id=840700895251005481&permissions=51264&scope=bot" target='_blank'>Invite</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
export default Navi;