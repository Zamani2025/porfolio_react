import React, { useEffect, useState } from "react";
import HeroComponent from "../components/HeroComponent";
import { FaAngleDoubleUp } from "react-icons/fa";
import AboutComponent from "../components/AboutComponent";
import SkillsComponent from "../components/SkillsComponent";
import ServiceComponent from "../components/ServiceComponent";
import PortfoliComponent from "../components/PortfoliComponent";
import WorkExperienceComponent from "../components/WorkExperienceComponent";
import ContactComponent from "../components/ContactComponent";

const HomePage = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolling past a certain point
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <>
      <HeroComponent />
      <AboutComponent />
      <SkillsComponent />
      <ServiceComponent />
      <PortfoliComponent />
      <WorkExperienceComponent />
      <ContactComponent />

      {isVisible && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-4 right-4 bg-primary-200 text-white p-3 rounded-full shadow-lg transform 
          ${isVisible ? "animate-fade-in-up" : "hidden"} 
          hover:bg-primary-300`}
          aria-label="Scroll to top"
        >
          <FaAngleDoubleUp />
        </button>
      )}
    </>
  );
};

export default HomePage;
