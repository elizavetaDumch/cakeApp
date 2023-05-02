import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import carous1 from '../assets/carus1.jpg'
import carous2 from '../assets/carus2.jpg'
import carous3 from '../assets/carus3.jpg'


const MyCarousel = () => {
  return (
    <Carousel fade className='carous' style={{marginTop: "80px", marginBottom: "45px"}}>
      <Carousel.Item interval={3000} style={{ maxHeight: "700px" }} >
        <img style={{ marginTop: "-100px" }}
          className="w-100 d-block"
          src={carous1}
          alt="First slide"
        />
        <Carousel.Caption style={{ color: "black"}}>
          <h3><b>Кексы</b></h3>
          <h6><b>ручной работы</b></h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ maxHeight: "700px" }} >
        <img style={{ marginTop: "-100px" }}
          className=" w-100 d-block"
          src={carous2}
          alt="Second slide"
        />
        <Carousel.Caption style={{ color: "black"}}>
          <h3><b>Бенто-торты</b></h3>
          <h6><b>ручной работы</b></h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ maxHeight: "700px" }}>
        <img style={{ marginTop: "-100px" }}
          className="w-100 d-block"
          src={carous3}
          alt="Third slide"
        />
        {/* , top:"300px" */}
        <Carousel.Caption style={{ color: "black"}}>  
          <h3><b>Торты</b></h3>
          <h6><b>ручной работы</b></h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
};

export default MyCarousel;