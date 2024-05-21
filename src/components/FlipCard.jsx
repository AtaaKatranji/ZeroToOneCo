import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { values } from "../constans/indx";
import styles from "../style";

const FlipCard = () => {
  const [flippedCards, setFlippedCards] = useState({});

  const handleClick = (valueId) => {
    setFlippedCards((prevState) => ({
      ...prevState,
      [valueId]: !prevState[valueId] || false,
    }));
  };

  return (
    <section className={`flex md:flex-row flex-col justify-center`}>
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
                className={`flex justify-center items-center flex-col rounded-2xl py-10 px-[100px] space-y-5 text-white bg-discount-gradient`}
                style={{ height: "100%",width:"100%" }}
              >
                <img src={value.img} alt={value.name} className={`w-[100px] h-[100px]`} />
                <h1 className={`font-semibold text-2xl`}>{value.name}</h1>
              </div>
            </div>
            <div className="back h-[200px]" onClick={() => handleClick(value.id)}>
              <div
                className={`flex justify-center items-center flex-col rounded-2xl py-10 px-[100px] space-y-5 text-white bg-discount-gradient`}
                style={{ height: "100%", width:"100%" }}
              >
                <p>{value.description}</p>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      ))}
    </section>
  );
};

export default FlipCard;