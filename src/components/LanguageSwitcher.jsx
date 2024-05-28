import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languageIcon } from '../assets';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'ar', lang: 'العربية' },
    // Add more languages as needed
  ];

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={toggleDropdown}
        >
          <img 
            src={languageIcon}
            alt='languageIcon'
            className='w-5 h-5'
          />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lng) => (
              <a
                href="#"
                key={lng.code}
                className={`${
                  lng.code === i18n.language
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                } block px-4 py-2 text-sm`}
                role="menuitem"
                onClick={() => changeLanguage(lng.code)}
              >
                {lng.lang}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
