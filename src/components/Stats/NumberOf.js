import React from "react";

const NumberOf = () => {
  return (
    <section className="w-full h-28 grid grid-cols-2 grid-rows-1 gap-3">
      <div className="bg-slate-100 rounded-xl shadow-md flex flex-col justify-center items-start space-y-2 p-2">
        <p className="text-sm text-gray-500">Number Of Users</p>
        <p className="text-2xl font-semibold text-[#222B45]">100</p>
      </div>
      <div className="bg-slate-100 rounded-xl shadow-md flex flex-col justify-center items-start space-y-2 p-2">
        <p className="text-sm text-gray-500">Number Of Admin</p>
        <p className="text-2xl font-semibold text-[#222B45]">4</p>
      </div>
    </section>
  );
};

export default NumberOf;
