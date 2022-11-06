import React from "react";
import Image from "next/image";
import linkedin from "../assets/linkedin1.png";
import twitter from "../assets/twitter1.png";
import github from "../assets/github.png";

const Navbar = () => {
  return (
    <div className=" flex justify-between items-center p-4 whitespace-nowrap sm:px-8 sm:py-6 border-b-2 border-gray-200 ">
      {/* Left */}
      <div className="relative ">
        <p className="relative z-10 font-bold pl-1 text-[18px]   pt-[2px]   ">
          <span className="text-white pr-[3px]">Ca</span>meron William
        </p>
        <div className="absolute bg-purple-400  top-0 w-[2rem]   h-[2rem] rounded-full   "></div>
      </div>

      {/* Middle */}
      <div className="hidden sm:block ">
        <ul className="flex space-x-6 md:space-x-8 items-center text-[18px] ">
          <li>
            <p>About me </p>
          </li>
          <li>
            <p>Projects </p>
          </li>
          <li className="hidden md:block">
            <p className="">Contact me </p>
          </li>
          <li>
            <p className="hidden sm:flex md:hidden bg-black text-white p-2 rounded-[1rem]">
              Contact me{" "}
            </p>
          </li>
        </ul>
      </div>
      {/* Right */}
      <div className="hidden md:block ">
        <ul className="flex space-x-6 items-center">
          <li className="w-10 h-10">
            <Image src={linkedin} />
          </li>
          <li className="w-10 h-10">
            <Image src={twitter} />
          </li>
          <li className="w-10 h-10">
            <Image src={github} />
          </li>
        </ul>
      </div>
      {/* Extra */}
      <div className="sm:hidden font-bold ">
        <p>Contact</p>
      </div>
    </div>
  );
};

export default Navbar;
