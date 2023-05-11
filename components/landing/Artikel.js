import React from 'react';
import {
    Badge,
    Button,
    Card,
    CardBody,
    Container,
    Row,
    Col
  } from "reactstrap";

const Artikel = () => {
    return (
        <section className="section section-lg pt-lg-0 mt--100">
            <Container>
            <Row className="justify-content-center">
                <Col lg="12">
                <Row className="row-grid">
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                            Download Argon
                        </h6>
                        <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                        </p>
                        <div>
                            <Badge color="primary" pill className="mr-1">
                            design
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            system
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            creative
                            </Badge>
                        </div>
                        <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            Learn more
                        </Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                        </div>
                        <h6 className="text-success text-uppercase">
                            Build Something
                        </h6>
                        <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                        </p>
                        <div>
                            <Badge color="success" pill className="mr-1">
                            business
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                            vision
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                            success
                            </Badge>
                        </div>
                        <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            Learn more
                        </Button>
                        </CardBody>
                    </Card>
                    </Col>
                    <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                        <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                        </div>
                        <h6 className="text-warning text-uppercase">
                            Prepare Launch
                        </h6>
                        <p className="description mt-3">
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                        </p>
                        <div>
                            <Badge color="warning" pill className="mr-1">
                            marketing
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                            product
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                            launch
                            </Badge>
                        </div>
                        <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            Learn more
                        </Button>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Container>
        </section>
    )
}

export default Artikel