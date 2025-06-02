import React, { useEffect, useState, useRef, useContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './Details.css';
import { MyContext } from '../Context/MyContext';

const Details = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 });
  const imageWrapperRef = useRef(null);
  const { info, baseURL } = useContext(MyContext);
  const [showFullDetail, setShowFullDetail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isUnboxed, setIsUnboxed] = useState(false);
  const [animationPlayed, setAnimationPlayed] = useState(false);
  const [named , setNamed] = useState("Hello")

  // List of possible gift messages
  const giftMessages = [
    "Keep pushing your limits! 💪",
    "Today is your day! 🌞",
    "Believe in yourself! ✨",
    "Something exciting is coming! 🎁",
    "Great things take time. Stay patient! ⏳",
    "You're on the right path! 🛤️",
    "Your journey is just beginning! 🚀",
    "Stay curious, stay strong! 🧠💥",
    "One step at a time! 👣",
    "Every effort counts! 🎯",
    "You’re closer than you think! 🏁",
    "Keep going. You’ve got this! 🙌",
    "Let your passion lead you! ❤️‍🔥",
    "The best is yet to come! ❤️"
  ];

  // Pick one random message only once on component mount
  const [giftMessage] = useState(() => {
    const idx = Math.floor(Math.random() * giftMessages.length);
    return giftMessages[idx];
  });

  useEffect(() => {
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

  const imageURL =
    typeof info.mypic1 === "string" && info.mypic1.startsWith("/media")
      ? `${baseURL}${isDarkMode ? info.mypic1 : info.mypic2}`
      : isDarkMode
      ? info.mypic1
      : info.mypic2;

  // Open modal: reset animation states
  const toggleModal = () => {
    setShowModal(true);
    setIsUnboxed(false);
    setAnimationPlayed(false);
  };

  const closeModal = () => setShowModal(false);

  // Image tilt handlers
  function handleMouseMove(e) {
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
  }

  function handleMouseLeave() {
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  }

  function handleTouchMove(e) {
    if (!imageWrapperRef.current || e.touches.length > 1) return;
    const touch = e.touches[0];
    const wrapper = imageWrapperRef.current;
    const rect = wrapper.getBoundingClientRect();
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 15;
    const rotateY = ((x - centerX) / centerX) * 15;
    wrapper.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
  }

  function handleTouchEnd() {
    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  }

  // Animation end handler to show message once
  const handleAnimationEnd = () => {
    if (!animationPlayed) {
      setIsUnboxed(true);
      setAnimationPlayed(true);
    }
  };


  useEffect(()=>
  setNamed(localStorage.getItem("userName")),[])
  return (
    <Container ref={ref} className="my-5 py-5">
      <Row className="align-items-center">
        <Col sm={12} lg={6} md={6} className="text-center text-md-start mb-4 mb-md-0">
          <h3 style={{ color: 'var(--text-color)' }}>Hello There !</h3>
          <h1>
            <span style={{ color: 'var(--text-color)' }}>{info.mynamebefore} </span>
            <strong className={`letter-animation ${inView ? 'animate' : ''}`}>
              {info.mynamebeAfter?.split('-').map((char, index) => (
                <span key={index} style={{ '--i': index, color: 'var(--btn-bg-color)', marginRight: '5px' }}>
                 {char}
                </span>
              ))}
            </strong>
          </h1>
          <h2 className="fw-semibold" style={{ color: 'var(--text-color)' }}>{info.role}</h2>

          <h5 style={{ color: 'var(--text-color)' }}>
            {showFullDetail ? info.detailcontant : `${info.detailcontant?.split(' ').slice(0, 20).join(' ')}...`}
          </h5>

          <div className="d-flex flex-column flex-md-row gap-2 mt-3">
            <Button onClick={toggleModal} className='all_btn'>🎁 Click Me, I'm Someone!</Button>
            <Button   className='all_btn' onClick={() => setShowFullDetail(!showFullDetail)}>
              {showFullDetail ? 'Show Less' : 'More Info'}
            </Button>
          </div>
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

      {/* Manual Modal */}
      {showModal && (
        <div className="manual-modal-overlay" onClick={closeModal}>
          <div
            className="manual-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <button className="manual-modal-close" onClick={closeModal} aria-label="Close modal">&times;</button>
            <h2 id="modal-title" style={{ marginBottom: '20px' }}>🎉 Hey {named}</h2>
            <p>This for you..</p>
            <div className="text-center">
              <div
                className={`gift-box-wrapper ${isUnboxed ? 'opened' : 'opening'}`}
                onAnimationEnd={handleAnimationEnd}
                role="img"
                aria-label="Gift box opening animation"
              >
                <div className="gift-box-base" />
                <div className="gift-box-lid" />
                <div className="gift-ribbon" />
              </div>
              {isUnboxed && (
                <p style={{ fontSize: '1.2rem',  color: 'var(--bg-color)', marginTop: '20px' }}>
                  {giftMessage}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Details;
