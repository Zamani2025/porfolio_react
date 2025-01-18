import React from "react";
import FooterLogo from "../assets/footer-bg.png";
import { TbWorld } from "react-icons/tb";
import { FaFacebookF, FaGithub, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer-content min-h-[10vh]">
      <div className="py-28 h-full w-full px-4 container mx-auto">
        <div className="grid grid-cols-1 w-full mt-28 lg:grid-cols-3 items-center justify-center gap-4">
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-white">saani.</h1>
            <p className="text-gray-400">
              Minimal & Crative Portfolio/CV/Biodata Solution in One Platform.
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold uppercase text-gray-400">
              Get In Touch.
            </h1>
            <p className="text-white font-bold">iddishani1@gmail.com</p>
            <p className="text-white font-bold">+233 (552) 732025</p>
            <p className="text-white font-bold">
              Kumasi, Ashanti Region, Ghana
            </p>
          </div>
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-3xl font-bold uppercase text-gray-400">
              Follow Me
            </h1>
            <div className="flex items-center w-fit justify-between gap-4">
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
          </div>
        </div>
        <div className="w-full p-0.5 bg-gray-400 mt-20 rounded"></div>
        <div className="flex items-center lg:justify-end justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="mt-12 border outline-none py-2 px-8 bg-transparent rounded text-gray-200 focus-within:border-primary-200"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
