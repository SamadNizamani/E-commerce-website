import React from 'react'
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import ProductCard from './ProductCard';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1300 },
      items: 4,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1300, min: 764 },
      items: 3,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 764, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


const FeaturedProductSlider = () => {
  return (
    <Carousel
    additionalTransfrom={0}
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass='item'
    >
    <ProductCard
     title='Call of duty'
     actualPrice='$60.99'
     discountPrice='39.99'
     category='Shooting'
     image='/images/g1.jpg'
    />
    <ProductCard
     title='Zombie House'
     actualPrice='$50.99'
     discountPrice='49.99'
     category='Action'
     image='/images/g2.jpg'
    />
    <ProductCard
     title='Gun of Wars'
     actualPrice='$35.99'
     discountPrice='30.99'
     category='Shooting'
     image='/images/g3.jpg'
    />
    <ProductCard
     title='House of Fire'
     actualPrice='$25.99'
     discountPrice='20.99'
     category='Action'
     image='/images/g4.jpg'
    />
    <ProductCard
     title='Assassins Creed'
     actualPrice='$50.00'
     discountPrice='49.99'
     category='Action'
     image='/images/g5.jpg'
    />
    <ProductCard
     title='Space Fight'
     actualPrice='$50.00'
     discountPrice='45.99'
     category='Action'
     image='/images/g6.jpg'
    />
    <ProductCard
     title='Super Cars 2024'
     actualPrice='$20.00'
     discountPrice='15.99'
     category='Action'
     image='/images/g7.jpg'
    />
    <ProductCard
     title='Wild Wolf'
     actualPrice='$30.00'
     discountPrice='25.99'
     category='Adventure'
     image='/images/g8.jpg'
    />
    </Carousel>
  )
}

export default FeaturedProductSlider