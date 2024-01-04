import React from "react";
import cartIcon from "../images/icon-cart.svg";
const AddToCart = () => {
  return (
    <div>
      <div className="mb-6 bg-[hsl(26,100%,55%)] shadow-lg shadow-[hsl(25,100%,94%)] flex gap-4 justify-center py-2 mx-4 rounded-md">
        <img src={cartIcon} alt="cart" className="text-white" />
        <p className="text-white font-semibold">Add to cart</p>
      </div>
    </div>
  );
};

export default AddToCart;
