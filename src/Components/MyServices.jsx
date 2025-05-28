import React, { useState } from "react";
import { Services } from "../Data/Services";
import { Modal, Button, Container, Row, Col, Card } from "react-bootstrap";
import { Translate } from "@mui/icons-material";

const MyServices = () => {
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
    <Container className="my-4" >
      <h1 className=" mb-4" style={{color:'var(--text-color)'}}> <span style={{color:"var(--btn-bg-color)" }}>Services </span>I Provide</h1>
      <Row xs={1} sm={2} md={3} className="g-4">
        {Services.map((service, index) => (
          <Col key={index}>
            <Card className="h-100 text-center" style={{backgroundColor:"var(--third-color)"}}>
              <Card.Img
                variant="top"
                src={service.pic}
                alt={service.title}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "50%",
                  margin: "20px  10px",
                }}
              />
              <Card.Body className="d-flex flex-column" style={{color:'var(--text-color)'}}>
                <Card.Title
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textAlign: "left",
                  }}
                >
                  {service.title}
                </Card.Title>
                <Card.Text
                  style={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    textAlign: "left",
                  }}
                >
                  {service.contant}
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleLearnMore(service)}
                  className="mt-auto align-self-start"
                >
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal for full text */}
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
