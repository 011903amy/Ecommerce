import { Search, ShoppingBasket } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className='flex justify-between items-center p-5'>

           <div>
          <ul className='flex gap-5 '>
            <li><NavLink to="/men">Men</NavLink></li>
            <li><NavLink to="/women">Women</NavLink></li>
            <li><NavLink to="/kids">Kids</NavLink></li>
            <li><NavLink to="/new-featured">New & Featured</NavLink></li>
            <li><NavLink to="/gift">Gift</NavLink></li>
          </ul>
        </div>
        
          <Link to="/" className='uppercase text-3xl font-bold'><img src={`${imgPath}/headerlogo.png`} alt="" />
          </Link>
        <div>
          <ul className='flex gap-5'>
            <li><button><Search strokeWidth={1} /></button></li>
        <li><button><ShoppingBasket strokeWidth={1} /></button></li>
        <li><Link to="/">Login</Link></li>
          </ul>
        
        </div>
        </div>
       
      </div>
    </header>
  )
}

export default Header