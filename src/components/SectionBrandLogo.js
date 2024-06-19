import React from 'react';
import LogoSlider from './LogoSlider';

export default function SectionBrandLogo() {
  return (
    <div className=" md:mt-4 py-2 mx-auto md:px-10 w-full max-w-7xl h-[120px] flex flex-col md:flex-row items-center justify-around">
    <div className="flex flex-col md:flex-row p-3 md:p-7 ">
          <div className="w-full md:flex justify-between items-center gap-5 md:gap-10 hidden">
            <img
              src="images/brand/asus.svg"
              alt=""
              className="w-auto h-5 md:h-32 cursor-pointer"
            />
            <img
              src="images/brand/xiaomi.svg"
              alt=""
              className="w-auto h-5 md:h-32 cursor-pointer"
            />
            <img
              src="images/brand/samsung.svg"
              alt=""
              className="w-auto h-5 md:h-32 cursor-pointer"
            />
            <img
              src="images/brand/sony.svg"
              alt=""
              className="w-auto h-5 md:h-32 cursor-pointer"
            />
            <img
              src="images/brand/wacom.svg"
              alt=""
              className="w-auto h-5 md:h-32 cursor-pointer"
            />
            <img
              src="images/brand/apple.svg"
              alt=""
              className="w-auto h-5 md:h-32 cursor-pointer"
            />
          </div>
          <div className="md:hidden w-full -mt-16 h-[80px]">
            <LogoSlider />
          </div>
        </div>
        </div>
  )
}
