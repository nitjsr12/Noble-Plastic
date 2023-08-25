/* eslint-disable react/jsx-no-undef */
import React from "react";
import {Carousel, Image, Container, Row, Col} from 'react-bootstrap';

function Journey() {
  return (
    <>
    <Container className="text-center "> 
    <div className="unique_text">
          <h2>
            Our <span style={{ color: "#A6CE41" }}>Journey</span>
          </h2>
        </div>
        <Row className="d-flex ">
          <Col lg={1} className="d-flex">
          <Image src="/images/Group-1662.png.webp" className=" d-md-block d-none" alt="..."/>
          </Col>
          <Col lg={5} className=" p-journey justify-content-end">
          <p>
            We—Noble Plastics—were incepted as an eco-social initiative by the
            Catalyst Group which champions the effective use of plastic waste,
            while promoting the well-being of people and the planet.
          </p>
          <p>
            Piloted in 2018 along with apparel giant M & S India, our core
            business is to repurpose and recycle apparel plastics, including
            used hangers, sizers, plaques and other plastics from corporations
            in the apparel industry, and ensure that they enter the apparel
            space again. Our operations are currently spread out across two
            major sites in India—Delhi and Bengaluru.
          </p>
          <p>
            The repurposing of hangers is undertaken mainly by women and members
            of marginalised communities, who are hired, trained and empowered to
            work by our organisation. Recycling of hangers and other plastics is
            handled by our partner recycling organisations, which ensures that
            the plastics we work with are handled safely throughout the process.
          </p>
          <p>
            Noble Plastics also works with partners to convert non-recyclable
            plastics into oil via pyrolysis. We aim to pyrolyse 1,000 tonnes of
            plastics and channel them into more productive uses over the next 2
            years.
          </p>
          <p>
            We also measure the carbon footprint that our operations generate
            and plant an equivalent number of trees to ensure carbon neutrality.
          </p>
          </Col>
          <Col lg={5} className="justify-content-end">
          <Image src="/images/journy.webp" className="i-journy" alt="..." width="100%"/> 
          </Col>
          <Col lg={1} className="d-flex justify-content-end ">
          <Image src="/images/Group-1662.png.webp" className=" d-md-block d-none" alt="..."/>
          </Col>
        </Row>
    </Container>
    </>
  );
}

export default Journey;
