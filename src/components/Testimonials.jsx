import styles from "../Style/style";
import { feedback } from "../constants";
import FeadbackCard from "./FeadbackCard";

export default function Testimonials() {
  return (
    <section
      id="client"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      {/* gradient */}
      <div className="absolute -right-[50%] w-[60%] h-[60%] rounded-full z-[0] blue__gradient" />

      {/* top side  : heading and text*/}
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          What People are <br className="sm:block hidden" /> saying about us
        </h2>

        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>

      </div>

      {/* bottom side  : card and card content*/}
      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container read-only: z-[1]">
        {feedback.map((card)=> (
          <FeadbackCard key={card.id} {...card}/>
        ))}
      </div>

    </section>
  );
}
