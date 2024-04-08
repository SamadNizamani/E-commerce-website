import { CalendarIcon, TagIcon } from '@heroicons/react/16/solid';
import React from 'react'

interface props{
    image: string;
    title: string;
}

const NewsCard = ({image, title}: props) => {
  return (
    <>
      <div 
      data-aos="zoom in" 
      data-aos-anchor-placement="top-center" 
      className='col-span-2'
      >
        <img
          className='w-[100%] h-[100%]'
          src={image}
          alt={title}
          width={300} // For standard HTML img, width and height are attributes, not styles
          height={200}
        />
      </div>
      <div className='col-span-4'>
        <h1 className='text-[22px] mb-[1rem] text-white capitalize'>{title}</h1>
        <div className='flex mb-[0.4rem] items-center space-x-2'>
            <CalendarIcon className='w-[1rem] h-[1rem] text-white opacity-85'/>
            <p className='text-gray-500 opacity-90 font-thin text-[14px]'>Aprill 8,2024</p>
        </div>
        <div className='flex mb-[0.4rem] items-center space-x-2'>
            <TagIcon className='w-[1rem] h-[1rem] text-white opacity-85'/>
            <p className='text-gray-500 opacity-90 font-thin text-[14px]'>call of duty,game,news</p>
        </div>
        <div className='text-white mb-[1rem]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris eu nisl in nisi pulvinar tincidunt.
            Vivamus lectus lectus, mattis vel faucibus vitae,
            rutrum id nisi. Aenean vel facilisis quam,
            eget lobortis est. Pellentesque sagittis,</div>
        <button className='before:ease bg-white text-[17px] relative h-10 w-36 overflow-hidden 
             border border-black shadow-2x1 before:absolute before:left-0 before:ml-2 before:h-48 before:w-48
             before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90
            before:bg-blue-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black
            hover:before:-rotate-180'>
        <span className='relative z-10'>Read More</span>
        </button>
      </div>
    </>
  )
}

export default NewsCard