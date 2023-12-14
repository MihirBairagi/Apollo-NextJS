import Image from "next/image"
import Button from "./common/Button"

const AboutCompany = () => {
  return (
    <>

    <section className="about-us-section my-[8rem] px-[6rem]
    max-[600px]:my-[5rem]
    max-[600px]:px-[2rem]
    " >
        <div className="container">
            <div className="about-us-box flex flex-wrap justify-between item-end">
                <div className="text-box w-[45%]
                    max-[600px]:w-[100%]
                ">
                    <h6 className="text-[#F68B41] mb-[1.5rem] text-[1.5rem]" >
                        About Our Company
                    </h6>
                    <h2 className="font-[600] text-[3rem] mb-[1.5rem] leading-[1.3]"  >
                        We are committed to Roofing Excellence
                    </h2>

                    <div className="img-box w-[100%] flex items-center justify-between mb-[2rem]
                        min-[600px]:hidden
                    ">
                        <div className="big-img w-[60%] relative">
                            <Image className="w-[100%] object-cover rounded-[1rem]" 
                            src="/assets/img/about-img-1.webp"
                            width={100}
                            height={100}
                            />

                        </div>
                        
                        <div className="small-img w-[37%] h-[80%] "> 
                            <Image className="w-[100%] h-full object-cover rounded-[1rem]"
                            src="/assets/img/about-img-2.webp"
                            width={100}
                            height={100}
                            />
                        </div>
                    </div>


                    <p className="mb-[2.5rem] text-[1.2rem] leading-[1.8] text-justify" >
                        India’s Roofing Specialist Apollo RoofTuff, is a path-breaking roofing solution that gives your structures the unmatched strength and class-apart style that they deserve. Apollo RoofTuff are ‘rough’ and ‘tough’ roofing sheets that are not just strong and beautiful on the outside, but are equally mesmerizing from the inside as well RoofTuff provides world-class solutions of metal roofing systems for residential roofs, industrial sheds, warehouse sheds, commercial buildings and other infrastructure
                    </p>
                    <Button buttonText="Learn More" />
                </div>
                <div className="img-box w-[40%] flex items-center justify-between
                    max-[600px]:hidden
                ">
                    <div className="big-img w-[60%] relative">
                        <Image className="w-[100%] object-cover rounded-[1rem]" 
                         src="/assets/img/about-img-1.webp"
                         width={100}
                         height={100}
                        />

                    <div className="list-box absolute bottom-[-10%] left-[-25%] " >
                        <div className="list flex items-center w-max rounded-[1rem] p-[1rem] bg-[#fff] mb-[1rem] shadow-[0_0px_33px_-15px_rgba(0,0,0,0.3)]">
                            <div className="img-box mr-[1rem] w-[4rem]">
                                <Image 
                                src="/assets/img/orange-icon.png"
                                width={100}
                                height={100}
                                />
                            </div>
                            <div className="text-box">
                                <p className="text-[1rem]" >
                                    We have more than 30+ <br/> year of experience
                                </p>
                            </div>
                        </div>
                        <div className="list flex items-center w-max rounded-[1rem] p-[1rem] bg-[#fff] ml-[3rem] shadow-[0_0px_33px_-15px_rgba(0,0,0,0.3)] ">
                            <div className="img-box mr-[1rem] w-[4rem]">
                                <Image 
                                src="/assets/img/orange-icon.png"
                                width={100}
                                height={100}
                                />
                            </div>
                            <div className="text-box">
                                <p className="text-[1rem]" >
                                    We have more than 30+ <br/> year of experience
                                </p>
                            </div>
                        </div>
                    </div>

                    </div>
                    
                    <div className="small-img w-[37%] h-[80%] "> 
                        <Image className="w-[100%] h-full object-cover rounded-[1rem]"
                         src="/assets/img/about-img-2.webp"
                         width={100}
                         height={100}
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>

    </>
  )
}

export default AboutCompany