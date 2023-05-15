import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col,
  CardImg,
} from "reactstrap";
import Image from "next/image";
// import { artikel } from "../../assets/data/data";
import parser from "html-react-parser";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";
import { firestore } from "../../config/firebase";

const Artikel = () => {
  const router = useRouter();
  const [artikel, setArtikel] = useState([]);

  useEffect(() => {
    const colRef = collection(firestore, "content_it");
    getDocs(colRef).then((querySnapshot) => {
      let array = [];
      querySnapshot.forEach((doc) => array.push(doc.data()));
      setArtikel(array);
    });
  }, []);

  return (
    <section className="section section-lg pt-lg-0 mt--100">
      <Container>
        <Row className="justify-content-center">
          <Col lg="12">
            <Swiper
              style={{ padding: 40 }}
              slidesPerView={"auto"}
              spaceBetween={15}
              pagination={{ clickable: true }}
              modules={[Pagination]}
            >
              {artikel.map((data, i) => (
                <SwiperSlide key={i} style={{ maxWidth: 300 }}>
                  <Card className="card-lift--hover shadow border-0">
                    <CardImg
                      top
                      src={data?.imgurl}
                      style={{
                        maxHeight: 180,
                        objectFit: "cover",
                        objectPosition: "center",
                      }}
                    />
                    <CardBody className="py-4">
                      <h6 className="text-primary text-uppercase">
                        {data?.judul}
                      </h6>
                      <p className="description mt-3">
                        {parser(
                          data.content.slice(0, 150) +
                            (data.content.length > 150 ? "..." : "")
                        )}
                      </p>
                      <Button
                        className="mt-2"
                        color="primary"
                        onClick={() => router.replace(`/${data?.judul}`)}
                      >
                        Learn more
                      </Button>
                    </CardBody>
                  </Card>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Artikel;
