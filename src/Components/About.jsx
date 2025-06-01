import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";
import { MyContext } from "../Context/MyContext";

const About = () => {
  const { aboutData } = useContext(MyContext);

  return (
    <div>
      <Container
        fluid
        className="py-5"
        style={{ backgroundColor: "var(--third-color)" }}
      >
        <Container>
          <Row className="align-items-center justify-content-center">
            {/* Image Column */}
            <Col xs={12} md={5}>
              <div style={{ width: "100%" }}>
                {aboutData.map((e, index) => (
                  <div key={index}>
                    <img src={e.pic} alt="" style={{ width: "100%" }} />
                  </div>
                ))}
              </div>
            </Col>

            {/* Text Column */}
            <Col
              xs={12}
              md={7}
              className="mb-4 mb-md-0"
              style={{ color: "var(--text-color)" }}
            >
              <h1 className="mb-3">
                <span style={{ color: "var(--btn-bg-color)" }}>About </span>Me
              </h1>

              {aboutData.map((item) => (
                <div key={item.id}>
                  <h1>
                    {item.question.toUpperCase()}{" "}
                    <span style={{ color: "var(--primary-color)" }}>
                      {item.name.toUpperCase()}
                    </span>
                  </h1>
                  <p>{item.contant}</p>

                  <Row>
                    {item.lists.map((listItem, index) => (
                      <Col key={index} xs={4} className="text-center">
                        <InView triggerOnce>
                          {({ inView, ref }) => (
                            <div ref={ref}>
                              <h3>
                                {inView && (
                                  <CountUp end={listItem.count} duration={5} />
                                )}
                                +
                              </h3>
                              <p>{listItem.type1}</p>
                            </div>
                          )}
                        </InView>
                      </Col>
                    ))}
                  </Row>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default About;
