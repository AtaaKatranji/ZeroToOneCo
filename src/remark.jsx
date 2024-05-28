import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import styles from './style';
import { aboutimg } from './assets';
import { WhyRemark, feedback } from './constans/indx';
import imagePath from './assets/images/remarkPage/Banner222.jpg';
import imagePath2 from './assets/images/remarkPage/CTA_BG00.jpg';
import { CTASection } from './components';
import { Linceses } from './components';
const Remark = () => {
  const { t, i18n } = useTranslation();


  return (

    <section className='bg-primary' >
      {/* Hero Section of remark */}
      <div
        className={`${styles.boxWidth}  bg-cover bg-right-top font-poppins rounded-lg `}
        style={{

          paddingTop: '60px',
          minHeight: '710px',
          backgroundImage: `url(${imagePath})`,
        }}
      >
        <div className="flex flex-row" dir={i18n.dir()}>
          <div className="grid-cols-3 py-[100px]">
            <h1 className='text-green-600 md:text-6xl text-4xl font-bold mb-16 text-center px-[10%]'>برنامج ريمارك أوفيس</h1>
            <p className='text-white md:text-4xl text-2xl font-normal mb-16 text-center px-[10%] md:max-w-[800px] max-w-[1000px]'>حصل علي أعلي معايير الدقة و الجودة في التصحيح الإلكتروني
              للإختبارات الورقية</p>
            <div className='flex items-center justify-center '>
              <button className="border border-orange-500 text-white hover:bg-white hover:text-orange-500 font-bold py-2 px-4 mx-5 rounded">
                حمل النسخة التجريبية
              </button>
              <button className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-bold py-2 px-4 mx-5 rounded">
                اشتري النسخة الكاملة
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* why choose remark paragraph */}
      <div className={`${styles.boxWidth} m-auto w-full px-10 font-poppins font-normal`}>
        <div className="flex-row" style={{ direction: 'rtl' }}>
          <div className="col-lg-12 text-center">
            <br />

            {/* features Section */}
            <div className="bg-primary py-20">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
                  {t('WhyRemark.title')}
                </h2>
                <div className="grid grid-rows-1 md:grid-cols-3 gap-8">
                  {WhyRemark.map((feature, index) => (
                    <div key={feature.id} className="bg-white rounded-lg shadow-lg p-6 text-center flex flex-col">
                      <img
                        src={feature.icon}
                        alt="feature"
                        className="rounded-lg h-16 w-16 mx-auto mb-4 flex justify-end"
                      />
                      <h3 className="text-xl font-bold mb-2 text-green-400">
                        {t(`WhyRemark.feature.${feature.id}`)}
                      </h3>
                      <p className="text-gray-500">{t(`WhyRemark.feature.${feature.desc}`)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* نافس أقوى  */}
      <div
        className={` bg-cover bg-right-top font-poppins rounded-lg flex flex-col items-end justify-center `}
        style={{

          paddingTop: '60px',
          minHeight: '710px',
          backgroundImage: `url(${imagePath2})`,
        }}
      >
        <div className="flex flex-row" >
          <div className='grid grid-rows-1'>
            <div className="grid grid-cols-2  py-[100px]">
              <div className='grid grid-cols-1'>
                <p className='grid text-white md:text-3xl text-2xl font-normal mb-16 text-center px-[10%] md:max-w-[800px] max-w-[1000px] '>نافس الان أقوى الجامعات والمدارس العالمية و قم باستخدام منظومة ريمارك الأفضل في التصحيح الآلي للاختبارات وتحليل
                  الاستبيانات بدقة وجودة فائقة!</p>
                <div className='flex gap-5 items-center justify-center '>
                  <button className=" bg-white border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white font-bold py-2 px-8 mx-5 rounded">
                    تواصل معنا الان
                  </button>
                  <button className="bg-orange-500 text-white hover:bg-white hover:text-orange-500 font-bold py-2 px-4 mx-5 rounded">
                    اشتري النسخة الكاملة
                  </button>
                </div>
              </div>
            </div></div>
        </div>
      </div>
      {/* أهم الانجازات */}

      <div className="container bg-primary font-poppins">
        <div className="row align-items-center justify-content-center mt-40">
          <div className="col-md-8">
            <div className="section-title-wraper mb-30">
              <div className="tp-section text-center">
                <h2 className="tp-section__title wow tpfadeUp Addfontsize HomeH2Mobile text-green-500 font-medium text-2xl md:text-4xl">
                  أهم إنجازات برنامج ريمارك أوفيس
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-25 removeMarginClass rtl text-center">
          <div className="col-lg-4 StatisticDiv ">
            <p className="Headline text-blue-500 text-4xl mb-6">100,000</p>
            <p className={`${styles.paragraph} text-3xl`}>جامعات ومدارس متميزة في 130 دولة حول العالم</p>
          </div>

          <div className="col-lg-4 StatisticDiv ">
            <p className="Headline text-blue-500 text-4xl mb-6">30</p>
            <p className={`${styles.paragraph} text-3xl`}>عامًا من الخبرة والإنجازات</p>
          </div>

          <div className="col-lg-4 StatisticDiv">
            <p className="Headline text-blue-500 text-4xl mb-6">مليارات</p>
            <p className={`${styles.paragraph} text-3xl`}>نماذج اختبارات تم تصحيحها منذ 1991</p>
          </div>
        </div>

        <div className="row mt-10 mb-20 SecondStatisticsRow text-center">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 StatisticDiv text-center">
            <p className="Headline text-blue-500 text-4xl mb-6">ملايين</p>
            <p className={`${styles.paragraph} text-3xl`}>OMR من عمليات جمع البيانات بتكنولوجيا ال </p>
          </div>
          <div className="col-lg-5 StatisticDiv text-center">
            <p className="Headline text-blue-500 text-4xl mb-6 ">عشرات</p>
            <p className={`${styles.paragraph} text-3xl`}>الشهادات وبراءات الاختراع من الشركة الأمريكية Gravic</p>
          </div>
        </div>
      </div>
      {/* أسباب إضافية */}
      <CTASection />
      <Linceses />



    </section>
  );
};

export default Remark;
