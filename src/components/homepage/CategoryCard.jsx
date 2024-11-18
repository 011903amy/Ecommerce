import React from 'react'
import { Link } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const CategoryCard = ({item, key}) => {
  return (
    <div>
      <div className="container">
        <div className='relative'>
          <img src={`${imgPath}/${item.img}`} alt="" className='rounded-[3rem] h-[40rem] w-full object-cover' />
          <div className='absolute bottom-3 left-5 flex flex-col gap-2'>
            <h3 className='text-white font-semibold'>{item.title}</h3>
          <Link to="/" className='p-2 bg-white text-black rounded-full text-center w-[10rem]'>See Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCard