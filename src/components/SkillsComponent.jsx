import React from "react";

const SkillsComponent = () => {
  return (
    <section className="bg-white min-h-[80vh] py-20 container mx-auto px-4">
      <div className="flex flex-col gap-2 items-start justify-start">
        <h1 className="text-3xl font-bold">Specialize Areas</h1>
        <div className="py-0.5 px-6 bg-primary-200 "></div>
      </div>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-4 lg:gap-10 mt-8 lg:mt-12">
        <div className="flex flex-col gap-2 lg:w-1/2 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">90%</h1>
            <h1 className="text-gray-500">Html/Css</h1>
          </div>
          <div className="w-full py-1 bg-gray-300 rounded-full relative">
            <div className="bg-primary-200 py-1 absolute inset-0 w-[90%] rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:w-1/2 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">80%</h1>
            <h1 className="text-gray-500">Python/Django</h1>
          </div>
          <div className="w-full py-1 bg-gray-300 rounded-full relative">
            <div className="bg-primary-200 py-1 absolute inset-0 w-[80%] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 lg:gap-10 mt-8">
        <div className="flex flex-col gap-2 lg:w-1/2 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">70%</h1>
            <h1 className="text-gray-500">JavaScript</h1>
          </div>
          <div className="w-full py-1 bg-gray-300 rounded-full relative">
            <div className="bg-primary-200 py-1 absolute inset-0 w-[70%] rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:w-1/2 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">85%</h1>
            <h1 className="text-gray-500">PHP/Laravel</h1>
          </div>
          <div className="w-full py-1 bg-gray-300 rounded-full relative">
            <div className="bg-primary-200 py-1 absolute inset-0 w-[85%] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 lg:gap-10 mt-8">
        <div className="flex flex-col gap-2 lg:w-1/2 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">75%</h1>
            <h1 className="text-gray-500">Flutter</h1>
          </div>
          <div className="w-full py-1 bg-gray-300 rounded-full relative">
            <div className="bg-primary-200 py-1 absolute inset-0 w-[75%] rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:w-1/2 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">95%</h1>
            <h1 className="text-gray-500">Tailwind/Bootstrap</h1>
          </div>
          <div className="w-full py-1 bg-gray-300 rounded-full relative">
            <div className="bg-primary-200 py-1 absolute inset-0 w-[95%] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-8 lg:gap-10 mt-8">
        <div className="flex flex-col gap-1 lg:w-1/2 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">60%</h1>
            <h1 className="text-gray-500">Digital Marketing</h1>
          </div>
          <div className="w-full py-1 bg-gray-300 rounded-full relative">
            <div className="bg-primary-200 py-1 absolute inset-0 w-[60%] rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-1 lg:w-1/2 w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-semibold">50%</h1>
            <h1 className="text-gray-500">Marketing</h1>
          </div>
          <div className="w-full py-1 bg-gray-300 rounded-full relative">
            <div className="bg-primary-200 py-1 absolute inset-0 w-[50%] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
