import React from "react";
import hamburger from "../images/icon-menu.svg";
import closeMenu from "../images/icon-close.svg";
import logo from "../images/logo.svg";
import cartIcon from "../images/icon-cart.svg";
import imageAvatar from "../images/image-avatar.png";

import { useState } from "react";
import CartCard from "./CartCard";

const Header = ({ showCartCard, setShowCartCard }) => {
  const [mobileMenu, setMobilemenu] = useState(false);

  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <div>
      <div className="relative flex justify-between items-center px-4 py-2 md:py-4 md:border-b-2 border-gray-200 gap-4">
        {showCartCard && (
          <div className="bg-white hidden md:block font-semibold absolute w-60 top-16 right-8 shadow-lg rounded-md z-40">
            <CartCard cardPy={20} />
          </div>
        )}
        <div className="flex gap-4 justify-start items-center py-2">
          <img
            src={hamburger}
            alt="hamburger"
            className="w-6 h-4 translate-y-[2px] md:hidden"
            onClick={() => setMobilemenu(true)}
          />
          <img src={logo} alt="logo" />
          <div className="hidden md:block">
            <ul className="flex gap-4 pl-8 font-semibold text-[#ccc]">
              <li>Collections</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-end">
          <div className="relative">
            <img
              src={cartIcon}
              alt="cart-icon"
              onClick={() => setShowCartCard((showCartCard) => !showCartCard)}
            />
            {cartItemCount > 0 ? (
              <p className="px-[0.65rem] rounded-2xl text-white font-semibold bg-orange-500 absolute -top-4 left-2">
                {cartItemCount}
              </p>
            ) : (
              ""
            )}
          </div>

          <img
            src={imageAvatar}
            alt="avatar"
            className="w-6 h-6 object-cover"
          />
        </div>
        {mobileMenu ? (
          <div className="md:hidden absolute left-0 top-0 z-20 bg-[rgba(0,0,0,0.6)] h-full w-[100%]">
            <div className="pl-6  py-6 bg-white h-full w-[70%]">
              <img
                src={closeMenu}
                alt="menu-close"
                className="mb-6"
                onClick={() => setMobilemenu(false)}
              />
              <ul className="flex flex-col gap-4 font-semibold text-[#ccc]">
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
