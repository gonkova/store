"use client";
import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Searchbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All category");
  const [categories] = useState([
    "All category",
    "Category 1",
    "Category 2",
    "Category 3",
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (direction) => {
    if (direction === "up" && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedCategory(categories[selectedIndex - 1]);
    } else if (direction === "down" && selectedIndex < categories.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedCategory(categories[selectedIndex + 1]);
    }
  };

  return (
    <form className="w-full px-4 md:px-0 mx-auto md:w-[453px] md:h-[44px] relative">
      <div className="flex">
        <input
          type="search"
          placeholder="Search something…"
          className="w-full p-4 bg-custombg rounded-l-lg focus:outline-none"
        />
        <div className="relative flex items-center">
          <input
            type="text"
            readOnly
            value={selectedCategory}
            className="appearance-none bg-custombg p-4 text-center rounded-r-none focus:outline-none cursor-pointer"
            onClick={toggleDropdown}
          />
          <div className="absolute right-14 flex flex-col text-darkGray">
            <IoMdArrowDropup onClick={() => handleCategoryChange("up")} className="text-xl cursor-pointer"/>
            <IoMdArrowDropdown onClick={() => handleCategoryChange("down")} className="text-xl cursor-pointer" />
          </div>
          {isDropdownOpen && (
            <ul className="absolute top-full left-0 w-full bg-custombg border border-gray-300  mt-1 z-10">
              {categories.map((category, index) => (
                <li
                  key={category}
                  className={`p-2 cursor-pointer ${
                    index === selectedIndex ? "bg-gray-300" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedIndex(index);
                    setIsDropdownOpen(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          )}
          <button
            type="submit"
            className="bg-darkGray text-center w-[44px] h-[50px] p-2 rounded-lg"
          >
            <IoIosSearch className="text-white text-2xl" />
          </button>
        </div>
      </div>
    </form>
  );
}
