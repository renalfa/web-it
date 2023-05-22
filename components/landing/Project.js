import React from "react";
import Link from "next/link";
import { Card, CardImg, Container, Row, Col } from "reactstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Project = () => {
  return (
    <div className="bg-secondary p-5">
      <Container className="container-lg">
        <Row className="justify-content-center">
          <Col lg="12">
            <Swiper
              slidesPerView={1}
              spaceBetween={15}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((data, i) => (
                <SwiperSlide key={i} style={{ maxWidth: 1200 }}>
                  <Card className="card-lift--hover shadow border-0">
                    {/* <Link href="/landing"> */}
                    <Image
                      alt="..."
                      src={require(`../../assets/slide/${data}.jpeg`)}
                    />
                    {/* </Link> */}
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
        {/* <Row>
          <Col className="mb-5 mb-md-0" md="6">
            <Card className="card-lift--hover shadow border-0">
              <Link href="/landing">
              <Image
                alt="..."
                src={require("../../assets/img/theme/landing.jpg")}
              />
              </Link>
            </Card>
          </Col>
          <Col className="mb-5 mb-lg-0" md="6">
            <Card className="card-lift--hover shadow border-0">
              <Link>
              <Image
                alt="..."
                src={require("../../assets/img/theme/profile.jpg")}
              />
              </Link>
            </Card>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Project;
