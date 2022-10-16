import React from 'react';
import './Resume.css';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { Container } from 'react-bootstrap';


function Resume() {
  return (
    <>
      <Header />
        <Container>
            <h1>Resume</h1>
        </Container>
      <Footer />
    </>
  )
}

export default Resume
