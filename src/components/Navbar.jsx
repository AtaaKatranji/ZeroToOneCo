import { useState} from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constans/indx.js'
import { logo , menu , close , zero   } from '../assets/index.js'
import { useTranslation } from 'react-i18next'
import i18n from '../../i18n.js'

const componentStyles = {
  fontFamily: 'Droid Arabic Naskh, Arial, sans-serif',
  fontWhight: '600',
  fontSize: '22px'
  
  // Add other styles as needed
};

const Navbar = () => {
  const { t, i18n} = useTranslation();
 const [toggle, setToggle] = useState(false)
 const dir = i18n.dir();
 console.log(dir);
  return (
    <nav className='w-full flex justify-between items-center py-6 navbar' dir={i18n.dir()} style={componentStyles}>
       <img src={zero} alt="ZeroToONe" className="W-[228px] h-[90px]"></img>
       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
       {navLinks.map((nav , index) => (
          <li
          key={nav.id}
          
          className={`font-poppins font-bold cursor-pointer text-[18px] text-white ${dir === 'ar' ? index === navLinks.length - 1 ? 'mr-0' : 'mr-10' : index === navLinks.length  ? 'ml-0' : 'ml-10'}`
             
        }
          >
            <Link to={nav.link}>{t(`navbar.${nav.id}`)}</Link>
            {/* <a href={`#${nav.id}`}>
              {nav.title}
            </a> */}
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
       {/* bg-black-gradient */}
       <div className={`${toggle ? 'flex' : 'hidden'} p-6  bg-black-gradient
       ${dir === 'ltr' ? 'absolute top-20 right-0 mx-4 my-2 min-w-[140px]' : 'absolute top-20 left-0 mx-4 my-2 min-w-[140px]'} rounded-xl sidebar`}>
        <ul className="list-none flex flex-col justify-start items-center flex-1">
        {navLinks.map((nav , index) => (
          <li
          key={nav.id}
          className={`font-poppins font-normal cursor-pointer text-[18px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-yellow-400`}
          >
            <Link className='text-yellow-400' to={nav.link}>{t(`navbar.${nav.id}`)}</Link>
            {/* <a href={`#${nav.id}`}>
              {nav.title}
            </a> */}
          </li>
        ))}

       </ul>

        
        
        
       </div>
    </nav>
    

  )
}

export default Navbar