import { useState } from "react";
import { Logo, Close, Menu } from "../assets";
import { navLinks } from "../constants";

const NavBar = ({ scrollTo }) => { // Pass scrollTo function as a prop
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-7 px-10 justify-between items-center navbar">
      <img src={Logo} alt="JLogo" className="w-[94px] h-[67px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-spacemono font-normal cursor-pointer text-[22px] ${
              index == navLinks.length - 1 ? "mr-0" : "mr-20"
            } 
            text-white`}
          >
            {/* Use scrollTo function to scroll to the section */}
            <a onClick={() => scrollTo(nav.page)}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? Close : Menu}
          alt="menu"
          className="w-[30px] h-[30px] t object-contain z-50"
          onClick={() => setToggle((prev) => !prev)}
        />

        <div
          className={`${
            toggle ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-screen z-40 w-[240px] max-w-sm flex-shrink-0 py-6 px-4 backdrop-blur-[10px] bg-[#ffffff33] text-white transition-transform duration-300 ease-in-out`}
        >
          <ul className="list-none flex flex-col justify-end items-start mt-20">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-spacemono font-normal cursor-pointer text-[22px] ${
                  index == navLinks.length - 1 ? "mb-0" : "mb-10"
                } 
            text-white`}
              >
                <a onClick={() => scrollTo(nav.page)}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
