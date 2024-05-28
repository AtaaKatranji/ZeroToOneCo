import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { values } from "../constans/indx";
import styles from "../style";
import { useTranslation } from "react-i18next";

const FlipCard = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleClick = (valueId) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [valueId]: !prevState[valueId] || false,
    }));
  };
  const { t, i18n } = useTranslation();
  return (
    <section dir={i18n.dir()}>
    <h1 className={`${styles.heading2} ${styles.flexCenter} mt-10   `}>{t("values")}</h1>
    <div className={`flex md:flex-row flex-col justify-center font-poppins`} >
      
      {values.map((value) => (
        <div key={value.id} className={`m-5`}>
          <ReactCardFlip
            isFlipped={flippedCards[value.id] || false}
            flipDirection="horizontal"
            flipSpeedBackToFront={0.5}
            flipSpeedFrontToBack={0.5}
          >
            <div className="front h-[200px]" onClick={() => handleClick(value.id)}>
              <div
                className={`flex justify-center items-center flex-col rounded-2xl py-10 px-[100px] space-y-5 shadow-xl text-secondary  bg-white border-2 border-secondary`}
                style={{ height: "100%",width:"100%" }}
              >
                <img src={value.img} alt={value.name} className={`w-[100px] h-[100px]`} />
                <h1 className={`font-semibold text-2xl`}>{t(`about_Values_title.${value.id}`)}</h1>
              </div>
            </div>
            <div className="back h-[200px]" onClick={() => handleClick(value.id)}>
              <div
                className={`flex justify-center items-center flex-col rounded-2xl py-10 sm:px-10 px-5 space-y-5 text-white bg-secondary border-2 border-secondary`}
                style={{ height: "100%", width:"100%" }}
              >
                <p className={`${styles.paragraph} text-white teext-center`}>{t(`about_Values_desc.${value.id}`)}</p>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </div>
    </section>
  );
};

export default FlipCard;