import React, { useEffect, useState } from "react";
import { Container, Row, Col, Modal, Button, Form } from "react-bootstrap";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Bounds } from "@react-three/drei";
import { MyModel } from "./MyModel";
import { useNavigate } from "react-router-dom";
import { landingpara } from "../Data/LandingPara";
import './LandingPage.css'

const LandingPage = () => {
  const [userName, setUserName] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName && savedName.trim() !== "") {
      setUserName(savedName.trim());
      setShow(false);
    } else {
      setShow(true);
    }
  }, []);

  const handleSubmit = () => {
    const trimmedName = inputValue.trim();
    if (trimmedName !== "") {
      localStorage.setItem("userName", trimmedName);
      setUserName(trimmedName);
      setShow(false);
    }
  };

  const goToFullModel = () => {
    navigate("/model");
  };

  return (
    <>
      <style>{`
        @keyframes fadeInUpInfinite {
          0%, 100% {
            opacity: 0.6;
            transform: translateY(10px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up-infinite {
          animation: fadeInUpInfinite 3s ease-in-out infinite;
        }
        .fade-in-up-delay-1 {
          animation-delay: 0s;
        }
        .fade-in-up-delay-2 {
          animation-delay: 0.5s;
        }
        .fade-in-up-delay-3 {
          animation-delay: 1s;
        }
        .fade-in-up-delay-4 {
          animation-delay: 1.5s;
        }
        .fade-in-up-delay-5 {
          animation-delay: 2s;
        }
      `}</style>

      <Container className="py-5">
        <Row className="align-items-center justify-content-center">
          {/* Text Column */}
          <Col xs={12} md={7} className="text-center mb-4 mb-md-0">
            <h1 className="fade-in-up-infinite fade-in-up-delay-1" style={{ color: 'var(--text-color)' }}>
              Welcome,
              <span style={{ color: "var(--btn-bg-color)" }}>
                {userName ? ` ${userName}!` : ""}
              </span>
            </h1>

            {landingpara.map((item, index) => (
              <p
                key={item.id}
                className={`fade-in-up-infinite fade-in-up-delay-${index + 2}`}
                style={{
                  fontSize: index === 0 ? "1.2rem" : "1rem",
                  lineHeight: "1.6",
                  color: 'var(--text-color)',
                  fontWeight: index === 2 ? "500" : "normal",
                  marginTop: index === 2 ? "1.5rem" : "0",
                }}
              >
                {item.p1}
              </p>
            ))}

            <Button
              size="lg"
              onClick={goToFullModel}
              style={{
                marginTop: "1.5rem",
                color: "var(--btn-text-color)",
                backgroundColor: "var(--btn-bg-color)",
                border: "1px solid var(--text-color)",
              }}
              className="fade-in-up-infinite fade-in-up-delay-5"
            >
              View 3D Model Fullscreen
            </Button>
          </Col>

          {/* 3D Model Column */}
          <Col xs={12} md={5}>
  <div style={{ width: "100%", height: "500px" }} className="model-3d">
    <Canvas style={{ width: "100%", height: "100%" }}>
      <OrbitControls makeDefault />
      <Environment preset="studio" />
      <Bounds fit clip observe margin={0.2}>
        <MyModel />
      </Bounds>
    </Canvas>
  </div>
</Col>

        </Row>

        {/* Modal for user name */}
        <Modal show={show} onHide={() => {}} backdrop="static" centered>
          <Modal.Header>
            <Modal.Title>Welcome! What's your sweet name?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="primary"
              onClick={handleSubmit}
              disabled={!inputValue.trim()}
            >
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </>
  );
};

export default LandingPage;
