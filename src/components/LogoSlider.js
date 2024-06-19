import React from "react";

const LogoSlider = () => {
  return (
    <div class="flex overflow-hidden space-x-12 group">
      <div class="flex space-x-8 animate-loop-scroll group-hover:paused">
      <img
          loading="lazy"
          src="images/brand/asus.svg"
          className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/xiaomi.svg"
             className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/samsung.svg"
          className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/sony.svg"
         className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/wacom.svg"
         className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/apple.svg"
          className="max-w-none h-20 "
          alt=""
        />
      </div>
      <div
        class="flex space-x-8 animate-loop-scroll group-hover:paused"
        aria-hidden="true"
      >
        <img
          loading="lazy"
          src="images/brand/asus.svg"
         className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/xiaomi.svg"
          className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/samsung.svg"
           className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/sony.svg"
          className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/wacom.svg"
           className="max-w-none h-20 "
          alt=""
        />
        <img
          loading="lazy"
          src="images/brand/apple.svg"
           className="max-w-none h-20 "
          alt=""
        />
      </div>
    </div>
  );
};

export default LogoSlider;
