import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className=' flex items-center justify-center h-screen mb-12
    bg-cover bg-center pt-48 px-4 md:px-32 custom-img '>
        {/* Overlay */}
        <div className='absolute top-0 bottom-0 left-0 right-0 z-[2]' />
        <div className='p-5 z-[2]  mt-[-10rem] shadow-xl shadow-gray-400 rounded-xl'>
        <h1 className="text-5xl py-4">
              Hi, I'm <span className="font-bold text-red-600">Mariam</span>
            </h1>
            <h2 className="py-4">A Front-End Web Developer</h2>
            <div className=" py-4">
            <p>
            I am available for freelance and fulltime positions. Contact me and let's talk.
            </p>
            <div className="flex justify-between items-center my-4 md:w-[50%] w-full">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300">
              <Link href="">
                <FaLinkedinIn />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300">
              <Link href="">
                <FaGithub />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300">
              <Link href="">
                {" "}
                <FaTwitter />
              </Link>
            </div>

            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 duration-300">
              <Link href="">
                {" "}
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
          </div>
            
        </div>
    </div>
 
  );
};

export default Main;
