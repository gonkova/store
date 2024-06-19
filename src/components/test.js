import React from "react";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaHeart, FaShoppingCart, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaUser, FaSquareFacebook } from "react-icons/fa6";
import { CgChevronDown } from "react-icons/cg";
import Translation from "./Translation";
import Searchbar from "./Searchbar";

export default function SectionHeader() {
  return (
    <div className="py-2 mx-auto md:px-20 w-full max-w-7xl flex flex-col gap-3 h-[140px]">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-4">
          <FaSquareFacebook className="text-xl text-lightGray" />
          <FaTwitter className="text-xl text-lightGray" />
          <FaYoutube className="text-xl text-lightGray" />
          <PiInstagramLogoLight className="text-xl text-lightGray" />
        </div>
        <div className="flex flex-row items-center space-x-4">
          <h4 className="text-gray text-base">Order tracking</h4>
          <h4 className="text-gray text-base">Help</h4>
          <Translation />
        </div>
      </div>
      <hr className=" border-black" />
      <div className="flex flex-row items-center justify-between space-x-4">
        <div>
          <h2 className="font-bold text-[28px]">STORE</h2>
        </div>
        <Searchbar />
        <div className="flex flex-row space-x-2">
          <div className="w-12 h-12 rounded-full border border-lightGrayishBlue flex items-center justify-center">
            <FaShoppingCart className="text-lightGray3 text-xl" />
            <div className="text-white text-xs text-center rounded-full w-5 h-5 bg-red flex items-center justify-center -mt-7 ml-2">
              3
            </div>
          </div>
          <div className="w-12 h-12 rounded-full border border-lightGrayishBlue flex items-center justify-center">
            <FaHeart className="text-lightGray3 text-xl" />
          </div>
          <div className="w-12 h-12 rounded-full border border-lightGrayishBlue flex items-center justify-center">
            <FaUser className="text-lightGray3 text-xl" />
          </div>
          <div>
            <h4 className="text-gray text-base">Ivan Todorov</h4>
            <div className="flex flex-row items-center space-x-2">
              <h4>My Account</h4>
              <CgChevronDown className="text-lightGray3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
