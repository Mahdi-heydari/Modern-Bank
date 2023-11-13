import styles, { layout } from "../Style/style";
import { card } from "../assets";
import Button from "./Button";

export default function CardDeal() {
  return (
    <section className={`${layout.section} mt-9`}>
      {/* left side 👈 : heading and text*/}
      <div className={`${layout.sectionInfo}`}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>

      {/* right side 👉 : image */}
      <div className={`${layout.sectionImg}`}>
        <img src={card} alt="card" className="w-[100%] h-[100%]" />
      </div>

    </section>
  );
}
