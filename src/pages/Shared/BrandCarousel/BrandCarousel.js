import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/brand/Brand1.jpg";
import Brand2 from "../../../assets/brand/Brand2.jpg";

const BrandCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 " src={Brand1} alt="Amazon" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Brand2} alt="CocaCola" />
      </Carousel.Item>
    </Carousel>
  );
};

export default BrandCarousel;
