import React from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaAngleRight, FaFacebookF, FaGithub, FaTwitter } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

const HeroComponent = () => {
  return (
    <section className="lg:h-[90vh] h-[65vh] hero px-4 relative w-full">
      <div className="absolute inset-0 bg-primary-300 bg-opacity-85 flex flex-col items-center justify-center lg:gap-6 gap-3">
        <h1 className="lg:text-6xl text-2xl font-bold text-white">I Provide</h1>

        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Web Development",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Mobile App Development",
            1000,
            "Graphix Design",
            1000,
            "Project Management",
            1000,
          ]}
          wrapper="span"
          speed={40}
          className="lg:text-8xl text-3xl font-bold text-primary-200 underline decoration-primary-200"
          repeat={Infinity}
        />
        <div className="lg:text-lg text-sm lg:mt-4 mt-3 text-gray-400 text-center w-[70%] ">
          and I am a Full Stack Developer, with a strong background in Frontend
          and Backend development. For over 3 years, I've worked on a wide range
          of projects, from simple landing pages to complex web applications.
        </div>
        <div className="flex items-center mt-2 gap-6 justify-center w-fit">
          <FaFacebookF
            size={20}
            className=" cursor-pointer text-white hover:text-primary-200 duration-300 transition-all"
          />
          <FaTwitter
            size={20}
            className=" cursor-pointer text-white hover:text-primary-200 duration-300 transition-all"
          />
          <CiLinkedin
            size={20}
            className=" cursor-pointer text-white hover:text-primary-200 duration-300 transition-all"
          />
          <FaGithub
            size={20}
            className=" cursor-pointer text-white hover:text-primary-200 duration-300 transition-all"
          />
          <TbWorld
            size={20}
            className=" cursor-pointer text-white hover:text-primary-200 duration-300 transition-all"
          />
        </div>
        <Link to={"/about"} className="bg-primary-200 hover:bg-primary-300 transition-all transform duration-300 cursor-pointer flex items-center justify-center mt-2 font-bold text-md px-8 uppercase text-white rounded-full py-4 w-[250px] text-center">
          <span className="">Learn More </span>
          <span className="">
            <FaAngleRight className="text-white" />
          </span>
        </Link>
      </div>
    </section>
  )
}

export default HeroComponent
