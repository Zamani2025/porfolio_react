import React from "react";

const WorkExperienceComponent = () => {
  return (
    <section className="bg-white min-h-[80vh] container mx-auto px-4 py16">
      <div className="flex items-start justify-start flex-col gap-4 mb-10">
        <h1 className="text-4xl font-bold">Work Experience</h1>
        <div className="py-0.5 px-7 bg-primary-200 "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-2 items-start justify-center">
          <h1 className="text-3xl font-bold">Backend Developer</h1>
          <p className="text-primary-200">Google Inc 2021</p>
          <p className="text-start text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            esse iste optio placeat voluptatibus autem rem
          </p>
          <div className="w-full p-0.5 bg-gray-200 rounded-full mt-6"></div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <h1 className="text-3xl font-bold">Frontend Developer</h1>
          <p className="text-primary-200">Google Inc 2021</p>
          <p className="text-start text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            esse iste optio placeat voluptatibus autem rem
          </p>
          <div className="w-full p-0.5 bg-gray-200 rounded-full mt-6"></div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <h1 className="text-3xl font-bold">UI/UX Designer</h1>
          <p className="text-primary-200">Google Inc 2021</p>
          <p className="text-start text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            esse iste optio placeat voluptatibus autem rem
          </p>
          <div className="w-full p-0.5 bg-gray-200 rounded-full mt-6"></div>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <h1 className="text-3xl font-bold">Web Designer</h1>
          <p className="text-primary-200">Google Inc 2021</p>
          <p className="text-start text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati
            esse iste optio placeat voluptatibus autem rem
          </p>
          <div className="w-full p-0.5 bg-gray-200 rounded-full mt-6"></div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceComponent;
