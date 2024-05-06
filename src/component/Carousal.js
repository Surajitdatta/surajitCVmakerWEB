import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import cr1 from "../img/cr1.png";
import cr2 from "../img/cr2.png";
function CarouselPage() {
  return (
    <div className="Carosal">
    <Carousel>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src={cr1}
        alt="First slide"
        height="400px"
        width="100%"
      />
      <Carousel.Caption>
      <h3></h3>
        <p>
         
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src={cr2}
        alt="Second slide"
        height="400px"
        width="100%"
      />

      <Carousel.Caption>
      <h3></h3>
        <p>
         
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'70vh'}}
        className="d-block w-100"
        src="https://www.dayjob.com/wp-content/uploads/2020/03/Free-CV-template-22.jpg"
        alt="Third slide"
        height="400px"
        width="100%"
      />

      <Carousel.Caption>
        <h3></h3>
        <p>
         
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}

export default CarouselPage;