/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { features } from "../constants/index";
import styles, { layout } from "../Style/style";
import Button from "./Button";

// A sub-component for displaying cards
function FeatureCard({ index, icon, title, content }) {
  console.log(features[-1])

  return (
    <div className={`flex flex-row md:mt-0 ${features.indexOf(features[0], index) === 0 && "mt-5"} p-6 cursor-context-menu rounded-[20px] ${index !== features.length-1 && "mb-6"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full bg-dimBlue ${styles.flexCenter}`}>
        <img src={icon} alt="icon" className={`w-[50%] h-[50%]`} />
      </div>

      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
      </div>
    </div>
  );
}

export default function Business() {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`flex-col ${layout.sectionInfo}`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>
    </section>
  );
}
