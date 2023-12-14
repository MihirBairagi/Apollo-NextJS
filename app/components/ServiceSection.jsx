"use client";
import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"bg-[#000] p-[1.5rem] pl-[2rem] absolute right-[5%] top-[-60%] w-[4.6rem] rounded-[30rem] text-white text-center cursor-pointer z-10 max-[600px]:top-[45%] max-[600px]:right-[-4%]"}
      onClick={onClick}
    >
      &#x3009;
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={"bg-[#000] p-[1.5rem] pr-[2rem] absolute right-[10%] top-[-60%] w-[4.6rem] rounded-[30rem] text-white text-center cursor-pointer z-10 max-[600px]:top-[45%] max-[600px]:right-[90%]"}
      onClick={onClick}
    >
      &#x2329;
    </div>
  );
}

const ServiceSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <>
      <section className="service-section my-[10rem] px-[5rem] max-[600px]:my-[5rem] max-[600px]:px-[2rem]">
        <div className="container">
          <div className="service-box">
            <h2 className="uppercase text-[3rem] border-l-[0.3rem] border-[#F68B41] pl-[1.8rem] leading-[1.2] text-[#4A4A49] max-[600px]:text-[3rem]">
              <strong> we provide quality </strong>
              <br className="max-[600px]:hidden" /> roofing service
            </h2>

            <ul>
              <Slider
                {...settings}
                className="service-listing flex my-[8rem] px-[3rem] max-[600px]:my-[4rem] max-[600px]:px-[1rem]"
              >
                {Array.from({ length: 6 }, (_, index) => (
                  <ServiceItem key={index + 1} />
                ))}
              </Slider>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceItem = () => {
  return (
    <li className="group text-center p-[2rem] hover:bg-[#F5F5F5] min-h-[26rem] max-[600px]:min-h-[20rem] max-[600px]:p-[2rem] max-[600px]:py-[4rem] max-[600px]:bg-[#f5f5f5]">
      <Image
        className="w-[6rem] mx-auto mb-[2rem]"
        src="/assets/img/slide-img-1.png"
        height={100}
        width={100}
      />
      <h4 className="text-[2rem] mb-[1rem] font-[600]">Roofing Layers</h4>
      <p className="text-[1.2rem] text-[#888888]">
        Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore
      </p>

      <div className="btn-box">
        <p className="hidden cursor-pointer group-hover:block hover:invert hover:bg-[#fff] hover:border-[#fff] px-[2.5rem] py-[0.8rem] border-[0.2rem] border-[#000] mt-[2rem] w-max mx-auto font-[600] text-[1.2rem] max-[600px]:block">
          More Info
        </p>
      </div>
    </li>
  );
};

export default ServiceSection;
