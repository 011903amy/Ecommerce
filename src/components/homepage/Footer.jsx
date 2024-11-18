import React from 'react'
import { imgPath } from '../helpers/functions-general'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      <div className="container">
        <div className='flex flex-col md:flex md:flex-row md:justify-between gap-5 mx-10'>
          <div className='max-w-[400px]'>
            <img src={`${imgPath}/footerlogo.png`} alt="" />
            <p>Get newsletter update for upcoming product and best discount for all item</p>

            <div className='flex gap-5 mt-5 mb-5'>
              <input type="text" placeholder='Your Email' className='border rounded-full p-2 w-full' />
              <Link to="/" className='p-2 bg-black text-white rounded-full text-center w-[10rem]'>See Details</Link>
            </div>
          </div>


          <div className='flex flex-col gap-5 mb-5 md:flex md:flex-row md:gap-[10rem]'>
              <div>
              <h6>Product</h6>
              <ul>
                <li><Link to="/" className='opacity-55'>Tshirt</Link></li>
                <li><Link to="/" className='opacity-55'>Jacket</Link></li>
                <li><Link to="/" className='opacity-55'>Shoes</Link></li>
                <li><Link to="/" className='opacity-55'>Pants</Link></li>
                <li><Link to="/" className='opacity-55'>Sunglasses</Link></li>
                <li><Link to="/" className='opacity-55'>Tuxedo</Link></li>
              </ul>
          </div>


          <div>
            <h6>Categories</h6>
            <ul>
              <li><Link to="/" className='opacity-55'>Man</Link></li>
              <li><Link to="/" className='opacity-55'>Woman</Link></li>
              <li><Link to="/" className='opacity-55'>Kids</Link></li>
              <li><Link to="/" className='opacity-55'>Gifts</Link></li>
              <li><Link to="/" className='opacity-55'>New Arrival</Link></li>
            </ul>
          </div>


          <div>
            <h6>Our Social Media</h6>
            <ul>
              <li><Link to="/" className='opacity-55'>Instagram</Link></li>
              <li><Link to="/" className='opacity-55'>Facebook</Link></li>
              <li><Link to="/" className='opacity-55'>Youtube</Link></li>
              <li><Link to="/" className='opacity-55'>Twitter</Link></li>
            </ul>
          </div>
            
            
            </div> 

        


        </div>
      </div>
      <div className='bg-black text-white flex flex-col gap-5 md:flex md:flex-row md:justify-between p-3'>
          <div className='mx-5'>
            <p className='text-center'>©2023 Tulos Production</p>
          </div>
          <div className='flex justify-center md:flex md:flex-row gap-5 mx-5'>
            <p>Terms & Conditions</p>
            <p> Privacy Policy</p>
            <p> Cookie Policy</p>
          </div>
      </div>
    </div>
  )
}

export default Footer