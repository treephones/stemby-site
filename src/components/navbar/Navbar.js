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
                            width="100"
                            height="70"
                            className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Commands" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/commands">All Commands</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/commands#math">Math</NavDropdown.Item>
                            <NavDropdown.Item href="/commands#chemistry">Chemistry</NavDropdown.Item>
                            <NavDropdown.Item href="/commands#biology">Biology</NavDropdown.Item>
                            <NavDropdown.Item href="/commands#code">Code</NavDropdown.Item>
                            <NavDropdown.Item href="/commands#english">English</NavDropdown.Item>
                            <NavDropdown.Item href="/commands#fun">Fun</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/support">Support</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/invite">Invite</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}
export default Navi;