import React from "react";

const PageUSP = () => {
  return (
    <section className="page-usp px-[9rem] my-[8rem] max-[600px]:px-[2rem] max-[600px]:my-[5rem]">
      <div className="container">
        <div className="page-usp-box">
          <ul className="flex flex-wrap justify-between items-center">
            <USPItem 
                title="Quality Materiall" 
                description="Lorem ipsum door sit consectetur adipisicing elit. At hic quod minima, vero?" 
            />
            <USPItem 
                title="Quality Materials" 
                description="Lorem ipum dolor sit consectetur adipisicing elit. At hic quod minima, vero?" 
            />
            <USPItem 
                title="Quality Material" 
                description="Lorem ipsum dolor sit conectetur adipisicing elit. At hic quod minima, vero?" 
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

const USPItem = ({ title, description }) => {
  return (
    <li className="shadow-[0_0px_33px_-15px_rgba(0,0,0,0.3)] w-[25%] p-[3.5rem] rounded-[1rem] max-[600px]:w-[100%] max-[600px]:mb-[2rem]">
      <h4 className="text-[1.5rem] mb-[1rem] font-[600] capitalize max-[600px]:text-[2rem]">{title}</h4>
      <p className="text-[1.2rem]">{description}</p>
      <div className="btn-box w-max">
        <a href="" className="flex items-center justify-between mt-[1.5rem]">
          <p className="capitalize text-[1.3rem]">Read More</p>
        </a>
      </div>
    </li>
  );
};

export default PageUSP;
