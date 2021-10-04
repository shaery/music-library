import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

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
                        <NavLink className="mx-5 nav-btn" to="/home">Home</NavLink>
                        <NavLink className="mx-5 nav-btn" to="/about">About</NavLink>
                        <NavLink className="mx-5 nav-btn" to="/service">Services</NavLink>
                        <NavLink className="mx-5 nav-btn" to="/genre">Genres</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;