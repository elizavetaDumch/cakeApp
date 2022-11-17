import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import carous1 from '../assets/carus1.jpg'
import carous2 from '../assets/carus2.jpg'
import carous3 from '../assets/carus3.jpg'


const MyCarousel = () => {
  return (
    <Carousel fade className='carous'>
      <Carousel.Item interval={3000} style={{ maxHeight: "700px" }} >
        <img style={{ marginTop: "-100px" }}
          className="w-100 d-block"
          src={carous1}//"https://catherineasquithgallery.com/uploads/posts/2021-02/1612365680_120-p-tort-na-korichnevom-fone-183.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Кексы</h3>
          <h6>ручной работы</h6>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ maxHeight: "700px" }} >
        <img style={{ marginTop: "-100px" }}
          className=" w-100 d-block"
          src={carous2}//"https://www.fonstola.ru/pic/201302/1920x1080/fonstola.ru_88702.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Бенто-торты</h3>
          <h6>ручной работы</h6>
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
          <h3>Торты</h3>
          <h6>ручной работы</h6>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
};

export default MyCarousel;