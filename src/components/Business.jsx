import { features } from "../constans/indx"
import styles, { layout } from "../style";
import Button from "../components/Button"
const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Improve Your School, <br className="sm:block hidden" /> With Us 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With the right Correct App, you can improve your Eduction process by
        Correct exams, Collect and Analyis Data. But with hundreds
        of Students' sheet in seconds.
      </p>

      <Button styles={`mt-10 md:flex hidden `} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
    <div className={`flex justify-center `}>
    <Button styles={`mt-10 md:hidden ss:px-20 px-6 `} />
    </div>
  </section>
);

export default Business;
