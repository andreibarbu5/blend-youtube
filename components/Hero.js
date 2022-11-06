import Image from "next/image";
import React from "react";
import guy from "../assets/guy2.jpg";

const Hero = () => {
  return (
    <div className="">
      <div className="vv:realtive ">
        <div className="flex vv:absolute vv:z-0 right-0 vv:right-2 justify-center pt-[2rem]  vv:top-20  ">
          <div className="w-[14rem] h-[14rem] vv:w-[10rem]  vv:h-[10rem]   flex relative  mr-10  ">
            <Image
              src={guy}
              className="rounded-full object-cover relative z-10 "
            />
            <div className="absolute top-[2rem] -right-[2.5rem] w-[10rem] h-[10rem] vv:w-[6.5rem] vv:h-[6.5rem] vv:-right-[1.2rem]  bg-orange-500 rounded-full "></div>
          </div>
        </div>
        <div className="flex vv:justify-start justify-center relative z-10 vv:pl-8 vv:pt-6">
          <div className="">
            <p className="text-[18px] vv:text-[22px] pt-4">
              Hi!👋 I am Cameron.
            </p>
            <p className="text-[25px] vv:text-[29px] font-semibold pt-2 ">
              A
              <span className="text-purple-600 underline pl-1">
                software developer{" "}
              </span>{" "}
              <br /> from San Francisco
            </p>
            <div className="space-x-1 vv:space-x-4 pt-6">
              <button className="bg-purple-600 py-4 px-7 rounded-full text-white text-[13px]">
                Contact Me
              </button>
              <button className="bg-gray-200 py-4 px-7 rounded-full text-black font-semibold text-[13px]">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
