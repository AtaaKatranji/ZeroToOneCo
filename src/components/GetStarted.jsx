import styles from "../style";
import { arrowUp } from "../assets";
import { useTranslation } from "react-i18next";



const GetStarted = () => {
  const { t } = useTranslation();
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient-zero p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient-zero">{t("joinUs.line1")}</span>
          </p>
          <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient-zero">{t("joinUs.line2").line2}</span>
        </p>
      </div>
    </div>
  );
} 

export default GetStarted;
