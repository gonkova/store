import React from "react";
import { GrGithub } from "react-icons/gr";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoLight } from "react-icons/pi";
import { FaTwitter } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-red-100 py-2 mx-auto md:px-20 w-full max-w-7xl h-[64px] flex flex-col gap-20">
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-mediumGray text-sm">
            Store &copy;Copyright 2024, Inc. All rights reserved
          </p>
        </div>
        <div className="flex flex-row items-center space-x-4">
          <FaSquareFacebook className="text-2xl text-lightGray" />
          <FaTwitter className="text-2xl text-lightGray" />
          <FaLinkedin className="text-2xl text-lightGray" />
          <PiInstagramLogoLight className="text-2xl text-lightGray" />
          <GrGithub className="text-3xl text-lightGray" />
        </div>
      </div>
    </div>
  );
}
