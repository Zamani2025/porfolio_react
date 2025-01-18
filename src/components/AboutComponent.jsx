import React from "react";
import HeroImage from "../assets/hero.jpg";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <section className="container mx-auto min-h-[95vh] mt-10 px-4 flex flex-col lg:flex-row">
      {/* Left Section: Image */}
      <div className="relative w-full overflow-hidden min-w-1/2 min-h-[600px] lg:h-full">
        <div className="absolute lg:rounded-bl-[100px] left-24 top-0 lg:bg-gray-100 min-h-[50%] w-full min-:w-[50%]"></div>
        <img
          src={HeroImage}
          alt="Hero"
          className="lg:w-[80%] w-full shadow-lg lg:hover:-translate-x-16 cursor-pointer transition-all duration-700 lg:rounded-tr-[100px] lg:rounded-br-[100px] min-h-[80%] absolute right-0 top-4  object-cover"
        />
      </div>

      {/* Right Section: Content */}
      <div className="flex w-full min-w-1/2 flex-col pl-6 lg:pl-14 items-start justify-start">
        <div className="p-0.5 px-6 hidden lg:block lg:mt-6 bg-primary-200"></div>
        <h1 className="text-3xl lg:text-6xl font-bold lg:mt-6 mt-4 mb-4">
          Designing with passion That's work for you
        </h1>
        <p className="lg:text-base text-sm text-gray-500 lg:mt-4 mt-2">
          I am a Full Stack Developer with a strong background in Frontend and
          Backend development. For over 3 years, I have worked on a wide range
          of projects, from simple landing pages to complex web applications.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <div className="flex items-center justify-center gap-4">
            <IoCheckmarkDoneSharp />
            <h1 className="text-2xl">Quality Assurance</h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            <IoCheckmarkDoneSharp />
            <h1 className="text-2xl">Interactive Design</h1>
          </div>
          <div className="flex items-center justify-start gap-4">
            <IoCheckmarkDoneSharp />
            <h1 className="text-2xl">Easy to Use</h1>
          </div>
        </div>
        <Link to={"/service"} className="bg-primary-200 hover:bg-primary-300 transition-all transform duration-300 cursor-pointer flex items-center justify-center font-bold text-md px-8 my-6 uppercase shadow-lg shadow-gray-300 text-white rounded-full py-3 w-[150px] text-center">
          <span className="">Services</span>
        </Link>
      </div>
    </section>
  );
};

export default AboutComponent;
