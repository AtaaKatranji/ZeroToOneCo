import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constans/indx.js';
import { logo, menu, close, zero } from '../assets/index.js';
import { useTranslation } from 'react-i18next';
import LanguageSelector from './LanguageSwitcher.jsx';


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const dir = i18n.dir();
  console.log(dir);
  

  return (
 
        <nav className="bg-secondary shadow shadow-gray-300 w-full  md:px-auto flex items-center justify-center  navbar "dir={i18n.dir()}>
          <div className="md:h-22 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
            <div className="text-indigo-500 md:order-1 ">
              <img src={zero} alt="ZeroToONe" className="W-[228px] h-[90px]"></img>
            </div>
            <div className="text-gray-500 order-3 w-full md:w-auto md:order-2">
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
       {navLinks.map((nav , index) => (
          <li
          key={nav.id}
          
          className={`font-poppins font-bold cursor-pointer text-[18px] text-white ${dir === 'ar' ? index === navLinks.length - 1 ? 'mr-0' : 'mr-10' : index === navLinks.length  ? 'ml-0' : 'ml-10'}`
             
        }
          >
            <a href={`#${nav.id}`}>{t(`navbar.${nav.id}`)}</a>
            {/* <Link to={nav.link}>{t(`navbar.${nav.id}`)}</Link> */}
            
          </li>
        ))}

       </ul>
            </div>
            <div className="order-2 md:order-3">

                <LanguageSelector />
              
            </div>
          </div>
        </nav>
 
    
  );
};

export default Navbar;
