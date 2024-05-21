import React from 'react';
import styles from "../style";
import { values } from "../constans/indx";

const Values = () => (
    <section id='col' className={`${styles.flexCenter} sm:mb-20 mb-6`}>
       
    <div className={`${styles.flexCenter} flex-col`}>
        
    <h1 className={`flex justify-center items-center text-slate-500 font-poppins font-semibold  text-4xl`}>Our Values</h1>
        <div className={`flex flex-col sm:flex-row w-full px-[50px]`}>
        {values.map((value) => (
            <div key={value.id} className={` flex justify-center items-center flex-col rounded-2xl
             m-5 py-10 px-[100px] space-y-5 text-white bg-discount-gradient w-full`}>
              <img src={value.img} alt={value.name} className={`w-[100px] h-[100px]`}/>
              <h1 className={`font-semibold text-2xl`}>{value.name}</h1>
              <p>{value.description}</p>
            </div>
        ))}
        
        
  
        </div>
    </div>
    
    
    </section>

)
    
        
      
 


export default Values;
