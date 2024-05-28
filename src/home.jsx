import React from 'react'
import styles from './style'
import i18n from '../i18n'

import {Navbar,Hero,Stats,Business,Billing,Client,CTA,FeedBackCard,Footer,Values,FlipCard, About, } from './components'
import ContactUs from './contactUs'
import Remark from './remark'
import ImageCarousel from './components/ImageCarousel'


const Home = () =>  (

  <div className='bg-primary w-full overflow-hidden' id='home' dir={i18n.dir()}>
    
    
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <div className='mt-10'>
        <ImageCarousel />

        </div>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
      
      
        <About  />
       <h1 className={`${styles.heading2} text-center mb-10 `} id='ourProjects'> مشاريعنا </h1>
        <Remark />
        <ContactUs />
        
        {/* <Billing /> 
       
        <Button /> 
        <FeedBackCard />
        <Client /> 
        <CTA /> 
          */}
      </div>
    </div>
  </div>

)
export default Home