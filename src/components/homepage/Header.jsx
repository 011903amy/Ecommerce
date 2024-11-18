import { Search, ShoppingBasket } from 'lucide-react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { imgPath } from '../helpers/functions-general'

const Header = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener("scroll", () => setScrollPosition(scrollY));
    return window .removeEventListener("scroll", () => setScrollPosition(scrollY)
  );
  }, []);
  return (
    <header>
      <div className="container">
        <div className={`flex justify-between items-center p-5 bg-white  w-full relative fixed md:h-[5rem] md:bg-transparent md:w-auto `}>
            <button className={`menu-btn absolute top-6 ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
              <span className={`${isOpen && "!bg-black"}`}></span>
              <span className={`${isOpen && "!bg-black"}`}></span>
              <span className={`${isOpen && "!bg-black"}`}></span>
            </button>
           <div>
          <ul className={`flex flex-col absolute  gap-[5rem] md:flex md:flex-row md:gap-5 md:top-6  ${isOpen ? "!bg-white h-screen z-10 top-[5rem] left-0 w-full text-center top-0 block mt-5" : "hidden md:block"} `}>
            <li><NavLink to="/men">Men</NavLink></li>
            <li><NavLink to="/women">Women</NavLink></li>
            <li><NavLink to="/kids">Kids</NavLink></li>
            <li><NavLink to="/new-featured">New & Featured</NavLink></li>
            <li><NavLink to="/gift">Gift</NavLink></li>
          </ul>
        </div>
        
          <Link to="/" className='absolute top-6 left-[6rem] md:left-[50rem]' ><img src={`${imgPath}/headerlogo.png`} alt="" />
          </Link>
        <div className='absolute top-6 left-[20rem] md:left-[100rem]'>
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