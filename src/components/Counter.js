import React from "react";

const Counter = () => {
  return (
    <div>
      <div className="flex gap-4 justify-between  items-center mx-4 mb-4 px-4 py-1 rounded-md bg-[hsl(223,64%,98%)]">
        <div className="bg-[hsl(26,100%,55%)] w-[10px] h-[3px]"></div>
        <p className="font-bold">0</p>
        <p className="font-bold text-lg text-[hsl(26,100%,55%)]">+</p>
      </div>
    </div>
  );
};

export default Counter;
