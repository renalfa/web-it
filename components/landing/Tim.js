import React from "react";
import { Button, Container, Row, Col, Card } from "reactstrap";
import { karyawan } from "../../assets/data/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import Image from "next/image";

const Tim = ({ isLogin }) => {
  return (
    <section className="section section-lg mt--200">
      <Container>
        <Row className="justify-content-center text-center mb-lg">
          <Col lg="8">
            <h2 className="display-3">The amazing Team</h2>
            <p className="lead text-muted">
              Introduce our team, from IT Division. &quot; Humans make mistakes,
              but teamwork comes as close to perfection as possible. &quot;
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {karyawan.map((data, i) => (
            <Col key={i} className="d-block mb-5 mb-lg-0" lg="3" md="6">
              <Card className="rounded-5 card-lift--hover shadow border-0 py-4 h-100">
                <div className="px-4 h-100 text-center">
                  <Image
                    alt="..."
                    className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                    src={require("../../assets/img/theme/team-1-800x800.jpg")}
                    width={100}
                    height={100}
                  />
                  <div className="pt-4 text-center">
                    <h6 className="title">
                      <span className="d-block mb-1">{data.nama}</span>
                      <small className="text-muted">{data.as}</small>
                    </h6>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="warning"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-instagram" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="warning"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-whatsapp" />
                      </Button>
                      <Button
                        className="btn-icon-only rounded-circle ml-1"
                        color="warning"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fa fa-linkedin" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        {isLogin && <Button href="/add/tim" className="mt-5 btn-warning text-white">Tambahkan Tim</Button>}
        </Row>
      </Container>
    </section>
  );
};

export default Tim;
