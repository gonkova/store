import React from "react";
import Button from "./Button";

export default function SectionElementsCategory() {
  return (
    <div className=" mt-10 md:mt-16  py-2 mx-auto  md:px-10 w-full max-w-7xl md:h-[397px] flex flex-col gap-10">
      <div className="flex justify-between px-14 mt-10">
        <h2 className="text-[28px] font-bold">Category</h2>
        <Button className="text-secondary border-secondary bg-transparent hover:bg-secondary text-base">
          View All
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="images/category/icon.svg"
            alt=""
            className="w-[56px] h-[56px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="images/category/camera.svg"
            alt=""
            className="w-[56px] h-[56px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="images/category/computer.svg"
            alt=""
            className="w-[56px] h-[56px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="images/category/fashion.svg"
            alt=""
            className="w-[56px] h-[56px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="images/category/controller.svg"
            alt=""
            className="w-[56px] h-[56px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <img
            src="images/category/ball.svg"
            alt=""
            className="w-[56px] h-[56px] object-cover cursor-pointer"
          />
          <p className="text-sm font-bold text-dark">Category Name</p>
          <p className="text-lightGray text-sm">2,3k items</p>
        </div>
      </div>
    </div>
  );
}
