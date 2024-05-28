import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import imagePath2 from '../assets/images/remarkPage/Testimoniald_BG2.jpg';
import styles from "../style"
import "../styles/slides.css"
import { Excellence } from '../assets';
import { L_Clients } from '../constans/indx';
import { useTranslation } from 'react-i18next';
import IconGenerator from './IconGenerator';

register();

export const Linceses = () => {

  const {t, i18n} = useTranslation();
  return (
    <div className='font-poppins py-10 my-10' dir={i18n.dir()}>
      <h1 className={`text-4xl text-center mb-10 font-semibold text-yellow-400`}>{t("Linceses.title")}</h1>
      
        <div
          className={` bg-cover w-full bg-right-top font-poppins rounded-lg flex flex-col items-center justify-center `}
          
        >
          {L_Clients.map((client, index) => (
            <div key={index}>
              <div className="flex md:flex-row flex-col gap-5 justify-center items-center w-[65%] mx-[20%] bg-secondary rounded-lg p-10 mb-10">
                <div className=" flex-col bg-primary p-10 rounded-lg h-full">
                  <img src={Excellence} width={150} height={150} />
                </div>
                <div className=" flex-col">
                  <span><IconGenerator numberOfIcons={5}/></span>
                  <h3 className={`text-xl text-white`}>{client.comment}</h3>
                  <br />
                  <h2 className={`text-xl text-white`}>{client.name}</h2>
                  <p className={`${styles.paragraph} text-gray-500`}>{client.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
};
