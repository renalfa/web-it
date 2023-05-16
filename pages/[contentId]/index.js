import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
// nodejs library that concatenates classes
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import DemoNavbar from "../../components/Navbars/DemoNavbar";
import Footer from "../../components/footer/Footer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../config/firebase";

const Index = () => {
  const router = useRouter();
  const { contentId } = router.query;
  const [artikel, setArtikel] = useState({});

  const getArtikel = async () => {
    const colRef = collection(firestore, "content_it");
    const judulRef = query(colRef, where("judul", "==", contentId));
    const res = await getDocs(judulRef);
    res.docs.forEach((doc) => {
      setArtikel(doc.data());
    });
  };

  useEffect(() => {
    getArtikel();
  }, []);

  return (
    <>
      <DemoNavbar />
      <div className="position-relative" style={{ maxHeight: 200 }}>
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
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
      </div>
      <section className="section mt--100">
        <Container>
          <Row className="row-grid align-items-center rounded bg-secondary">
            <Col>
              <div className="px-md-5 py-3 py-md-5">
                <Card className="bg-default border-0">
                  <CardImg
                    alt="..."
                    src={artikel?.imgurl}
                    top
                    style={{ maxHeight: "500px", objectFit: "cover" }}
                  />
                </Card>
                <h3 className="mt-4">{artikel?.judul}</h3>
                <p className="text-justify">{artikel?.content}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default Index;
