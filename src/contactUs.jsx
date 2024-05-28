import React, { useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { contactUsImg } from './assets';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/contact', { name, email, message });
      // Display success message
    } catch (error) {
      // Display error message
    }
  };

  const { t, i18n } = useTranslation();
  const dir = i18n.dir();

  return (
    <div className="bg-primary flex flex-col justify-center items-center px-4 py-20 " dir={i18n.dir()} id='contact'>
       <h1 className="text-3xl font-bold mb-8">{t('contactUs')}</h1>
      <div className='flex md:flex-row flex-col gap-5'>
      <div className='max-w-md w-full'>
      <img
                src={contactUsImg}
                sizes="150px"
                alt="About Us"
                className="rounded-lg shadow-lg"
              />
      </div>
      <div className="max-w-md w-full">
       
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder={t('form.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder={t('form.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder={t('form.message')}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t('form.button')}
          </button>
        </form>
      </div>
      </div>
      
    </div>
  );
};

export default ContactUs;
