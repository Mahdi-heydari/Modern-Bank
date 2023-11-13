/* eslint-disable no-unused-vars */
import styles, { layout } from "../Style/style";
import { bill, apple, google } from "../assets/index";

export default function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      {/* left side 👈 : image and gradient */}
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        {/* tow divs for gradient */}
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
      </div>

      {/* right side 👉 : heading,text and small image */}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-4">
            <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
            <img src={apple} alt="apple_store" className="w-[128px] h-[42px] object-contain  cursor-pointer"/>
        </div>

      </div>
    </section>
  );
}
