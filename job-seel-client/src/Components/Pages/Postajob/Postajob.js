import React from 'react';
import './Postajob.css';
import Header from '../../Layout/Header';
import Footer from '../../Layout/Footer';
import { Container } from 'react-bootstrap';

function Postajob() {
  return (
    <>
      <Header />
        <Container>
            <h1>Post A Job</h1>
        </Container>
      <Footer />
    </>
  )
}

export default Postajob
