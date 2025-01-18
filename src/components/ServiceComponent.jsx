import React from "react";
import { FaMobileButton } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa6";
import { FaLaptopCode } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { MdOutlineContentCopy } from "react-icons/md";
import { GrAnnounce } from "react-icons/gr";

const ServiceComponent = () => {
  return (
    <section className="min-h-[150vh] mx-auto bg-secondary-100 px-4 py-16">
      <div className="container mx-auto flex items-center justify-center flex-col gap-8">
        <h1 className="lg:text-6xl text-3xl font-bold">My Services</h1>
        <div className="py-0.5 px-7 bg-primary-200 "></div>
        <p className="text-center lg:w-[600px] w-full text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam velit
          voluptates eveniet maiores distinctio veniam quae harum recusandae
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-full">
          <div className="bg-white flex flex-col gap-4  px-8 h-[300px] py-12 w-full overflow-hidden relative  group cursor-pointer">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-primary-200 -translate-y-80 group-hover:translate-y-0 transition-all  duration-300"></div>
            <div className="w-full flex items-center justify-start gap-3">
              <FaMobileButton size={60} className="text-primary-200 z-40 group-hover:text-white" />
              <h1 className="lg:text-3xl text-2xl font-bold z-40 group-hover:text-white">Mobile App Dev</h1>
            </div>
            <h2 className="mt-6 text-start text-gray-500 z-40 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              magnam eligendi suscipit
            </h2>
            <div className="w-fit z-40 group-hover:text-white uppercase underline font-semibold text-base mt-6 text-gray-500">
                Learn More 
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4  px-8 h-[300px] py-12 w-full overflow-hidden relative  group cursor-pointer">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-primary-200 -translate-y-80 group-hover:translate-y-0 transition-all  duration-300"></div>
            <div className="w-full flex items-center justify-start gap-3">
              <FaHtml5 size={60} className="text-primary-200 z-40 group-hover:text-white" />
              <h1 className="lg:text-3xl text-2xl font-bold z-40 group-hover:text-white">Web Development</h1>
            </div>
            <h2 className="mt-6 text-start text-gray-500 z-40 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              magnam eligendi suscipit
            </h2>
            <div className="w-fit z-40 group-hover:text-white uppercase underline font-semibold text-base mt-6 text-gray-500">
                Learn More 
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4  px-8 h-[300px] py-12 w-full overflow-hidden relative  group cursor-pointer">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-primary-200 -translate-y-80 group-hover:translate-y-0 transition-all  duration-300"></div>
            <div className="w-full flex items-center justify-start gap-3">
              <FaLaptopCode size={60} className="text-primary-200 z-40 group-hover:text-white" />
              <h1 className="lg:text-3xl text-2xl font-bold z-40 group-hover:text-white">Web Design</h1>
            </div>
            <h2 className="mt-6 text-start text-gray-500 z-40 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              magnam eligendi suscipit
            </h2>
            <div className="w-fit z-40 group-hover:text-white uppercase underline font-semibold text-base mt-6 text-gray-500">
                Learn More 
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4  px-8 h-[300px] py-12 w-full overflow-hidden relative  group cursor-pointer">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-primary-200 -translate-y-80 group-hover:translate-y-0 transition-all  duration-300"></div>
            <div className="w-full flex items-center justify-start gap-3">
              <FaVideo size={60} className="text-primary-200 z-40 group-hover:text-white" />
              <h1 className="lg:text-3xl text-2xl font-bold z-40 group-hover:text-white">Digital Marketing</h1>
            </div>
            <h2 className="mt-6 text-start text-gray-500 z-40 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              magnam eligendi suscipit
            </h2>
            <div className="w-fit z-40 group-hover:text-white uppercase underline font-semibold text-base mt-6 text-gray-500">
                Learn More 
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4  px-8 h-[300px] py-12 w-full overflow-hidden relative  group cursor-pointer">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-primary-200 -translate-y-80 group-hover:translate-y-0 transition-all  duration-300"></div>
            <div className="w-full flex items-center justify-start gap-3">
              <MdOutlineContentCopy size={60} className="text-primary-200 z-40 group-hover:text-white" />
              <h1 className="lg:text-3xl text-2xl font-bold z-40 group-hover:text-white">Graphix Design</h1>
            </div>
            <h2 className="mt-6 text-start text-gray-500 z-40 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              magnam eligendi suscipit
            </h2>
            <div className="w-fit z-40 group-hover:text-white uppercase underline font-semibold text-base mt-6 text-gray-500">
                Learn More 
            </div>
          </div>
          <div className="bg-white flex flex-col gap-4  px-8 h-[300px] py-12 w-full overflow-hidden relative  group cursor-pointer">
            <div className="absolute top-0 bottom-0 right-0 left-0 bg-primary-200 -translate-y-80 group-hover:translate-y-0 transition-all  duration-300"></div>
            <div className="w-full flex items-center justify-start gap-3">
              <GrAnnounce size={60} className="text-primary-200 z-40 group-hover:text-white" />
              <h1 className="lg:text-3xl text-2xl font-bold z-40 group-hover:text-white">UI/UX Design</h1>
            </div>
            <h2 className="mt-6 text-start text-gray-500 z-40 group-hover:text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              magnam eligendi suscipit
            </h2>
            <div className="w-fit z-40 group-hover:text-white uppercase underline font-semibold text-base mt-6 text-gray-500">
                Learn More 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceComponent;
