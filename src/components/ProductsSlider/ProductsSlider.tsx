import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ProductCard from "./../ProductCard/ProductCard";
import NextArrow from './NextArrow';
import PreviousArrow from './PreviousArrow';
import { IProduct } from '../../interfaces/index';

type Props ={
  products:IProduct[]
}

const ProductsSlider:React.FC<Props> = ({products}) => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow/>,
  };


  return (
    <div className=" py-2 container">
      <Slider {...settings}>
        {products?.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </Slider>
    </div>
  )
}

export default ProductsSlider