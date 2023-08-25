import React from "react";
import {Image, Container, Col, Row } from "react-bootstrap";

function Unique() {
  return (
    <>
      <Container className="text-center mb-5">
        <div className="unique_text">
          <h2>
            What Makes Us <span style={{ color: "#A6CE41" }}>Unique </span>
          </h2>
          <p>
            The well-being of people, the planet and prosperity of all our
            <br />
            stakeholders lie at the heart of everything we do.
          </p>
        </div>
        <Row>
          <Col lg={4} className="mb-4">
            <div className="card">
              <Image src="./images/people.png" class="card-img-top" alt=" " />
              <div className="card-body">
                <p className="card-text">
                We provide communities with increased employment, social equity and awareness of environmental protection methods, and better health.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
          <div className="card">
              <Image src="./images/people.png" class="card-img-top" alt="test  " />
              <div className="card-body">
                <p className="card-text">
                We improve the health of the environment by reducing plastic waste and carbon footprint, while ameliorating waste management.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
          <div className="card">
              <Image src="./images/people.png" class="card-img-top" alt="test  " />
              <div className="card-body">
                <p className="card-text">
                We enable companies to significantly reduce their costs, increase profits, improve reputation and contribute to sustainability.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Unique;
