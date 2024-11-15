import React from 'react'
import { imgPath } from '../helpers/functions-general'

const CardItem = ({item,key}) => {
  return (
    <div>
      <div className="container">
        <div className='flex flex-col gap-3'>
          <img src={`${imgPath}/${item.img}`} alt="" className='rounded-[3rem] w-[40rem] h-[40rem] object-cover' />
        <h5>{item.title}</h5>
        <small>{item.description}</small>
        <h5>${item.price}</h5>
        </div>
        
      </div>
    </div>
  )
}

export default CardItem