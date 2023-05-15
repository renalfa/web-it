import React from "react";
import Link from "next/link";
import { Card, CardImg, Container, Row, Col } from "reactstrap";
import Image from "next/image";

const Project = () => {
  return (
    <div className="bg-secondary p-5">
      <Container className="container-lg">
        <Row>
          <Col className="mb-5 mb-md-0" md="6">
            <Card className="card-lift--hover shadow border-0">
              {/* <Link href="/landing"> */}
                <Image
                  alt="..."
                  src={require("../../assets/img/theme/landing.jpg")}
                />
              {/* </Link> */}
            </Card>
          </Col>
          <Col className="mb-5 mb-lg-0" md="6">
            <Card className="card-lift--hover shadow border-0">
              {/* <Link"> */}
                <Image
                  alt="..."
                  src={require("../../assets/img/theme/profile.jpg")}
                />
              {/* </Link> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Project;
