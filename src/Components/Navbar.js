import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../img/corsitlogo.png";
import { ExternalLink } from "react-external-link";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="bg-white flex justify-between items-center py-0 px-7 drop-shadow-[0_5px_15px_rgba(0,0,0,0.25)] w-11/12 h-20 rounded-xl fixed top-5 left-1/2 -translate-x-1/2 z-[9999] ">
        <img className="w-20 mt-2 " src={logo} alt="/" />

        <ul className="hidden md:grid grid-cols-[repeat(8,auto)] gap-2 list-none items-center ">
          <li>
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/"
            >
              Home
            </Link>
          </li>
          {/* <li>
            <ExternalLink
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              href="https://robocor-23.cyclic.app/"
            >
              Robocor'23
            </ExternalLink>
          </li> */}
          {/* <li>
            <ExternalLink
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              href="https://hackfest.cyclic.app/"
            >
              HackFest
            </ExternalLink>
          </li>
          <li>
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="https://robocor-23.cyclic.app"
              target="_blank"
            >
              ROBOCOR'23
            </Link>
          </li> */}
          <li>
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/about"
            >
              About
            </Link>
          </li>
          {/* <li>
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/team"
            >
              Our team
            </Link>
          </li> */}
          <li>
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/alumni"
            >
              Alumni
            </Link>
          </li>
          <li>
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/project"
            >
              Bots & Projects
            </Link>
          </li>
          <li>
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* hambergur */}

        <div
          onClick={handleNav}
          className="cursor-pointer z-[999] block  md:hidden"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? " sm:flex flex-col justify-start bg-white w-[100%] h-auto absolute top-0 left-0 opacity-100 items-stretch pt-20 px-0 pb-7 m-0 z-[-1] rounded-xl md:hidden"
              : "ease-in-out bg-white top-24 min-h-full duration-500 fixed opacity-0 left-[-100%]"
          }
        >
          <li onClick={handleNav} className=" p-4 border-b border-gray-600">
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out  "
              to="/"
            >
              Home
            </Link>
          </li>
          <li onClick={handleNav} className=" p-4 border-b border-gray-600">
            <ExternalLink
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out  "
              href="https://robocor-23.cyclic.app/"
            >
              Robocor'23
            </ExternalLink>
          </li>
          <li onClick={handleNav} className=" p-4 border-b border-gray-600">
            <ExternalLink
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out  "
              href="https://hackfest.cyclic.app/"
            >
              HackFest
            </ExternalLink>
          </li>
          <li onClick={handleNav} className=" p-4 border-b border-gray-600">
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/about"
            >
              About
            </Link>
          </li>
          <li onClick={handleNav} className=" p-4 border-b border-gray-600">
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/team"
            >
              Our team
            </Link>
          </li>
          <li onClick={handleNav} className=" p-4 border-b border-gray-600">
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/alumni"
            >
              Alumni
            </Link>
          </li>
          <li onClick={handleNav} className=" p-4 border-b border-gray-600">
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/project"
            >
              Bots & Projects
            </Link>
          </li>
          <li onClick={handleNav} className=" p-4 border-b border-gray-600">
            <Link
              className="text-sky-950 text-xl font-semibold decoration-0 py-3 px-4 whitespace-nowrap hover:bg-sky-600 hover:text-white hover:rounded hover:ease-in-out"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
