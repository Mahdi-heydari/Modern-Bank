/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { quotes } from "../assets";

export default function FeadbackCard({ content, title, img, name }) {
  return (
    <div
      className="flex justify-between flex-col px-9 py-8 rounded-[20px] max-w-[300px] md:mr-12 sm:mr5 mr-0 my-5 feedback-card "
    >
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] object-contain"/>
      <p className="font-normal font-poppins text-[18px] leading-[32px] text-white my-10">{content}</p>

      <div className="flex flex-row">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />

        <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">{name}</h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">{title}</p>
        </div>
      </div>

    </div>
  );
}
