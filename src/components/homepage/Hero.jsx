import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Hero = ({img,header,subheader}) => {
  return (
    <div className="container">
      <div className='relative mt-[5rem] md:mt-0'>
      <img src={`${imgPath}/${img}`} alt="" className='max-h-[60rem] w-full object-cover rounded-[3rem]' />

      <div className='absolute bottom-5 left-8 w-[110rem] text-white'>
          <div className='bottom-[5rem] left-6'>
        <h2 className='uppercase'>{header}</h2>
         </div>
        <div className=' flex flex-col w-[20rem] gap-5 md:flex md:flex-row md:justify-between md:items-center md:w-full'>
          <small>{subheader}</small>
          <Link to="/" className='p-2 bg-white text-black rounded-full text-center w-[10rem]'>Buy now</Link>
        </div>

      </div>
      
      
     
    </div>
    </div>

    
  )
}

export default Hero