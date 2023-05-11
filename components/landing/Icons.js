/*!

=========================================================
* Argon Design System React - v1.1.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import Image from "next/image";

class Icons extends React.Component {
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus nulla at volutpat diam ut. Enim facilisis gravida neque convallis.
                </p>
                <div className="btn-wrapper">
                  <Button
                    color="primary"
                    href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/icons?ref=adsr-landing-page"
                  >
                    View demo icons
                  </Button>
                  <Button
                    className="mt-3 mt-md-0"
                    color="default"
                    href="https://nucleoapp.com/?ref=1712"
                    target="_blank"
                  >
                    View all icons
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
                  &quot; It&apos;s Important To Connect Like You Are Connected.  &quot;
                </span>
              {/* </a> */}
            </div>
          </Container>
        </section>
      </>
    );
  }
}

export default Icons;
