import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardFooter,
} from "reactstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../config/firebase";

import "swiper/css";
import "swiper/css/pagination";

const Tim = ({ isLogin }) => {
  const [tim, setTim] = useState([]);

  useEffect(() => {
    const colRef = collection(firestore, "tim_it");
    getDocs(colRef).then((querySnapshot) => {
      let array = [];
      querySnapshot.forEach((doc) => array.push(doc.data()));
      setTim(array);
    });
  }, [tim]);

  return (
    <section id="tim" className="section section-lg mt--200">
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg="8">
            <h2 className="display-3">The amazing Team</h2>
            <p className="lead text-muted">
              Introduce our team, from IT Division. &quot; Humans make mistakes,
              but teamwork comes as close to perfection as possible. &quot;
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="12">
            <Swiper
              style={{ padding: 40 }}
              slidesPerView={"auto"}
              spaceBetween={15}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {tim.map((data, i) => (
                <SwiperSlide key={i} style={{ maxWidth: 250 }}>
                  <Card className="rounded card-lift--hover shadow border-0 pt-4">
                    <div className="px-4 h-100 text-center">
                      <CardImg
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={data.imgurl}
                        style={{
                          height: 120,
                          width: 120,
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                      <div className="pt-4 text-center">
                        <h6 className="title">
                          <span className="d-block mb-1">{data.nama}</span>
                          <small className="text-muted">{data.jabatan}</small>

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
                      {isLogin && (
                        <>
                          <Button
                            style={{
                              position: "absolute",
                              top: -10,
                              right: -10,
                            }}
                            className="btn-icon-only rounded-circle"
                            color="danger"
                          >
                            <i className="fa fa-trash text-white"></i>
                          </Button>
                          <CardFooter className="text-center bg-white border-0">
                            <Button href={`/edit/tim/${data?.nama}`} color="primary">edit</Button>
                          </CardFooter>
                        </>
                      )}
                    </div>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
          {isLogin && (
            <Button href="/add/tim" className="mt-5 btn-warning text-white">
              Tambahkan Tim
            </Button>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Tim;
