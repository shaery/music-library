import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            {/* <Link>Home</Link>
            <Link>About</Link>
            <Link>Services</Link>
            <Link>Genres</Link> */}

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto m-2 p-4">
                        <img
                            src="/music-note.svg"
                            width="40"
                            height="40"
                            className="d-inline-block align-top me-5"
                            alt="React Bootstrap logo"
                        />
                        <Navbar.Brand className="me-5">Shaery's Music Studio</Navbar.Brand>
                        <Nav.Link className="mx-5" href="/home">Home</Nav.Link>
                        <Nav.Link className="mx-5" href="/about">About</Nav.Link>
                        <Nav.Link className="mx-5" href="/service">Services</Nav.Link>
                        <Nav.Link className="mx-5" href="/genre">Genres</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;