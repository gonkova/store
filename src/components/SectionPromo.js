import React from "react";
import Button from "./Button";

export default function SectionPromo() {
  return (
    <div className="bg-custombg1 bg-cover bg-no-repeat bg-center w-[1110px] h-[353px] mx-auto ">
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div>
          <img
            src="images/banner/img-banner.png"
            alt=""
            className="w-[350px] h-[340px] max-w-full  mt-4  object-cover"
          />
        </div>
        <div className="w full  mt-10 mb-10 flex flex-col md:items-start gap-4">
          <div className="text-primary text-sm ">FLASH SALE 7.7.7</div>
          <h2 className="text-4xl leading-[52px] font-bold">
          Lenovo Yoga X
            </h2>
          <p className="  text-lightGray text-base">
          Smarter and intuitive with the same expert design <br/>
          and detail. Plus combine innovative latest AI features
          </p>
          <div className="flex itens-center justify-center space-x-4 mt-4">
           <Button className="text-white bg-primary border-none text-base">Buy Now for &#36;750</Button>
           <p className="text-lightGray text-xl line-through py-3">&#36;1500,00</p>
          </div>
        
        </div>
      </div>
    </div>
  );
}
