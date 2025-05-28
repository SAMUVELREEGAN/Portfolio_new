import './Education.css';
import { Education1 } from '../Data/Education';

const Education = () => {
  return (
    <div>
      <h1 className="text-center mx-2"><span style={{color:"var(--btn-bg-color)" }}>Educations</span></h1>
      <h4 className="text-center" style={{color:'var(--text-color)'}}>My Academic and Professional Journey</h4>

      <div className="education-scroll-container">
        <div className="education-wrapper">
          {Education1.map((section) => (
            <div key={section.id} className="education-card">
              <h2 className="card-title">{section.heading}</h2>
              <div className="card-steps">
                {section.one.map((item, index) => (
                  <div className="step-item" key={index}>
                    <div className="step-line" />
                    <div className="step-content">
                      <h3>{item.sub}</h3>
                      <p><strong>Passed Out:</strong> {item.passedout}</p>
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
