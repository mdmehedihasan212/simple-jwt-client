import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ height: '70px' }}>
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='mx-auto'>
                        <Link className='text-white fs-4 text-decoration-none mx-5' to={'/'}>Home</Link>
                        <Link className='text-white fs-4 text-decoration-none mx-5' to={'/orders'}>Orders</Link>
                        <Link className='text-white fs-4 text-decoration-none mx-5' to={'/login'}>Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;