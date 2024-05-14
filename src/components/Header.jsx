import React from 'react'
import Logo from './Logo'
import { IoSearchSharp } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <header className='h-16 shadow-md bg-white'>
      <div className="h-full container mx-auto flex items-center px-4 justify-between">
        <div className=''>
          <Logo w={100} h={60}/>
        </div>
        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow-lg pl-2'>
          <input type="text" placeholder='Search product here....' className='w-full outline-none' />
          <div  className='text-lg bg-red-600 h-8 min-w-[50px] flex items-center justify-center rounded-r-full text-white cursor-pointer hover:bg-red-700'>
            <IoSearchSharp/>
          </div>
        </div>
        <div className='flex items-center gap-7'>
          <div className='text-3xl cursor-pointer'>
            <FaRegCircleUser />
          </div>
          <div className='text-2xl relative'>
            <span><FaShoppingCart /></span>
            <div className='bg-red-500 w-5 h-5 p-1 flex items-center justify-center rounded-full absolute -top-2 -right-3'>
              <p className='text-xs text-white'>0</p>
            </div>
          </div>
          <div>
            <Link to='/login' className='bg-red-600 px-5 py-1 h-8 text-white rounded-full flex items-center hover:bg-red-700'>Login</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header