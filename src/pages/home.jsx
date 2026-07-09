import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

export default function HomePage() {
  return (

    <section>
      {/* Hero Section */}

      <Container fluid className="text-center bg-light py-5">
        <Row className="justify-content-center pt-4 mb-4">
          <Col lg={8} md={10}>
            <h1 className="fw-bold display-4 pb-4 text-dark">
              Effortless task <br /> management, <span className='text-warning'>anytime</span>
            </h1>
            <p className="text-muted fs-5 pb-5 px-md-5">
              Manage tasks and projects easily with an all-in-one platform designed for seamless collaboration
            </p>
            <div className="d-flex justify-content-center gap-3 mb-5">
              <Button size="lg" className="px-4 py-2 border-0 bg-outline-primary shadow-sm">
                Request a Demo
              </Button>
              <Button variant="outline-primary" size="lg" className="px-4 py-2 border shadow-sm">
                Contact Sales
              </Button>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mt-4">
          <Col md={11} className="text-center">
            <img src='/images/home/HeroSection.png' alt=''
              className='w-100 img=fluid'
            />
          </Col>
        </Row>
      </Container>

      {/* Trusted */}

      <Container fluid className='py-5'>
        <Row className="justify-content-center text-center ">
          <Col lg={8} md={10}>
            <p className="text-danger mb-4 px-md-5">
              Benefits
            </p>
            <h1 className="fw-bold display-4 pb-3 text-dark">
              The smart Choice for your team
            </h1>
            <p className="text-muted mb-4 px-md-5">
              Everything you need to simplify your projects, boost productivity, and keep your team aligned
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center align-items-center py-4 g-5 text-center">
          <Col xs={6} sm={4} md={2}>
            <img src="/images/home/Mailchimp.png" alt="Mailchimp logo" className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="/images/home/Doordash.png" alt="DoorDash logo" className="img-fluid " />
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="/images/home/Google.png" alt="Google logo" className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="/images/home/Spotify.png" alt="Spotify logo" className="img-fluid" />
          </Col>
          <Col xs={6} sm={4} md={2}>
            <img src="/images/home/Webflow.png" alt="Webflow logo" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section>

    
  )
}