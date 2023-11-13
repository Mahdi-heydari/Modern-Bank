import styles from "../Style/style";
import {arrowUp} from "../assets/index"

export default function GetStarted() {
  return (
    <div className={`${styles.flexCenter} w-[120px] h-[120px] bg-blue-gradient  rounded-full p-[2px] cursor-pointer `}>
      <div className={`${styles.flexCenter} flex-col duration-300 w-[100%] h-[100%] rounded-full bg-primary `}>
        <div className={`${styles.flexStart} flex-row `}>
            <p className="font-poppins font-medium text-[18px]   leading-[23px] ">
                <span className="text-gradient mr-0.8 ">Get </span>
            </p>
            <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain"/>
        </div>
        <p className="font-poppins font-medium text-[18px] leading-[23px] ">
            <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  )
}
