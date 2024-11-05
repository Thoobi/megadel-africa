import { Link } from "react-router-dom";

import Logo from "@/public/asset/megadel-logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <nav className="flex justify-between items-center border-b-slate-300 border-b-[.1rem] px-[3rem] py-[1.5rem] sm:py-[2.5rem] lg:px-[6rem] xl:text-[1.6rem]">
      <Link to="/" className="inline-block w-[50%] lg:w-[35%] xl:w-auto">
        <img
          src={Logo}
          alt="megadel logo"
          className="h-full w-full xl:w-auto xl:h-auto"
        />
      </Link>

      <div
        className={
          isOpen
            ? "flex flex-col gap-[3rem] items-end absolute top-[2.2rem] right-0 bg-white px-[3rem] py-[1rem] w-[70%] sm:w-1/2 h-full text-[1.8rem] lg:px-[6rem] lg:text-[2rem] lg:gap-[4.5rem]"
            : "xl:w-auto xl:h-auto"
        }
      >
        <div className="z-10 xl:hidden" onClick={() => handleIsOpen()}>
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col items-end gap-[3rem] text-custom-blue-500 font-medium lg:gap-[4rem] xl:flex xl:items-center xl:py-0 xl:flex-row xl:gap-[6rem]`}
        >
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/resources">Resources</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/community">Our Community</Link>
          </li>
          <li className="text-white bg-custom-blue-100 rounded-[1rem] px-[3rem] py-[1rem] xl:py-[1.5rem]">
            <Link to="/Get Started">Get Started</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
