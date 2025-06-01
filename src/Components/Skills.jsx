import { Container } from "react-bootstrap";
// import { Myskill } from "../Data/Skills";
import "./Skills.css";
import { useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { MyContext } from "../Context/MyContext";

const Skills = () => {
  const {Myskilldata} = useContext(MyContext)
  const { ref, inView } = useInView({ triggerOnce: true });
  const [animatedPercentages, setAnimatedPercentages] = useState(
    Myskilldata.map(() => 0)
  );

  useEffect(() => {
    if (inView) {
      Myskilldata.forEach((skill, i) => {
        let count = 0;
        const interval = setInterval(() => {
          count += 1;
          setAnimatedPercentages((prev) => {
            const updated = [...prev];
            updated[i] = count;
            return updated;
          });
          if (count >= skill.percentage) clearInterval(interval);
        }, 50);
      });
    }
  }, [inView]);

  return (
    <Container>
        <h1 className="mt-3"style={{color:"var(--btn-bg-color)"}}>Skills</h1>
    <h3 style={{color:'var(--text-color)'}}>A Showcase of My Technical Strengths</h3>

      <div className="skills-container" ref={ref}>
        {Myskilldata.map((skill, i) => (
          <div className="skill-card" key={skill.id}>
            <div className="skill-circle">
              <img src={skill.pic} alt={skill.name} className="skill-icon" />
              <div className="skill-percent">{animatedPercentages[i]}%</div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{
                    width: `${animatedPercentages[i]}%`,
                    backgroundColor: skill.rangecolor,
                  }}
                ></div>
              </div>
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skills;
