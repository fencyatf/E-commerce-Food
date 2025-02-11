import React from 'react';
import { 
  Button, Card, CardBody, Col, Container, FormControl, 
  FormGroup, FormLabel, Row, Form 
} from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="container my-5">
      {/* Section Heading */}
      <div className="text-center mb-4">
        <h2 className="text-muted">Get in Touch</h2>
        <h1 className="aboutus display-4 fw-bold">Contact Us</h1>
      </div>

      {/* Contact Form Section */}
      <Container className="d-flex justify-content-center">
        <Row className="w-100" style={{ maxWidth: "600px" }}>
          <Col>
            <Card className="shadow-lg">
              <CardBody>
                <h2 className="text-center mb-4" style={{ fontFamily: "Brush Script MT, cursive" }}>Drop us a line</h2>
                <Form>
                  {/* Name Fields */}
                  <FormGroup className="mb-3" controlId="formBasicName">
                    <FormLabel>Full Name:</FormLabel>
                    <FormControl type="text" placeholder="Your Name" />
                  </FormGroup>

                  {/* Email Field */}
                  <FormGroup className="mb-3" controlId="formBasicEmail">
                    <FormLabel>Email Address:</FormLabel>
                    <FormControl type="email" placeholder="Email address" />
                  </FormGroup>

                  {/* Message Field */}
                  <FormGroup className="mb-3" controlId="formBasicMessage">
                    <FormLabel>Message:</FormLabel>
                    <FormControl as="textarea" rows={3} placeholder="Your message..." />
                  </FormGroup>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
