import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

import { MdAlternateEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { ExternalLink } from "react-external-link";

const Footer = () => {
  return (
    <div className="py-5 px-8 sm:py-5 sm:px-24 bg-sky-100">
      <div className="flex flex-wrap  items-center text-start justify-between   ">
        <div>
          <h1 className=" text-4xl font-bold text-sky-950">CORSIT</h1>
          <p className="font-semibold text-start">
            "Get Social with us! Follow, Like and Connect on our Social Media
            Platforms"
          </p>
        </div>
        <div className="flex justify-between">
          <ExternalLink
            className="mt-4 ml-2 mb-0 mr-0 sm:ml-4"
            href="https://www.facebook.com/thecorsit/"
          >
            <FaFacebookSquare size={30} />
          </ExternalLink>

          <ExternalLink
            className="mt-4 ml-4 mb-0 mr-0 sm:ml-4"
            href="https://www.instagram.com/corsit.sit/"
          >
            <FaInstagram size={30} />
          </ExternalLink>

          <ExternalLink
            className="mt-4 ml-6 mb-0 mr-0 sm:ml-4"
            href="https://www.linkedin.com/company/corsit/mycompany/"
          >
            <FaLinkedinIn size={30} />
          </ExternalLink>

          <ExternalLink
            className="mt-4 ml-6 mb-0 mr-0 sm:ml-4 "
            href="https://www.youtube.com/channel/UCcm-ttunddHrEGWUdYkUd2w"
          >
            <FaYoutube size={30} />
          </ExternalLink>
        </div>
      </div>

      <div className="  pt-8 text-start flex justify-between flex-wrap font-bold">
        <div className="  w-1/2 sm:flex sm:flex-col">
          <h6 className="pt-0 pl-0 pb-3 pr-0 font-bold text-1xl text-teal-950">
            EVENTS
          </h6>
          <ul>
            <li className="pb-2 text-sm">RoboExpo</li>
            <li className="pb-2 text-sm">WorkShop</li>
            <li className="pb-2 text-sm">Hackathon</li>
            <li className="pb-2 text-sm">Robocor</li>
          </ul>
        </div>
        <div className=" w-1/2">
          <h6 className="font-bold text-1xl text-teal-950">NEED HELP ?</h6>

          <ul>
            <div className="flex my-1">
              <FaWhatsapp className="mr-1" size={30} />
              <li className=" py-1 text-sm">
                <a
                  className=" "
                  href="https://api.whatsapp.com/send?phone=916006499457"
                  target="_blank"
                  rel="noreferrer"
                >
                  Contact us on WhatsApp
                </a>
              </li>
            </div>
            <div className="my-3 flex  ">
              <MdAlternateEmail className="mr-1" size={30} />
              <li className="py-1 text-sm">
                <a
                  href="mailto:corsit@sit.ac.in"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Contact us on Gmail{" "}
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
