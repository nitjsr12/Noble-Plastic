import CountUp from "react-countup";
import { Image, Container, Col, Row } from "react-bootstrap";
import React from "react";

function counter() {
  return (
    <>
      <Container className="text-center">
        <div className="unique_text">
          <h2>
            Our <span style={{ color: "#A6CE41" }}>Impact</span>
          </h2>
        </div>
        <Row className=" text-center">
          <Col lg={6} className="d-flex justify-content-start mb-4">
            <div className="card text-center impact ">
              <Image
                src="./images/rupee.svg"
                class="card-img-top rupee"
                alt="..."
              />
              <div className="card-body">
                <CountUp
                  start={0}
                  end={90}
                  separator=" "
                  prefix="INR  "
                  suffix="+ lakh"
                  className="increment"
                ></CountUp>
              </div>
              <p className="card-text impact-text">
                generated in wages for
                <br /> marginalised groups
              </p>
            </div>
          </Col>
          <Col lg={6} className="justify-content-end">
            <div className="card text-center impact ">
              <Image
                src="./images/plants.svg"
                class="card-img-top plants"
                alt="..."
              />
              <div className="card-body">
                <CountUp
                  start={0}
                  end={20500}
                  separator=","
                  prefix=""
                  suffix="+"
                  className="increment-1"
                ></CountUp>
              </div>
              <p className="card-text impact-text">
                trees planted in Karnataka
                <br /> to achieve carbon neutrality
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="text-center">
        <Row className=" text-cente">
          <Col lg={6} className="justify-content-end">
            <div className="card text-center impact ">
              <Image
                src="./images/heart.svg"
                class="card-img-top heart"
                alt="..."
              />
              <div className="card-body">
                <CountUp
                  start={0}
                  end={50}
                  separator=""
                  prefix="INR  "
                  suffix="+ lakh"
                  className="increment-1"
                ></CountUp>
              </div>
              <p className="card-text impact-text">
                invested in improving
                <br />
                health outcomes
              </p>
            </div>
          </Col>
          <Col lg={6} className="justify-content-end align-items-end">
            <div className="card text-center impact ">
              <Image
                src="./images/garbage.svg"
                class="card-img-top garbage"
                alt="..."
              />
              <div className="card-body">
                <CountUp
                  start={0}
                  end={600}
                  separator=" "
                  prefix=""
                  suffix="+ tonnes"
                  className="increment"
                ></CountUp>
              </div>
              <p className="card-text impact-text">
                of plastic kept away from landfills & waterways
                <br /> via repurposing and recycling
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            {" "}
            <div className="col-12 d-flex justify-content-center align-items-center ">
              <button type="button" class="btn btn-impact">
                LEARN MORE
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default counter;
