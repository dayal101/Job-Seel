import React, { useState } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Form, Button, Row,Col } from 'react-bootstrap';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const links = [
    {text: "Jobs", href: "/jobs"},
    {text: "Companies", href: "/companies"},
    {text: "Resume", href: "/resume"},
    {text: "Post a Job", href: "/post-a-job"}
  ]
  return (
    <>
        <Navbar collapseOnSelect expand="lg" className="header-wrapper" bg='dark' variant="dark" sticky="top">
          <Container>
              <Navbar.Brand as={Link} to='/' >Manipur Job Seel</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
              <Navbar.Collapse  id="responsive-navbar-nav" className="justify-content-end">
              <Nav>
                {links.map(link => (
                  <Nav.Link as={NavLink} className="header-links" key={link.text} to={link.href}>{link.text}</Nav.Link>
                ))}
                <Nav.Link className="header-links" onClick={handleShow} >Login/Register</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <div className="header_title">
          <h3>Sign In</h3>
        </div>
        <Modal.Body>
          <div className="login__form">
            <Form action=''>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control 
                  type="password"
                />
              </Form.Group>
              <div><a className='forgot_password_link' href='sdsda'>Forgot Password</a></div>
              
              <div className="login_btn_wrapper">
                <Button size="lg" variant="dark" type="submit">Submit</Button>
              </div>
            </Form>
          </div>
          <div className="login__break-wrapper">
            <Row className='login__break'>
              <Col className='front_line'></Col>
              <Col><small>or Sign up with</small></Col>
              <Col className='back_line'></Col>
            </Row>
          </div>
          <div className='register__link'>
            <p>Not yet registered?<a href='kkk'>Register Now</a></p>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Header
