import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import styles from './style';
import { aboutimg } from './assets';
import { feedback } from './constans/indx';
import { FlipCard } from './components';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-primary w-full overflow-hidden font-droid-arabic-naskh my-5" id='about'>
      <div
        className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}
        dir={i18n.dir()}
      >
        <div className={`${styles.boxWidth}`}>
          {/* Hero Section */}
          {/* <h1 className="flex-1 font-poppins font-semibold ss:text-[52px] text-[32px] text-black ss:leading-[100px] leading-[75px]">
            {t('about_greeting')}
          </h1>
          <p className="text-gray-500 mt-4">{t('about_description')}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            {t('learn_more')}
          </button> */}
        </div>
      </div>

      {/* About Section */}
      <div className="bg-white rounded-xl py-20 font-poppins">
        <div className="container mx-auto px-4">
          
          <h1 className="text-3xl font-bold mb-4 text-center text-yellow-400">{t('about_title')}</h1>
          <p className={`${styles.paragraph} text-gray-500 mb-4 text-center`}>{t('about_content.line1')}</p>
          <br />
          <p className={`${styles.paragraph} text-gray-500 mb-4 text-center`}>{t('about_content.line2')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* message */}
            <div className='bg-white border-2 border-yellow-500 shadow-md rounded-lg p-8'>
              <h2 className="text-3xl font-bold mb-4 text-yellow-400">{t('message')}</h2>
              <p className="text-secondary mb-4 "><li>{t('ourMessage')}</li></p>
            </div>
            {/* vision */}
            <div className='bg-white border-2 border-yellow-500 shadow-md rounded-lg p-8'>
              <h2 className="text-3xl font-bold mb-4  text-yellow-400">{t('vision')}</h2>
              <p className="text-secondary mb-4 "><li>{t('ourVision')}</li></p>              
            </div>
          </div>
        </div>
        <div className={`bg-white ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} mt-15`}>
            <FlipCard />
          </div>
        </div>
      
      </div>
      {/* Team Section */}
      {/* <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('team_title')}
          </h2>
          <div  className="grid grid-rows-1 md:grid-cols-3 gap-8">
      {feedback.map((member , index) => (
        
          
             <div key={member.id} className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
            src={member.img}
            alt="Team Member 1"
            className="rounded-full h-32 w-32 mx-auto mb-4"
          />
          <h3 className="text-xl font-bold mb-2">
            {t(`name.${member.name}`)}
          </h3>
          <p className="text-gray-500">{t(`role.${member.title}`)}</p>
             </div>
          
          
       ))}
       </div>
        </div>
      </div> */}
  </div>
  );
};

export default About;
