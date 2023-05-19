import React from "react";
import { Button, Container, Row, Col } from "reactstrap";
import Image from "next/image";

class Visi extends React.Component {
  render() {
    return (
      <>
        <section className="section section-lg section-nucleo-icons pb-250">
          <Container>
            <Row className="justify-content-center">
              <Col className="text-center" lg="8">
                <Image
                  alt="..."
                  className="img-fluid"
                  src={require("../../assets/logo.webp")}
                  width={240}
                  height={60}
                />
                {/* <h2 className="display-3">Lorem Ipsum</h2> */}
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lectus nulla at volutpat diam ut. Enim facilisis gravida neque
                  convallis.
                </p>
                <div className="btn-wrapper">
                  <Button
                    color="warning"
                    href="https://viapulsa.com"
                    target="_blank"
                  >
                    Kunjungi Kami
                  </Button>
                </div>
              </Col>
            </Row>
            <div className="blur--hover">
              {/* <a href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page"> */}
              <div className="icons-container blur-item mt-5 on-screen">
                <i className="icon ni ni-diamond" />
                <i className="icon icon-sm ni ni-album-2" />
                <i className="icon icon-sm ni ni-app" />
                <i className="icon icon-sm ni ni-atom" />
                <i className="icon ni ni-bag-17" />
                <i className="icon ni ni-bell-55" />
                <i className="icon ni ni-credit-card" />
                <i className="icon icon-sm ni ni-briefcase-24" />
                <i className="icon icon-sm ni ni-building" />
                <i className="icon icon-sm ni ni-button-play" />
                <i className="icon ni ni-calendar-grid-58" />
                <i className="icon ni ni-camera-compact" />
                <i className="icon ni ni-chart-bar-32" />
              </div>
              <span className="blur-hidden display-3 text-warning text-center">
                &quot; It&apos;s Important To Connect Like You Are Connected.
                &quot;
              </span>
              {/* </a> */}
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Visi;
