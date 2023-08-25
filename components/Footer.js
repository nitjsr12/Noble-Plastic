import React from "react";
import { Carousel, Image, Row, Col, Container } from "react-bootstrap";
import Link from "next/link";

function Footer() {
  return (
    <>
      <Container className="footer" fluid>
        <Row className="d-flex flex-row">
          <Col lg={6} className="">
            <Image
              src="./images/Noble-Plastic-footer.svg"
              className="card-img-top footer-logo"
              alt="..."
            />
            <p className="p-footer">
              This initiative has been supported by an Impact Investor and
              fashion retailer Marks & Spencer.
            </p>
            <p className="p-footer">
              Fuzhio Health and Business Services Pvt. Ltd. No. 25, RMV
              <br /> 2nd Stage, AECS Layout, 1st Main Road, Ashwathnagar, <br />
              Bangalore – 560094 <br />
              Phone: +91 937981 5394
            </p>
            <p className="p-footer">
              For more information please email fuzhio@catalysts.org
            </p>
          </Col>
          <Col lg={5} className="">
            <p className="f-title">Send Us a Message</p>
            <form>
  <div className="row mb-4">
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example1" class="form-control"  placeholder="First name"/>
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
        <input type="text" id="form3Example2" class="form-control" placeholder="Last name"/>
      </div>
    </div>
  </div>

  <div class="form-outline mb-4">
    <input type="email" id="form3Example3" class="form-control" placeholder="email ID" />
  </div>

  <div className="form-outline mb-4">
    <textarea type="textarea" id="form3Example4" class="form-control" placeholder="Massage" />
  </div>
<div>
  <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
  </div>
</form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
