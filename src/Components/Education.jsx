import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import './Education.css';

const Education = () => {
  const { education } = useContext(MyContext);

  if (!education) return <p>Loading education data...</p>;

  return (
    <div>
      <h1 className="text-center mx-2">
        <span style={{ color: "var(--btn-bg-color)" }}>Educations</span>
      </h1>
      <h4 className="text-center" style={{ color: 'var(--text-color)' }}>
        My Academic and Professional Journey
      </h4>

      <div className="education-scroll-container">
        <div className="education-wrapper">
          {education.map((section) => (
            <div key={section.id} className="education-card">
              <h2 className="card-title text-center">{section.heading}</h2>
              <div className="card-steps">
                {section.one.map((item, index) => (
                  <div className="step-item" key={index}>
                    <div className="step-line" />
                    <div className="step-content">
                      <h3>{item.sub}</h3>
                      <p><strong>Year : </strong> {item.passedout}</p>
                      <p><strong>Institute:</strong> {item.institute}</p>
                      <p><strong>Location:</strong> {item.locations}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
