import React from "react";

const Navbar = () => {
  return (
    <div className=" flex p-4">
      {/* Left */}
      <div className="relative ">
        <p className="relative z-10 font-bold pl-2 text-[18px]   pt-[1.5px]   ">
          <span className="text-white pr-[4px]">Ca</span>meron William
        </p>
        <div className="absolute bg-purple-400  top-0 w-[2rem]   h-[2rem] rounded-full   "></div>
      </div>

      {/* Middle */}
      {/* <div className="">
        <ul>
          <li>
            <p className="">About me </p>
          </li>
        </ul>
      </div> */}
      {/* Right */}
    </div>
  );
};

export default Navbar;
