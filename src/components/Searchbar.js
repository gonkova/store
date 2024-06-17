'use client';
import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

export default function Searchbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All category");
  const [categories] = useState(["All category", "Category 1", "Category 2", "Category 3"]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategoryChange = (direction) => {
    if (direction === 'up' && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
      setSelectedCategory(categories[selectedIndex - 1]);
    } else if (direction === 'down' && selectedIndex < categories.length - 1) {
      setSelectedIndex(selectedIndex + 1);
      setSelectedCategory(categories[selectedIndex + 1]);
    }
  };

  return (
    <form className='w-[453px] relative'>
      <div className='flex'>
        <input
          type='search'
          placeholder='Search something…'
          className='w-full p-4 bg-custombg rounded-l-lg focus:outline-none'
        />
        <div className='relative flex items-center  rounded-r-lg'>
          <input
            type='text'
            readOnly
            value={selectedCategory}
            className='appearance-none bg-custombg p-4 pr-8 rounded-r-lg focus:outline-none cursor-pointer'
            onClick={toggleDropdown}
          />
          <div className='absolute right-2 flex flex-col text-darkGray'>
            <IoMdArrowDropup onClick={() => handleCategoryChange('up')} />
            <IoMdArrowDropdown onClick={() => handleCategoryChange('down')} />
          </div>
          {isDropdownOpen && (
            <ul className='absolute top-full left-0 w-full bg-custombg border border-gray-300 rounded-lg mt-1 z-10'>
              {categories.map((category, index) => (
                <li
                  key={category}
                  className={`p-2 cursor-pointer ${index === selectedIndex ? 'bg-gray-300' : ''}`}
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
        </div>
        <button type='submit' className='bg-darkGray text-center w-[44px] h-[44px] p-2 rounded-lg'>
          <IoIosSearch className='text-white text-3xl' />
        </button>
      </div>
    </form>
  );
}
