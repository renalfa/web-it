import React from "react";
import { Container, Row, Col } from "reactstrap";
import { TypeAnimation } from "react-type-animation";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-default">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    <h2 className="mt-4 display-1">
                      Dont believe in just yourself, believe in your team.
                    </h2>
                    <div className="d-flex justify-content-center">
                      <p className="lead text-white mr-2">Innovation, We</p>
                      <p className="lead text-white">
                        <TypeAnimation
                          sequence={[
                            "live It",
                            1000,
                            "love it",
                            1000,
                            "share it",
                            1000,
                            "do it",
                            1000,
                          ]}
                          repeat={Infinity}
                        />
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
