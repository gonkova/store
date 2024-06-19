"use client";
import React, { useState } from "react";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaHeart, FaShoppingCart, FaYoutube, FaTwitter } from "react-icons/fa";
import { FaUser, FaSquareFacebook } from "react-icons/fa6";
import { CgChevronDown } from "react-icons/cg";
import { RiMenu3Fill } from "react-icons/ri";
import { RiCloseLargeFill } from "react-icons/ri";
import Translation from "./Translation";
import Searchbar from "./Searchbar";

export default function SectionHeader() {
  const [isClick, setIsClick] = useState(false);

  const toggleNavbar = () => {
    setIsClick(!isClick);
  };

  return (
    <div className=" py-2 mx-auto md:px-20 w-full max-w-7xl flex flex-col gap-3 md:h-[140px]">
      <div className="hidden md:flex flex-row items-center justify-between">
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
      <hr className=" border-lightGrayishBlue hidden md:block" />
      <div className="flex flex-row items-center justify-between space-x-4">
        <div>
          <h2 className="font-bold text-lg md:text-[28px] ml-3 md:ml-0">
            STORE
          </h2>
        </div>

        <div className="hidden md:block">
          <Searchbar />
        </div>
        <div className="flex flex-row space-x-2 ">
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
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 ml-10 text-dark-1"
              onClick={toggleNavbar}
            >
              {isClick ? (
                <RiCloseLargeFill className="text-3xl" />
              ) : (
                <RiMenu3Fill className="text-4xl" />
              )}
            </button>
          </div>
          <div className="hidden md:block">
            <h4 className="text-gray text-base">Ivan Todorov</h4>
            <div className="flex flex-row items-center space-x-2">
              <h4>My Account</h4>
              <CgChevronDown className="text-lightGray3" />
            </div>
          </div>
        </div>
      </div>
      {isClick && (
        <div className="bg-white md:hidden pl-10 inset-0 flex h-screen w-screen flex-col">
          <div className="px-2 pt-12 pb-3 space-y-6 sm:px-3 flex flex-col ">
            <Translation />
            <h4 className="text-gray text-base">Order tracking</h4>
            <h4 className="text-gray text-base">Help</h4>
            <div>
              <h4 className="text-gray text-base">Ivan Todorov</h4>
              <div className="flex flex-row items-center space-x-2">
                <h4>My Account</h4>
                <CgChevronDown className="text-lightGray3" />
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="block md:hidden">
        <Searchbar />
      </div>
    </div>
  );
}
