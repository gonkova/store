"use client";
import React from "react";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { FaStar } from "react-icons/fa";

export default function SectionProductList() {
  const productsListOne = [
    {
      id: 1,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/images/products/item.png",
    },
    {
      id: 2,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/images/products/item.png",
    },
    {
      id: 3,
      title: "Popular items from cat 01",
      price: "1,725.00",
      imageUrl: "/images/products/item.png",
    },
  ];

  const productsListTwo = [
    {
      id: 1,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/images/products/item-1.png",
    },
    {
      id: 2,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/images/products/item-1.png",
    },
    {
      id: 3,
      title: "Popular items from cat 02",
      price: "1,725.00",
      imageUrl: "/images/products/item-1.png",
    },
  ];
  const productsListThree = [
    {
      id: 1,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/images/products/item-2.png",
    },
    {
      id: 2,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/images/products/item-2.png",
    },
    {
      id: 3,
      title: "Popular items from cat 03",
      price: "1,725.00",
      imageUrl: "/images/products/item-2.png",
    },
  ];

  return (
    <div className="py-2 md:mb-20 mx-auto md:px-10 w-full max-w-7xl flex flex-col">
      <div className="mt-14 md:mt-0 mx-auto gap-x-24 p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-22">
        <div>
          <h2 className="font-bold text-[22px]">Product list 1</h2>
          {productsListOne.map((product) => (
            <div className="flex flex-row mt-10">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={64}
                height={64}
                className="object-cover mb-4"
              />
              <div key={product.id} className=" p-4 flex flex-col items-start">
                <h3 className="text-dark text-base font-bold mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center">
                  <span className="text-sm text-secondary mr-5">
                    &#36;{product.price}
                  </span>
                  <FaStar className="text-yellow mr-1" />
                  <span className="text-lightGray text-sm">4.6</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row items-center space-x-32 mt-8">
            <p className="text-blue text-base">View More Products…</p>
            <AiOutlineRight className="text-secondary cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-[22px]">Product list 2</h2>
          {productsListTwo.map((product) => (
            <div className="flex flex-row mt-10">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={64}
                height={64}
                className="object-cover mb-4"
              />
              <div key={product.id} className=" p-4 flex flex-col items-start">
                <h3 className="text-dark text-base font-bold mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center">
                  <span className="text-sm text-secondary mr-5">
                    &#36;{product.price}
                  </span>
                  <FaStar className="text-yellow mr-1" />
                  <span className="text-lightGray text-sm">4.6</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row items-center space-x-32 mt-8">
            <p className="text-blue text-base">View More Products…</p>
            <AiOutlineRight className="text-secondary cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="font-bold text-[22px]">Product list 3</h2>
          {productsListThree.map((product) => (
            <div className="flex flex-row mt-10">
              <Image
                src={product.imageUrl}
                alt={product.title}
                width={64}
                height={64}
                className="object-cover mb-4"
              />
              <div key={product.id} className=" p-4 flex flex-col items-start ">
                <h3 className="text-dark text-base font-bold mb-2">
                  {product.title}
                </h3>
                <div className="flex items-center">
                  <span className="text-sm text-secondary mr-5">
                    &#36;{product.price}
                  </span>
                  <FaStar className="text-yellow mr-1" />
                  <span className="text-lightGray text-sm">4.6</span>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-row items-center space-x-32 mt-8">
            <p className="text-blue text-base">View More Products…</p>
            <AiOutlineRight className="text-secondary cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
