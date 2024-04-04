import React from "react";

import { SlLocationPin } from "react-icons/sl";
import { MdAlternateEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="w-full  pt-36 pb-16 px-7">
      <div className=" max-w-[1240px]  mx-auto grid md:grid-cols-2">
        <iframe
          title="map"
          className=" rounded-lg h-64 w-fit ml-7 md:h-96 block "
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21196.047076970044!2d77.10587906813463!3d13.321289481298475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb02c6a8e4a1b33%3A0xef0799d235e8d52b!2sDepartment%20of%20Industrial%20Engineering%20And%20Management!5e0!3m2!1sen!2sin!4v1679157079789!5m2!1sen!2sin"
          // style={{ border: "0", width: "100%", height: "290px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <div className="mx-10 flex flex-col justify-center ">
          <div className="flex flex-col justify-center mt-5">
            <p className="text-2xl text-sky-600 font-bold">Location: </p>
            <div className="flex  ">
              <SlLocationPin className="mt-6 mr-1" size={30} />
              <p className="py-2 text-xl font-semibold">
                E-Yantra Robotics Lab
                <p>
                  Siddaganga Institute of Technology
                  <br /> Tumkur, Karnataka
                </p>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center my-4">
            <p className="text-2xl text-sky-600 font-bold">Email: </p>
            <div className="flex  ">
              <MdAlternateEmail className="mt-3 mr-1" size={30} />
              <p className="font-semibold text-xl mt-2">corsit@sit.ac.in</p>
            </div>
          </div>

          <div className="flex flex-col justify-center my-8">
            <p className="text-2xl text-sky-600 font-bold">Call: </p>
            <div className="flex  ">
              <FiSmartphone className="mt-3 mr-1" size={30} />
              <p className="font-semibold text-xl mt-2">6006499457</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
