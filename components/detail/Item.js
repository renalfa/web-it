import React from "react";
import { Card, CardImg, Container, Row, Col } from "reactstrap";
import parse from "html-react-parser";

const Item = ({ imgurl, judul, content }) => {
  return (
    <Container>
      <Row className="row-grid align-items-center rounded bg-secondary">
        <Col>
          <div className="px-md-5 py-3 py-md-5">
            <Card className="bg-default border-0">
              <CardImg
                alt="..."
                src={imgurl}
                top
                style={{ maxHeight: "500px", objectFit: "cover" }}
              />
            </Card>
            <h3 className="mt-4">{judul}</h3>
            <div
              style={{ fontWeight: 300 }}
              className="text-justify"
              dangerouslySetInnerHTML={{ __html: content }}
            ></div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Item;
