import { useState} from 'react'

import { navLinks } from '../constans/indx.js'
import { logo , menu , close , zero   } from '../assets/index.js'

const Navbar = () => {
 const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex justify-between items-center py-6 navbar'>
       <img src={zero} alt="ZeroToONe" className="W-[228px] h-[90px]"></img>
       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav , index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}

       </ul>
       <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
         src={toggle ? close : menu }
         alt='menu'
         className='w-[28px] h-[28px] object-contain'
         onClick={()=> setToggle((prev)=>!prev)}
        >
        </img>

       </div>
       <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient 
       absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className="list-none flex flex-col justify-start items-center flex-1">
        {navLinks.map((nav , index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white`}
          >
            <a href={`#${nav.id}`}>
              {nav.title}
            </a>
          </li>
        ))}

       </ul>

        
        
        
       </div>
    </nav>
    

  )
}

export default Navbar