import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Icones: React.FC = () => {
	return (
		<div className="flex justify-center space-x-4 mt-6">
        <a
          href="https://github.com/RobsonFe"
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <FaGithub className='w-[32px] h-[32px] hover:bg-[#1f2937] border-none rounded-full'/>
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/robson-ferreira-508247134/"
          target="_blank"
          className="text-gray-600 hover:text-gray-800"
        >
         <FaLinkedin className='w-[32px] h-[32px] hover:bg-[#0077B5]' />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://www.instagram.com/rob_ferreira88/"
          target="_blank"
          className="text-gray-600 hover:text-black"
        >
          <FaInstagram className='w-[32px] h-[32px] hover:bg-[#E1306C] border-none rounded-md' />
          <span className="sr-only">Instagram</span>
        </a>
      </div>
	);
};

export default Icones;