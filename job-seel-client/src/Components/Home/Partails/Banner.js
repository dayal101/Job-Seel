import React from 'react';
import './Banner.css';
import States from '../../Layout/States';
import { Button, Row, Col, FloatingLabel, Form, Container } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons'

const Banner = () => {
  const popsearchs = [
    {name: "software developer"},
    {name: "human resources"},
    {name: "software tester fresher"},
    {name: "digital marketing"},
    {name: "sales executive"},
    {name: "data analyst"},
    {name: "software developer freshers"},
    {name: "software tester"},
  ]
  return (
    <div className="banner-wrapper">
      <div className='center'>
        <Form>
          <Row className="g-2">
            <Col lg>
              <FloatingLabel controlId="floatingInputGrid" label="Job Title">
                <Form.Control type="text" placeholder="Job Title" />
              </FloatingLabel>
            </Col>
            <Col lg>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Location"
              >
                <Form.Select aria-label="Select Location">
                  <option d="true">Open to select state</option>
                  <States />
                </Form.Select>
              </FloatingLabel>
            </Col>
            <Col sm>
            <Button type="submit" className="banner__button" variant="light" size="lg">Submit</Button>
            </Col>
          </Row>
        </Form>
        <Container className="mt-5">
          <div className='text-center text-light mb-3'>
            <h4>Popular Search</h4>
          </div>
          <div className='banner__popsearch'>
              <div >
                  {popsearchs.map(popsearch =>  (
                    <Button 
                      className='banner__popbutton' 
                      size="sm" 
                      variant="secondary" 
                      key={popsearch.name}
                    >
                      <Icon.Search/> {popsearch.name}
                    </Button>
                  ))}
              </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Banner
