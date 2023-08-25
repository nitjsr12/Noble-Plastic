import React from 'react'
import {Carousel, Image, Container, Row, Col} from 'react-bootstrap';

function Imagesecion() {
  return (
    <Container>
        <Row>
          <Col lg={4}>
          <Image
                src="./images/img_1.jpeg"
                className=" img_1"
                alt="..."
              />
          </Col>
          <Col lg={4}>
          <Image
                src="./images/img_2.jpeg"
                className="img_2 "
                alt="..."
              />
          </Col>
          <Col lg={4}>
          <Image
                src="./images/img_3.jpeg"
                className="img_3 "
                alt="..."
              />
          </Col>
        </Row>
       </Container>
  )
}

export default Imagesecion
