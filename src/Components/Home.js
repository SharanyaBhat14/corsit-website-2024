import React, { useState, useEffect } from "react";
import Typed from "react-typed";
import Events from "./Event";
import walle from "../img/wall-e.jpg";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 577); // Initial check for mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 577);
    };

    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Remove event listener on component unmount
    };
  }, []);

  const getImagePath = () => {
    if (isMobile) {
      return "https://images.unsplash.com/photo-1589254065909-b7086229d08c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80";
    } else {
      return "https://wallpapercave.com/wp/wp1816229.jpg";
    }
  };
  return (
    <div className=" h-[100%] relative text-white">
      <img className="w-full h-screen" src={getImagePath()} alt="Image" />
      <div className="bg-hero h-[100%]"></div>
      <div className=" absolute top-32 left-[55%] max-w-screen-sm -translate-x-10 -translate-y-[10%] mx-auto flex flex-col text-center sm:ml-28 sm:top-36">
        <p className=" font-bold ml-1 p-2 text-lg">Learn with us</p>
        <h1 className="md:text-5xl sm:text-4xl text-2xl py-3 font-bold  md:ml-11">
          Grow with us
        </h1>
      </div>
      <div className=" absolute top-44 left-[29%] sm:left-[40%] max-w-screen-sm -translate-x-10 -translate-y-[10%] mx-auto flex flex-col text-center sm:ml-44 sm:pt-14">
        <div className=" px-4 ml-[4.3rem] mt-14 sm:mt-14 flex items-center">
          <p className="md:text-5xl sm:text-4xl text-lg font-bold pt-0 ">
            Learn
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-base font-bold whitespace-nowrap md:pl-4 pl-1 "
            strings={[
              "Robotics",
              "Web Development",
              "Machine Learning",
              "App Development",
              "Arduino",
              "Photoshop",
              "Video Editing",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
      </div>
      <Events />
    </div>
  );
};

export default Home;
