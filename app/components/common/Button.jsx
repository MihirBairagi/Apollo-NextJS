import React from "react";
import Image from "next/image";

const Button = ({ buttonText }) => {
  return (
    <div className="button-box bg-orange hover:bg-[#e55e02] w-max text-white rounded-[0.3rem]">
      <a 
        href="" 
        className="flex items-center justify-between py-[1rem] px-[1.5rem]">
        <p className="uppercase font-[600] tracking-[.15em]">{buttonText}</p>
        <span className="w-[1.9rem] ml-[1rem]">
          <Image
            src="/assets/img/arrow-2.png"
            width={100}
            height={100}
          />
        </span>
      </a>
    </div>
  );
};

export default Button;
