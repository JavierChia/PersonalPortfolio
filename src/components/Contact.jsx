// Contact.js
import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="ml-10 pt-6 font-poppins text-[50px] font-semibold text-black flex items-center">
        <div className="flex-grow">
          <span className="mr-2">
            03.<span style={{ letterSpacing: "0.1em" }}>&nbsp;</span>
          </span>
          <span>CONTACT</span>
        </div>
        <hr className="border border-black border-solid border-width-1.5 rounded-full w-full ml-8 mr-10" />
      </div>

      <form className="w-auto mx-60 mt-16">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <input
              className="appearance-none block w-full text-gray-700 border border-black font-poppins rounded-2xl py-4 px-4 mb-3 leading-tight focus:outline-none bg-white bg-opacity-20 backdrop-blur"
              id="grid-first-name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <input
              className="appearance-none block w-full text-gray-700 border border-black font-poppins rounded-2xl py-4 px-4 mb-3 leading-tight focus:outline-none bg-white bg-opacity-20 backdrop-blur"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <textarea
              className="no-resize h-96 appearance-none block w-full text-gray-700 border font-poppins border-black rounded-2xl py-4 px-4 mb-3 leading-tight focus:outline-none bg-white bg-opacity-20 backdrop-blur h-48 resize-none"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
        <div className="">
          <div className="w-1/6">
            <button
              className="w-full shadow bg-black bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 focus:bg-opacity-30 text-white font-semibold py-2 px-4 rounded border border-black"
              type="submit"
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>

      <div className="absolute bottom-0 left-0 ml-10">
        <div className="flex flex-col items-center">
          <a href="https://github.com/JavierChia" target="_blank" rel="noopener noreferrer" className="mb-6 text-white hover:text-black">
            <FaGithub size="3em" />
          </a>
          <a href="https://www.linkedin.com/in/javier-chia-bbb2b723b/" target="_blank" rel="noopener noreferrer" className="mb-6 text-white hover:text-black">
            <FaLinkedin size="3em" />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="mb-6 text-white hover:text-black">
            <FaInstagram size="3em" />
          </a>

          <div className="w-px bg-white h-48 mt-4"></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
