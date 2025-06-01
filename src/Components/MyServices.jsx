import React, { useContext, useState } from "react";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";
import { MyContext } from "../Context/MyContext";
import "./MyServices.css";  // import the CSS file

const MyServices = () => {
  const { Servicesdata } = useContext(MyContext);

  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <Container className="my-4">
      <h1 className="my-services-title">
        <span>Services </span>I Provide
      </h1>
      <Row xs={1} sm={2} md={3} className="g-4">
        {Servicesdata.map((service, index) => (
          <Col key={index}>
            <Card className="service-card">
              <Card.Img
                variant="top"
                src={service.pic}
                alt={service.title}
                className="service-card-img"
              />
              <Card.Body className="service-card-body">
                <Card.Title className="service-card-title">
                  {service.title}
                </Card.Title>
                <Card.Text className="service-card-text">
                  {service.contant}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleLearnMore(service)}
                  className="all_btn"
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedService?.contant}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MyServices;
