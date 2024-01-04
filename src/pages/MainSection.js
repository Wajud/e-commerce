import React from "react";
import imageProductOne from "../images/image-product-1.jpg";
import iconPrevious from "../images/icon-previous.svg";
import iconNext from "../images/icon-next.svg";
import imageProductTwo from "../images/image-product-2.jpg";
import imageProductThree from "../images/image-product-3.jpg";
import imageProductFour from "../images/image-product-4.jpg";
import Counter from "../components/Counter";
import AddToCart from "../components/AddToCart";

const MainSection = () => {
  return (
    <div className="pb-8 md:flex gap-8 justify-center items-center md:pb-8 md:pt-12 md:w-[90%] mx-auto">
      <div className="relative md:w-1/2 md:max-w-[27rem]">
        <img
          src={imageProductOne}
          alt="product-1"
          className="md:rounded-md object-cover md:mb-2"
        />

        {/* Arrows */}
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white absolute left-8 top-1/2 md:hidden">
          <img src={iconPrevious} alt="previous-icon" className="" />
        </div>
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-white absolute right-8 top-1/2 md:hidden">
          <img src={iconNext} alt="next-icon" className="" />
        </div>

        {/* End of Arrows */}
        <div className="hidden md:flex mx-auto gap-4 justify-center py-2">
          <img
            src={imageProductOne}
            alt="next-icon"
            className="w-1/4 h-24 rounded-md object-fit cursor-pointer"
          />
          <img
            src={imageProductTwo}
            alt="next-icon"
            className="w-1/4 h-24 rounded-md object-fit cursor-pointer"
          />
          <img
            src={imageProductThree}
            alt="next-icon"
            className="w-1/4 h-24 rounded-md object-fit cursor-pointer"
          />
          <img
            src={imageProductFour}
            alt="next-icon"
            className="w-1/4 h-24 rounded-md object-fit cursor-pointer"
          />
        </div>
      </div>

      <div className="md:w-1/2">
        <div className="pt-4 pb-2 px-4">
          <h2 className="font-bold text-[hsl(26,100%,55%)] mb-2">
            SNEAKER COMPANY
          </h2>
          <h1 className="text-xl font-bold mb-2">
            Fall Limited Edition Sneakers
          </h1>
          <p className="text-[#ccc] leading-6">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole. They'll withstand everything
            the weather can offer.
          </p>

          <div className="flex md:flex-col gap-4 items-center justify-between md:justify-start font-bold my-4">
            <div className="flex md:justify-start md:self-start gap-4 items-center">
              <p className="text-xl">$125.00</p>
              <p className="text-[hsl(26,100%,55%)] bg-[hsl(25,100%,94%)] px-1 rounded-sm">
                50%
              </p>
            </div>

            <div className="self-start">
              <p className="text-sm text-gray-400 line-through">$250.00</p>
            </div>
          </div>
        </div>
        <Counter />
        <AddToCart />
      </div>
    </div>
  );
};

export default MainSection;
