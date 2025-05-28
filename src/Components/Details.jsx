import React, { useEffect, useState, useRef } from 'react';
import { Detail } from '../Data/Detail';
import { Container, Row, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './Details.css';

const Details = () => {
  const [info, setInfo] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const imageWrapperRef = useRef(null);

  useEffect(() => {
    setInfo(Detail[0]);

    const theme = document.documentElement.getAttribute('data-theme');
    setIsDarkMode(theme === 'dark');

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme');
          setIsDarkMode(newTheme === 'dark');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e) => {
    const wrapper = imageWrapperRef.current;
    if (!wrapper) return;
    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 50;
    const rotateY = ((x - centerX) / centerX) * 50;
    wrapper.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  const handleTouchMove = (e) => {
    if (!imageWrapperRef.current) return;

    if (e.touches.length > 1) return; // pinch zoom

    const touch = e.touches[0];
    const wrapper = imageWrapperRef.current;
    const rect = wrapper.getBoundingClientRect();

    const deltaX = Math.abs(touch.clientX - rect.left);
    const deltaY = Math.abs(touch.clientY - rect.top);

    // allow vertical scroll
    if (deltaY > deltaX) return;

    e.preventDefault(); // only block horizontal gestures

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;

    wrapper.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleTouchEnd = () => {
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  if (!info) return null;

  const imageURL = isDarkMode ? info.mypic1 : info.mypic2;

  return (
    <Container ref={ref} className="my-5 py-5">
      <Row className="align-items-center">
        <Col sm={12} lg={6} md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h3 style={{ color: 'var(--text-color)' }}>Hello There !</h3>
          <h1>
            <span style={{ color: 'var(--text-color)' }}>{info.mynamebefore}</span>
            <strong className={`letter-animation ${inView ? 'animate' : ''}`}>
              {info.mynamebeAfter?.split('').map((char, index) => (
                <span key={index} style={{ '--i': index, color: 'var(--btn-bg-color)' }}>
                  {char}
                </span>
              ))}
            </strong>
          </h1>
          <h2 className="fw-semibold" style={{ color: 'var(--text-color)' }}>{info.role}</h2>
          <h5 style={{ color: 'var(--text-color)' }}>{info.detailcontant}</h5>
          <button style={{
            width: "100%",
            padding: "5px 0px",
            backgroundColor: "var(--btn-bg-color)",
            color: "var(--text-color)",
            margin: "12px 0px"
          }}>
            SEND MAIL
          </button>
        </Col>

        <Col sm={12} lg={6} md={6} className="d-flex justify-content-center align-items-center">
          <div
            className="image-hover-wrapper"
            ref={imageWrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              backgroundImage: `url(${imageURL})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: '600px',
              width: '100%',
              maxWidth: '500px',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'transform 0.2s ease-out',
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
