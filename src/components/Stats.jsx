import styles from "../Style/style";
import { stats } from "../constants/index";

export default function Stats() {
  return (
    <section
      className={`${styles.flexCenter} sm:flex-row flex-col  flex-wrap mb-6 sm:mb-20`}
    >
      {stats.map((stat) => (
        <div className="flex-1 flex items-center justify-center md:justify-start flex-row m-3" key={stat.id}>
          <h4 className="font-poppins font-semibold xs:text-[30px] text-[25px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20px]  text-[18px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
            {stat.title}  
          </p>
        </div>
      ))}
    </section>
  );
}
