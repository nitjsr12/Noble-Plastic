import React from 'react'
import {Carousel, Image, Row, Col, Container} from 'react-bootstrap';

function CreateImpact() {
  return (
    <>
      <Container className='text-center'> 
       <div className="unique_text">
          <h2>
         <span style={{ color: "#A6CE41" }}>Here Are the Ways through Which</span> We Create Impact
          </h2> 
          </div>
          </Container>
          <Container className='text-center'>
            <Row>
              <Col lg={6} className='justify-content-end'>
              <Image
              src="./images/Image-1-1.webp"
              className="card-img-top i-impact "
              alt="..." 
            />     
              </Col>
              <Col lg={6} className='justify-content-start'>
           <Container style={{ backgroundImage: `url("/images/Paper-2.svg")` }}
        className="papper-1 d-flex ">
          <h2 className=' justify-content-center t-impact'>
          Hanger Repurposing<br/> & Recycling
          </h2>
        </Container>
             <p className='p-impact'>
             We repurpose & recycle used Apparel Plastic Hangers to ensure that existing hangers are rechanneled, fewer hangers are produced, less plastic is wasted and a circular economy of hangers is created.
             </p>
              </Col>
              <hr style={{ align: "center" }}  className='new'/>
              </Row>
          </Container>
          <Container className='text-center'>
            <Row>
              <Col lg={6} className='justify-content-end'>
              <Image
              src="./images/Image-1-2.webp"
              className="card-img-top i-impact "
              alt="..." 
            />     
              </Col>
              <Col lg={6} className='justify-content-start'>
           <Container style={{ backgroundImage: `url("/images/Paper-2.svg")` }}
        className="papper-1 d-flex ">
          <h2 className=' justify-content-center t-impact'>
          Film Plastic <br/> Recycling
          </h2>
        </Container>
             <p className='p-impact'>
             We collect and recycle films and other plastics found in apparel stores, factories and warehouses. The end products are channelled into the production of films and other materials that are useful for brands.
             </p>
              </Col>
              <hr style={{ align: "center" }}  className='new-1'/>
              </Row>
          </Container>
          <Container className='text-center'>
            <Row>
              <Col lg={6} className='justify-content-end'>
              <Image
              src="./images/thumbnail_Image-1.webp"
              className="card-img-top i-impact "
              alt="..." 
            />     
              </Col>
              <Col lg={6} className='justify-content-start'>
           <Container style={{ backgroundImage: `url("/images/Paper-2.svg")` }}
        className="papper-1 d-flex ">
          <h2 className=' justify-content-center t-impact'>
          Pyrolysis
          </h2>
        </Container>
             <p className='p-impact'>
             Through Pyrolysis, we convert single-use plastics (SUPs) into fuel for energy generation. Noble Plastics orchestrates this entire process by facilitating connections between generators of non-recyclable waste and pyrolysis recyclers, who ensure these wastes are properly used.
             </p>
              </Col>
              <hr style={{ align: "center" }}  className='new'/>
              </Row>
          </Container>
    </>
  )
}

export default CreateImpact
