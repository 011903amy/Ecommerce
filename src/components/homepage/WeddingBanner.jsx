import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'

const WeddingBanner = ({img}) => {
  return (
   
    <section>
      <div className="container text-center">
          <img src={`${imgPath}/secondbanner.png`} alt="" className='w-full rounded-[3rem] mt-[15rem]' />
        <h3 className='uppercase font-semibold text-center'>wear to wedding</h3>
        <p className='text-center mb-10 opacity-40'>A symphony of exquisite designs tailored for your unforgettable moments</p>
        <Link to="/" className='p-4 bg-black text-white rounded-full'>See Details</Link>
      </div>
    </section>
  )
}

export default WeddingBanner