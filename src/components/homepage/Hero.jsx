import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const Hero = ({img,header,subheader}) => {
  return (
    <div className="container">
      <div className='relative'>
      <img src={`${imgPath}/${img}`} alt="" className='max-h-[60rem] w-full object-cover rounded-[3rem]' />

      <div className='absolute bottom-5 left-8 w-[110rem] text-white'>
          <div className='bottom-[5rem] left-6'>
        <h2 className='uppercase'>{header}</h2>
         </div>
        <div className=' flex justify-between items-center w-full'>
          <small>{subheader}</small>
          <Link to="/" className='p-4 bg-white text-black rounded-full'>Buy now</Link>
        </div>

      </div>
      
      
     
    </div>
    </div>

    
  )
}

export default Hero