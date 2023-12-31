import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="pb-20 categories h-[calc(85vh+1px)] bg-black text-white flex justify-evenly items-center">
      <Link to="/budget">
        <div className="font-bold text-3xl border-4 rounded-2xl border-gray-300 py-32 px-12 hover:border-white  hover:scale-110 transition-all cursor-pointer">
          <h1>Budget Phones</h1>
          <h3 className="text-xl font-semibold pt-4 text-gray-300">
            Price Range: Rs.10000 - Rs.20000
          </h3>
        </div>
      </Link>
      <Link to="/midrange">
        <div className="font-bold text-3xl border-4 rounded-2xl border-gray-300 py-32 px-12 hover:border-white  hover:scale-110 transition-all cursor-pointer">
          <h1>Mid Range</h1>
          <h3 className="text-xl font-semibold pt-4 text-gray-300">
            Price Range: Rs.20000 - Rs.40000
          </h3>
        </div>
      </Link>
      <Link to="/flagship">
        <div className="font-bold text-3xl border-4 rounded-2xl border-gray-300 py-32 px-12 hover:border-white  hover:scale-110 transition-all cursor-pointer">
          <h1>Flagship</h1>
          <h3 className="text-xl font-semibold pt-4 text-gray-300">
            Price Range: Rs.40000 - Rs.100000
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
