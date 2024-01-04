import React, { useContext } from "react";

const CartCard = ({ cardPy }) => {
  return (
    <div>
      <h3 className="px-4 py-4 border-b ">Cart</h3>
      <p className={`text-center py-${cardPy}`}>Your cart is empty</p>
    </div>
  );
};

export default CartCard;
