import React from "react";

export default function SectionBenefit() {
  return (
    <div className=" py-2 mx-auto md:px-10 w-full max-w-7xl h-auto md:h-[124px] flex flex-col items-center justify-center gap-5 md:gap-0 md:flex-row md:items-center md:justify-around mt-24 md:mt-8">
      <div className="flex space-x-4">
        <img
          src="images/benefit/icon.svg"
          alt=""
         className="w-[40px] h-[40px]  object-cover cursor-pointer"
        />
        <div>
        <h2 className="text-lg font-bold">Free Shiping</h2>
        <p className="text-mediumGray text-sm md:text-base">Free delivery  for all orders</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src="images/benefit/icon-1.svg"
          alt=""
         className="w-[40px] h-[40px]  object-cover cursor-pointer"
        />
        <div>
        <h2 className="text-lg font-bold">Money Guarantee</h2>
        <p className="text-mediumGray text-sm md:text-base">30 days money back</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src="images/benefit/icon-2.svg"
          alt=""
          className="w-[40px] h-[40px]  object-cover cursor-pointer"
        />
        <div>
        <h2 className="text-lg font-bold">24/7 Support</h2>
        <p className="text-mediumGray text-sm md:text-base">Friendly 24/7 support</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <img
          src="images/benefit/icon-3.svg"
          alt=""
         className="w-[40px] h-[40px]  object-cover cursor-pointer"
        />
        <div>
        <h2 className="text-lg font-bold">Secure Payment</h2>
        <p className="text-mediumGray text-sm md:text-base">All cards accepted</p>
        </div>
      </div>
    </div>
  );
}
