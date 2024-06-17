import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import Translation from "./Translation";
import Searchbar from './Searchbar';

export default function SectionHeader() {
  return (
    <div className="py-2 mx-auto md:px-10 w-full max-w-7xl flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row items-center space-x-4">
          <FaSquareFacebook className="text-2xl text-lightGray" />
          <FaTwitter className="text-2xl text-lightGray" />
          <FaLinkedin className="text-2xl text-lightGray" />
          <PiInstagramLogoLight className="text-2xl text-lightGray" />
          <GrGithub className="text-3xl text-lightGray" />
        </div>
        <div className="flex flex-row items-center space-x-4">
          <h4 className="text-gray text-base">Order tracking</h4>
          <h4 className="text-gray text-base">Help</h4>
          <Translation />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center space-x-4">
      <div>
        <h2>STORE</h2>
      </div>
      <Searchbar />
      </div>
    </div>
  );
}
