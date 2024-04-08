import React from 'react'
import ProductCard from './Helper/ProductCard'

const TopProduct = () => {
  return (
    <div className='bg-gray-800 pt-[4rem] pb-[3rem]'>
        <div className='w-[80%] mx-auto flex items-center justify-between'>
            <h1 className='md:text-[28px] text-[22px] lg:text-[34px] text-white'>Top Products</h1>
            <button className='uppercase text-[13px] md:text-[15px] text-yellow-400'>view all product</button>
        </div>
        <div className='grid mt-[2rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-8 w-[80%]
        mx-auto'>
    <div 
    data-aos="fade-right" 
    data-aos-anchor-placement="top-center">
    <ProductCard
     title='Call of duty'
     actualPrice='$60.99'
     discountPrice='39.99'
     category='Shooting'
     image='/images/g1.jpg'
    /></div>
    <div 
    data-aos="fade-right" 
    data-aos-delay="250" 
    data-aos-anchor-placement="top-center">

    <ProductCard
     title='Zombie House'
     actualPrice='$50.99'
     discountPrice='49.99'
     category='Action'
     image='/images/g2.jpg'
    /></div>
    <div     
    data-aos="fade-right" 
    data-aos-delay="500" 
    data-aos-anchor-placement="top-center"
    >

    <ProductCard
     title='Gun of Wars'
     actualPrice='$35.99'
     discountPrice='30.99'
     category='Shooting'
     image='/images/g3.jpg'
    /></div>
    <div     
    data-aos="fade-right" 
    data-aos-delay="750" 
    data-aos-anchor-placement="top-center"
    >

    <ProductCard
     title='House of Fire'
     actualPrice='$25.99'
     discountPrice='20.99'
     category='Action'
     image='/images/g4.jpg'
    /></div>
   
    <div 
        data-aos="fade-right" 
        data-aos-delay="1000" 
        data-aos-anchor-placement="top-center"
        >

    <ProductCard
     title='Space Fight'
     actualPrice='$50.00'
     discountPrice='45.99'
     category='Action'
     image='/images/g6.jpg'
    /></div>

    <div    
     data-aos="fade-right" 
    data-aos-delay="1250" 
    data-aos-anchor-placement="top-center"
    >
    <ProductCard
     title='Wild Wolf'
     actualPrice='$30.00'
     discountPrice='25.99'
     category='Adventure'
     image='/images/g8.jpg'
    />
    </div>
        </div>
    </div>
  )
}

export default TopProduct