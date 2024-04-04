import React from "react";
import Single from "../img/mentor.jpeg";
import Double from "../img/dean.jpeg";

const Mentor = () => {
  return (
    <div className="destination my-16 mx-8 text-center md:my-16 md:mx-24 text-black">
      {/* <h1 className="font-bold text-5xl">Our Events</h1> */}
      <h1 className="relative text-center text-3xl font-semibold my-7">
        MENTORS
      </h1>

      <div className="max-w-[1240px]  my-14 mx-auto grid md:grid-cols-2 gap-8">
        <div className="w-full bg-gray-100 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-white rounded-full"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Sridhara H S</h2>
          <div className="text-center font-medium">
            <p className="  text-center py-2 border-b mx-8 mt-8">
              Robotics Lab Mentor
            </p>
          </div>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 h-24 mx-auto mt-[-3rem] bg-transparent rounded-full"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Dr. V Siddeswara Prasad
          </h2>
          <div className="text-center font-medium">
            <p className=" text-center py-2 border-b mx-8 mt-8">
              Robotics Lab Co-ordinator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Mentor;
