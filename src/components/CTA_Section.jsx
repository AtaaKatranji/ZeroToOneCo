import React from 'react';
import imagePath from '../assets/images/remarkPage/newsletter-bg222.jpg';
import { checkMark, newsletterimg222  } from '../assets';
import { useTranslation } from 'react-i18next';

const CTASection = () => {
  const {t, i18n} = useTranslation();
  const dir = i18n.dir();
  return (
    <div className="tp-app-newsletter p-20 bg-cover bg-right font-poppins rounded-lg flex flex-col items-end justify-center "
     style={{ backgroundImage: `url(${imagePath})` }}>
      <div className="container">
          <h2 className="mb-15 text-white  text-center wow tpfadeUp  text-2xl md:text-4xl">
                        أسباب إضافية لاستخدام برنامج ريمارك أوفيس
                      </h2>
                
                  
        <div className="row rtl">
          <div className="col-lg-6 DisplayInDeskTopOnly p-0">
            <div className="app-newsletter-img wow tpfadeUp mt-[20%]" data-wow-delay=".3s" data-tilt="" data-tilt-perspective="2000">
              <img className={` ${dir === 'rtl'? "right-0" : "left-0"}  bottom-[200px] max-w-full px-5`} src={newsletterimg222} alt="Remark" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tp-newsletter-content float-end">
              <div className="section-title-wraper">
                
              </div>
              <div className="app-hero__subscribe mb-30 wow tpfadeUp">
                <div className="app-hero-feature mt-20">
                  <div className="row rtl">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                            <img  src={checkMark} className=" h-8 w-8" />  
                            <div className="col-lg-10 smallListText">برنامج تصحيح إلكتروني متعدد اللغات</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                          <img  src={checkMark} className=" h-8 w-8" />  
                          <div className="col-lg-10 smallListText">أفضل تقنيات التصحيح الإلكتروني</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                          <img  src={checkMark} className=" h-8 w-8" />                              
                          <div className="col-lg-10 smallListText">قراءة كافة أنواع الباركود</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                          <img  src={checkMark} className=" h-8 w-8" />                              
                          <div className="col-lg-10 smallListText">قراءة جميع الحروف والأرقام المطبوعة</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                          <img  src={checkMark} className=" h-8 w-8" />                              
                          <div className="col-lg-10 smallListText">إرسال بيانات الدرجات مباشرة عبر البريد الإلكتروني</div>
                          </div>
                        </li>
                        
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul className='flex flex-col'>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                          <img  src={checkMark} className=" h-8 w-8" />                              <div className="col-lg-10 smallListText">القدرة على الربط بقواعد البيانات</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                          <img  src={checkMark} className=" h-8 w-8" />                              <div className="col-lg-10 smallListText">تصدير 25 تقرير تحليلي ورقابي وإحصائي</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                            <img  src={checkMark} className=" h-8 w-8" />  
                            <div className="col-lg-10 smallListText">تصحيح إصدارات متعددة من الاختبار الواحد</div>
                          </div>
                        </li>
                        <li>
                          <div className="flex flex-row mb-10" style={{ color: '#FFF' }}>
                          <img  src={checkMark} className=" h-8 w-8" />                              
                          <div className="col-lg-10 smallListText">خزّن إجابات الطلاب للابد داخل أكثر أنظمة التصحيح أمانًا</div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
