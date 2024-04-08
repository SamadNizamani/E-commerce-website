import BestSeller from '@/Components/BestSeller'
import Contact from '@/Components/Contact'
import FeaturedProducts from '@/Components/FeaturedProducts'
import Footer from '@/Components/Footer'
import Hero from '@/Components/Hero'
import Nav from '@/Components/Nav'
import News from '@/Components/News'
import TopProduct from '@/Components/TopProduct'
import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Home = () => {
    
  useEffect(() => {
AOS.init({
  duration: 1000,
  easing: 'ease-in-out-cubic',
  once: true,
  delay: 100,
  mirror: false,
  anchorPlacement: 'top-bottom',

})
  },[])

  return (
    <div className='overflow-hidden'>
     <Nav />
     <Hero />
     <FeaturedProducts/>
     <TopProduct/>
     <BestSeller/>
     <News/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default Home