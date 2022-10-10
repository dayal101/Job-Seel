import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Job Seel</Navbar.Brand>
          <Nav>
            <Nav.Link href="#home">Job</Nav.Link>
            <Nav.Link href="#features">Company</Nav.Link>
            <Nav.Link href="#pricing">Resume</Nav.Link>
            <Nav.Link href="#pricing">Post a Job</Nav.Link>
            <Nav.Link href="#pricing">Login/Register</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
