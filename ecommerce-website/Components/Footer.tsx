import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='pt-[3rem] pb-[3rem] bg-gray-800'>
        <div className='w-[80%] border-b-[1.2px] pb-[2rem] border-slate-500 mx-auto grid grid-cols-1 md:grid-cols-2
         lg:grid-cols-4 gap-[3rem]'>
            <div>
                <h1 className='text-[25px] uppercase text-white mb-[1rem]'>Gaming</h1>
                <p className='text-[14px] text-white opacity-60'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Fugit, praesentium consectetur sequi maiores in hic non voluptatibus,
                ipsa porro atque accusamus dolorum iusto facere exercitationem?
                Hic voluptatibus ipsum sunt commodi.
                </p>
                <p className='text-[14px] mt-[1.4rem] text-white opacity-80'>(+92) 1234 5678 90 - info@exmple.com</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>information</h1>
                <p className='footer_link'>About Us</p>
                <p className='footer_link'>Privacy Police</p>
                <p className='footer_link'>Retrun Police</p>
                <p className='footer_link'>Shipping Police</p>
                <p className='footer_link'>Dropshipping</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Account</h1>
                <p className='footer_link'>Dashboard</p>
                <p className='footer_link'>My Orders</p>
                <p className='footer_link'>Account Details</p>
                <p className='footer_link'>Tarck My Orders</p>
            </div>
            <div className='lg:mx-auto'>
                <h1 className='text-[20px] text-white mb-[1.5rem]'>Shop</h1>
                <p className='footer_link'>Affiliate</p>
                <p className='footer_link'>Best Seller</p>
                <p className='footer_link'>Latest Products</p>
                <p className='footer_link'>Sale Products</p>
            </div>
         </div>
         <div className='mt-[2rem] grid grid-cols-1 gap-[1.4rem] sm:grid-cols-2 justify-between w-[80%] mx-auto'>
            <p className='text-[14px] mt-[1.4rem] text-white opacity-80'>
                &#169; Copyright AbdulSamd Nizamani 2024</p>
                <Image
                   src='/images/pl.svg' 
                    alt='pay' 
                   width={230} 
                   height={230} 
                className='object-contain sm:ml-auto'/>
         </div>
    </div>
  )
}

export default Footer 