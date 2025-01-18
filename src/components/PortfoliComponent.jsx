import React from "react";
import PC1 from "../assets/pc1.jpg";
import PC2 from "../assets/pc2.jpg";
import PC3 from "../assets/pc3.jpg";
import PC4 from "../assets/pc4.jpg";
import PC5 from "../assets/pc5.jpg";
import PC6 from "../assets/pc6.jpg";
import { GoSearch } from "react-icons/go";
import { FaAngleRight, FaLink } from "react-icons/fa6";

const PortfoliComponent = () => {
  return (
    <section className="bg-white min-h-[80vh] container  mx-auto px-4 py-16">
      <div className="container mx-auto flex items-center justify-center flex-col gap-4">
        <h1 className="lg:text-6xl text-4xl font-bold">Work Portfolio</h1>
        <div className="py-0.5 px-7 bg-primary-200 "></div>
        <p className="text-center lg:w-[600px] w-full text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit
          voluptates eveniet maiores distinctio veniam quae harum recusandae
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-16">
          <div className="w-full h-full shadow-md rounded relative overflow-hidden group">
            <div className="absolute inset-0 -translate-y-96 transition-all transform duration-300 cursor-pointer bg-primary-200 group-hover:translate-y-0 flex items-center justify-center flex-col gap-4">
              <h1 className="text-2xl text-white font-bold">
                Minimal Portfolio Theme
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="p-3 rounded-full text-center bg-white">
                  <GoSearch />
                </div>
                <div className="p-3 rounded-full text-center bg-white">
                  <FaLink />
                </div>
              </div>
            </div>
            <img src={PC1} alt="" className="w-full h-full object-scale-down" />
          </div>
          <div className="w-full h-full shadow-md rounded relative overflow-hidden group">
            <div className="absolute inset-0 -translate-y-96 transition-all transform duration-300 cursor-pointer bg-primary-200 group-hover:translate-y-0 flex items-center justify-center flex-col gap-4">
              <h1 className="text-2xl text-white font-bold">
                Minimal Portfolio Theme
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="p-3 rounded-full text-center bg-white">
                  <GoSearch />
                </div>
                <div className="p-3 rounded-full text-center bg-white">
                  <FaLink />
                </div>
              </div>
            </div>
            <img src={PC2} alt="" className="w-full h-full object-scale-down" />
          </div>
          <div className="w-full h-full shadow-md rounded relative overflow-hidden group">
            <div className="absolute inset-0 -translate-y-96 transition-all transform duration-300 cursor-pointer bg-primary-200 group-hover:translate-y-0 flex items-center justify-center flex-col gap-4">
              <h1 className="text-2xl text-white font-bold">
                Minimal Portfolio Theme
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="p-3 rounded-full text-center bg-white">
                  <GoSearch />
                </div>
                <div className="p-3 rounded-full text-center bg-white">
                  <FaLink />
                </div>
              </div>
            </div>
            <img src={PC3} alt="" className="w-full h-full object-scale-down" />
          </div>
          <div className="w-full h-full shadow-md rounded relative overflow-hidden group">
            <div className="absolute inset-0 -translate-y-96 transition-all transform duration-300 cursor-pointer bg-primary-200 group-hover:translate-y-0 flex items-center justify-center flex-col gap-4">
              <h1 className="text-2xl text-white font-bold">
                Minimal Portfolio Theme
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="p-3 rounded-full text-center bg-white">
                  <GoSearch />
                </div>
                <div className="p-3 rounded-full text-center bg-white">
                  <FaLink />
                </div>
              </div>
            </div>
            <img src={PC4} alt="" className="w-full h-full object-scale-down" />
          </div>
          <div className="w-full h-full shadow-md rounded relative overflow-hidden group">
            <div className="absolute inset-0 -translate-y-96 transition-all transform duration-300 cursor-pointer bg-primary-200 group-hover:translate-y-0 flex items-center justify-center flex-col gap-4">
              <h1 className="text-2xl text-white font-bold">
                Minimal Portfolio Theme
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="p-3 rounded-full text-center bg-white">
                  <GoSearch />
                </div>
                <div className="p-3 rounded-full text-center bg-white">
                  <FaLink />
                </div>
              </div>
            </div>
            <img src={PC5} alt="" className="w-full h-full object-scale-down" />
          </div>
          <div className="w-full h-full shadow-md rounded relative overflow-hidden group">
            <div className="absolute inset-0 -translate-y-96 transition-all transform duration-300 cursor-pointer bg-primary-200 group-hover:translate-y-0 flex items-center justify-center flex-col gap-4">
              <h1 className="text-2xl text-white font-bold">
                Minimal Portfolio Theme
              </h1>
              <div className="flex items-center justify-center gap-2">
                <div className="p-3 rounded-full text-center bg-white">
                  <GoSearch />
                </div>
                <div className="p-3 rounded-full text-center bg-white">
                  <FaLink />
                </div>
              </div>
            </div>
            <img src={PC6} alt="" className="w-full h-full object-scale-down" />
          </div>
        </div>
        <div className="bg-primary-200 hover:bg-primary-300 transition-all transform duration-300 shadow-lg shadow-gray-300 cursor-pointer flex items-center justify-center mt-2 font-semibold text-sm px-8 uppercase text-white rounded-full py-4 w-[225px] text-center">
          <span className="">Read Success Story </span>
        </div>
      </div>
    </section>
  );
};

export default PortfoliComponent;
