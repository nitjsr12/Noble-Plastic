import {Carousel} from 'react-bootstrap';
import Image from 'next/image'



function UncontrolledExample() {
  return (
    <>
    <div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <Image src="/images/Banner-1.png" className="d-block w-100 img-fluid" alt="..." width={200} height={500}/>
      </div>
      <div className="carousel-item">
        <Image src="/images/banner-2.png" className="d-block w-100 img-fluid" alt="..." width={200} height={500}/>
      </div>
      <div className="carousel-item">
        <Image src="/images/Banner-3.png" className="d-block w-100 img-fluid" alt="..." width={200} height={500}/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </>
  );
}

export default UncontrolledExample;