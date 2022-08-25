import React from "react";

export function Spin() {
  return (
    <div className="w-full h-full p-3 flex flex-row justify-center items-center">
      <div className="w-36 h-36 rounded-full border-8 border-cyan-800 border-r-transparent animate-spin shadow-md"></div>
    </div>
  );
}
