import React from 'react'
import {Carousel, Image, Row, Col, Container} from 'react-bootstrap';

function OurApproach() {
  return (
    <>
       <Container className='text-center'> 
       <div className="unique_text">
          <h2>
         <span style={{ color: "#A6CE41" }}>What’s Different about</span><br/> Our Approach
          </h2> 
          </div>
          </Container>
     <Container  className='b-about' fluid>
    <Row>
        <Col lg={9}>
        <Image
              src="./images/Group-1907.png"
              class="card-img-top"
              alt="..."
            />
        </Col>
        <Col lg={3} className='t-about d-flex flex-column justify-content-center'>
           <p>
           Our model provides multiple benefits to People—by creating jobs and a sustainable livelihood; Planet—through reduced plastic use and tree plantation; and Stakeholders—by ensuring prosperity of everybody involved in the whole process.
           </p>
        </Col>
    </Row>
       </Container>
       <Container className='text-center'>
       <Image
              src="./images/Ellipse-left.png"
              className="card-img-top ellipes"
              alt="..." 
            />
       </Container>
       <Container  className='b-about' fluid>
    <Row>
        <Col lg={9}>
        <Image
              src="./images/Group-1905.png"
              class="card-img-top"
              alt="..."
            />
        </Col>
        <Col lg={3} className='t-about d-flex flex-column justify-content-center'>
           <p>
           Right from partnership formats, virtual platforms and training materials to workflows, quality assurance, accounting and sharing methods, all the resources can be used by any of our stakeholders, so they can succeed in adopting circularity.
           </p>
        </Col>
    </Row>
       </Container>
       <Container className='text-center'>
       <Image
              src="./images/Ellipse-right.png"
              className="card-img-top ellipes"
              alt="..." 
            />
       </Container>
       <Container  className='b-about' fluid>
    <Row>
        <Col lg={9}>
        <Image
              src="./images/Group-1903.png"
              className="card-img-top "
              alt="..."
            />
        </Col>
        <Col lg={3} className='t-about d-flex flex-column justify-content-center'>
           <p>
           Our model creates a positive impact by lowering the amount of low-quality plastic that must be disposed, in addition to reducing the usage of virgin plastic in the apparel industry.
           </p>
        </Col>
    </Row>
       </Container>
       <Container className='text-center'>
       <Image
              src="./images/Ellipse-left.png"
              className="card-img-top ellipes"
              alt="..." 
            />
       </Container>
       <Container  className='b-about' fluid>
    <Row>
        <Col lg={9}>
        <Image
              src="./images/Group-1901.png"
              className="card-img-top "
              alt="..."
            />
        </Col>
        <Col lg={3} className='t-about d-flex flex-column justify-content-center'>
           <p>
           We engage local stakeholders to create a local ecosystem, This reduces the need for centralisation, ensures circularity and causes minimal CO2 emissions. Our processes also generate jobs for the poorest in the area, boosting the local economy.
           </p>
        </Col>
    </Row>
       </Container>
       <Container className='text-center'>
       <Image
              src="./images/Ellipse-right.png"
              className="card-img-top ellipes"
              alt="..." 
            />
       </Container>
       <Container  className='b-about' fluid>
    <Row>
        <Col lg={9}>
        <Image
              src="./images/Group-1899.png"
              class="card-img-top "
              alt="..."
            />
        </Col>
        <Col lg={3} className='t-about d-flex flex-column justify-content-center'>
           <p>
           Our scale-up model promises a win-win-win situation for all stakeholders and incentivises action from them. We are actively scaling up to other forms of apparel plastic to maximise our reach and impact.
           </p>
        </Col>
    </Row>
       </Container>
       <Container className='text-center'>
       <Image
              src="./images/Ellipse-left.png"
              className="card-img-top ellipes"
              alt="..." 
            />
       </Container>
       <Container  className='b-about' fluid>
    <Row>
        <Col lg={9}>
        <Image
              src="./images/Group-1896.png"
              className="card-img-top justify-content-start "
              alt="..."
            />
        </Col>
        <Col lg={3} className='t-about d-flex flex-column justify-content-center'>
           <p>
           Through reuse (80%) and recycling (20%), we ensure, and have proven on scale, that hanger circularity is possible.
           </p>
        </Col>
    </Row>
       </Container>
       <Container className='text-center'>
       <Image
              src="./images/Ellipse-right.png"
              className="card-img-top ellipes"
              alt="..." 
            />
       </Container>
    </>
  )
}

export default OurApproach
