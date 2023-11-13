/* eslint-disable no-unused-vars */
import styles from "../Style/style";
import { discount, robot } from "../assets/index";
import GetStarted from "./GetStarted";

export default function Hero() {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`ml-2 ${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount for{" "}
            <span className="text-white"> Account</span>
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            the Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Generation</span>
          </h1>

          <div className="ss:flex hidden mr-0 md:mr-4">
            <GetStarted />
          </div>
        </div>

        <h1 className="font-poppins w-full font-semibold ss:text-[67px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          {" "}
          Payment Method
        </h1>

        <p className={`${styles.paragraph} max-w-[470px]  mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      {/* for gradirent and Robot img */}
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="robot"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        <div className="w-[40%] h-[35%] z-[0] absolute top-0 pink__gradient" />
        <div className="w-[80%] h-[80%] z-[1] absolute bottom-40 white__gradient rounded-full" />
        <div className="w-[50%] h-[50%] z-[0] absolute right-10 bottom-20 blue__gradient" />
      </div>

      {/* GetStarted component for mobile view */}
      <div className={`${styles.flexStart} ss:hidden`}>
        <GetStarted/>
      </div>

    </section>
  );
}
