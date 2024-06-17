import React from "react";
import Button from "./Button";

export default function SectionElementsCategory() {
  return (
    <div className="bg-red-100 py-2 mx-auto md:px-10 w-full max-w-7xl h-[397px] flex flex-col gap-20">
      <div className="flex justify-between px-14 mt-10">
        <h2 className="text-[28px] font-bold">Category</h2>
        <Button className="text-secondary border-secondary bg-transparent hover:bg-secondary text-base">
          Vew All
        </Button>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around ">
        <div className="flex flex-col items-center justify-center gap-12 ">
          <img
            src="images/category/icon.svg"
            alt=""
            className="w-[56px] h-[56px]  object-cover cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-bold text-dark">Category Name</p>
            <p className="text-lightGray text-sm">2,3k items</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ">
          <img
            src="images/category/camera.svg"
            alt=""
            className="w-[56px] h-[56px]  object-cover cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-bold text-dark">Category Name</p>
            <p className="text-lightGray text-sm">2,3k items</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ">
          <img
            src="images/category/computer.svg"
            alt=""
            className="w-[56px] h-[56px]  object-cover cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-bold text-dark">Category Name</p>
            <p className="text-lightGray text-sm">2,3k items</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ">
          <img
            src="images/category/fashion.svg"
            alt=""
            className="w-[56px] h-[56px]  object-cover cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-bold text-dark">Category Name</p>
            <p className="text-lightGray text-sm">2,3k items</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ">
          <img
            src="images/category/controller.svg"
            alt=""
            className="w-[56px] h-[56px]  object-cover cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-bold text-dark">Category Name</p>
            <p className="text-lightGray text-sm">2,3k items</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 ">
          <img
            src="images/category/ball.svg"
            alt=""
            className="w-[56px] h-[56px]  object-cover cursor-pointer"
          />
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="text-sm font-bold text-dark">Category Name</p>
            <p className="text-lightGray text-sm">2,3k items</p>
          </div>
        </div>
      </div>
    </div>
  );
}
