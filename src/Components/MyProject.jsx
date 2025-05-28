import "./MyProject.css";
import { Project } from "../Data/Project";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import Modal from "react-modal";

// Required for accessibility
Modal.setAppElement("#root");

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <div className="arrow next" style={{backgroundColor:"var(--btn-bg-color)",borderRadius:"2px",position:"absolute",right:"-10px"}} onClick={onClick}>
    <FaArrowRight  style={{overflow:"hidden"}}/>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="arrow prev" style={{backgroundColor:"var(--btn-bg-color)",borderRadius:"2px",position:"absolute",left:"-10px"}}  onClick={onClick}>
    <FaArrowLeft   style={{overflow:"hidden"}}/>
  </div>
);

const MyProject = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (item) => {
    setModalData(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalData(null);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="project-container">
      <style>
        {`
      .clamp-text {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    `}
      </style>
      <h2 className="project-title" style={{color:'var(--text-color)'}}>My Projects</h2>
      <Slider {...settings}>
        {Project.map((item) => (
          <div className="project-slide" key={item.id}>
            <div className="project-card">
              <div className="image-wrapper">
                <img src={item.pic} alt={item.title} className="project-img" />
              </div>
              <h3>{item.title}</h3>
              <div
                style={{
                  margin: "10px 0",
                  overflow: "scroll",
                  whiteSpace: "nowrap",
                  paddingBottom: "5px",
                  scrollbarWidth: "none", // For Firefox
                  msOverflowStyle: "none", // For IE and Edge
                }}
                className="hide-scrollbar"
              >
                {item.language.split(",").map((lang, index) => (
                  <button
                    key={index}
                    style={{
                      marginRight: "6px",
                      padding: "4px 10px",
                      fontSize: "12px",
                      background: "#eee",
                      border: "1px solid #ccc",
                      borderRadius: "12px",
                      cursor: "default",
                    }}
                  >
                    {lang.trim()}
                  </button>
                ))}
              </div>

              <p className="clamp-text">{item.description}</p>
              <button className="learn-button" onClick={() => openModal(item)}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </Slider>

      {/* Modal using inline CSS */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            maxWidth: "500px",
            width: "90%",
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          },
          overlay: {
            backgroundColor: "rgba(0,0,0,0.6)",
            zIndex: 1000,
          },
        }}
      >
        <button
          onClick={closeModal}
          style={{
            position: "absolute",
            top: 10,
            right: 15,
            background: "transparent",
            border: "none",
            fontSize: "24px",
            cursor: "pointer",
            color: "#333",
          }}
        >
          &times;
        </button>

        {modalData && (
          <div>
            <h2 style={{ marginBottom: "10px", color: "#222" }}>
              {modalData.title}
            </h2>
            <p>
              <strong>Language:</strong> {modalData.language}
            </p>
            <p style={{ marginTop: "10px", color: "#555" }}>
              {modalData.description}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MyProject;
