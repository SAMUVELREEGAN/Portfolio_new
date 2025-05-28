import './MyExperience.css';
import { Experience } from '../Data/Experience';
import { useState } from 'react';
import { FaBuilding, FaMapMarkerAlt, FaBriefcase, FaClock } from 'react-icons/fa';
import pic from '../assets/ex.png';
import bgImage from '../assets/pro1.jpg';
import { Container, Row, Col } from 'react-bootstrap';

const MyExperience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = Experience[currentIndex];

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="experience-section">
     

      <div
        className="experience-background"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Container>
          <Row className="align-items-center">
            <Col md={7} className="order-2 order-md-1">
             <h2 className="experience-title" style={{color:'white'}}>My Experience</h2>
              <div className="circle-selector">
                {Experience.map((_, idx) => (
                  <div
                    key={idx}
                    className={`circle ${currentIndex === idx ? 'active' : ''}`}
                    onClick={() => handleSelect(idx)}
                  >
                    {idx + 1}
                  </div>
                ))}
              </div>

              <div className="experience-card fade-in">
                               <div className="experience-details">
                  <h3 className="company-name"> <FaBuilding className="experience-icon" />{currentItem.CompanyName}</h3>
                  <div className="info-row">
                    <FaBriefcase className="info-icon" />
                    <span className="role">{currentItem.MyRole}</span>
                  </div>
                  <div className="info-row">
                    <FaClock className="info-icon" />
                    <span className="duration">{currentItem.deuration}</span>
                  </div>
                  <div className="info-row">
                    <FaMapMarkerAlt className="info-icon" />
                    <span className="location">{currentItem.location}</span>
                  </div>
                  {currentItem.description && (
                    <p className="description">{currentItem.description}</p>
                  )}
                </div>
              </div>
            </Col>

            <Col md={5} className="text-center order-1 order-md-2">
              <img src={pic} alt="Experience Visual" className="experience-img" />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default MyExperience;
