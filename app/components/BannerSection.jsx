"use client";
import Image from 'next/image';
import Button from './common/Button';
import React, { useState } from 'react';

const BannerSection = () => {
  const [isContentVisibleOne, setIsContentVisibleOne] = useState(false);
  const [isContentVisibleTwo, setIsContentVisibleTwo] = useState(false);
  const [isContentVisibleThree, setIsContentVisibleThree] = useState(false);

  const toggleContentVisibility = (clickBoxNumber) => {
    switch (clickBoxNumber) {
      case 1:
        setIsContentVisibleOne((prevVisibility) => !prevVisibility);
        break;
      case 2:
        setIsContentVisibleTwo((prevVisibility) => !prevVisibility);
        break;
      case 3:
        setIsContentVisibleThree((prevVisibility) => !prevVisibility);
        break;
      default:
        break;
    }
  };

  return (
    <section className='banner-section bg-cover bg-no-repeat bg-center m-[4rem] gradient-radial
      max-[600px]:m-[0]
    ' style={{ backgroundImage: `url(assets/img/banner-bg.png)` }}>
      <div className="container">
        <div className="banner-box text-white py-[10rem] px-[4rem] relative
          max-[600px]:py-[10rem] 
          max-[600px]:px-[2rem] 
          ">
          <h1 className='text-[4rem] leading-tight font-semibold'>
            Best Roofing Services <br  /> and Consulting
          </h1>
          <p className='text-[1.4rem] my-[2rem]'>
            There are many variations of passages of Lorem as Ipsumoff <br className='max-[600px]:hidden' /> available, but the majority have suffered al
          </p>
          <Button buttonText={"Get in touch "} />

          <div className={` max-[600px]:hidden click-box-one absolute  ${isContentVisibleOne ? 'right-[35.8%] bottom-[18%]' : 'right-[50%] bottom-[18%]'} `}>
            <div className={`click-content ${isContentVisibleOne ? 'block' : 'hidden'} relative 
            after:content-[''] after:absolute after:bottom-[-6rem] after:left-[1.7rem] after:h-[6rem] after:w-[0.2rem] after:bg-[#f68b41] 
            text-black w-[20rem] rounded-[1rem] mb-[5rem] bg-[#fff] py-[2rem] px-[1.5rem]`}>
              <h4 className='text-[1.5rem] font-[600] mb-[1rem]'>Lorem ipsum dolor</h4>
              <p className='text-[1.2rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Aut.
              </p>
            </div>
            <div onClick={() => toggleContentVisibility(1)} className="click-btn cursor-pointer rounded-full bg-[#F68B41] text-white text-center p-[1rem] pt-[0.4rem] text-[2.3rem] w-[3.6rem] leading-[0.9]">
              {`${isContentVisibleOne ? '-' : '+'}`}
            </div>
          </div>

          <div className={` max-[600px]:hidden click-box-two absolute ${isContentVisibleTwo ? 'right-[16.8%] bottom-[45%]' : 'right-[31%] bottom-[45%]'} `}>
            <div className={`click-content ${isContentVisibleTwo ? 'block' : 'hidden'} relative after:content-[''] after:absolute after:bottom-[-6rem] after:left-[1.7rem] after:h-[6rem] after:w-[0.2rem] after:bg-[#f68b41] text-black w-[20rem] rounded-[1rem] mb-[5rem] bg-[#fff] py-[2rem] px-[1.5rem]`}>
              <h4 className='text-[1.5rem] font-[600] mb-[1rem]'>Lorem ipsum dolor</h4>
              <p className='text-[1.2rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Aut.
              </p>
            </div>
            <div onClick={() => toggleContentVisibility(2)} className="click-btn cursor-pointer rounded-full bg-[#F68B41] text-white text-center p-[1rem] pt-[0.4rem] text-[2.3rem] w-[3.6rem] leading-[0.9]">
              {`${isContentVisibleTwo ? '-' : '+'}`}
            </div>
          </div>

          <div className={`  max-[600px]:hidden click-box-three absolute ${isContentVisibleThree ? 'right-[1.8%] bottom-[10%]' : 'right-[16%] bottom-[10%]'} `}>
            <div className={`click-content ${isContentVisibleThree ? 'block' : 'hidden'} relative after:content-[''] after:absolute after:bottom-[-6rem] after:left-[1.7rem] after:h-[6rem] after:w-[0.2rem] after:bg-[#f68b41] text-black w-[20rem] rounded-[1rem] mb-[5rem] bg-[#fff] py-[2rem] px-[1.5rem]`}>
              <h4 className='text-[1.5rem] font-[600] mb-[1rem]'>Lorem ipsum dolor</h4>
              <p className='text-[1.2rem]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, nihil? Aut.
              </p>
            </div>
            <div onClick={() => toggleContentVisibility(3)} className="click-btn cursor-pointer rounded-full bg-[#F68B41] text-white text-center p-[1rem] pt-[0.4rem] text-[2.3rem] w-[3.6rem] leading-[0.9]">
              {`${isContentVisibleThree ? '-' : '+'}`}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
