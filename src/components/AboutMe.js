import React from "react";
import {Link} from "react-router-dom";
import {FaBootstrap, FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";
import banner from "../images/banner.svg"
import {DiHtml5} from "react-icons/di";
import {MdOutlineCss} from "react-icons/md";
import {SiTailwindcss} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import {BiLogoReact} from "react-icons/bi";
import {TbBrandNextjs} from "react-icons/tb";
import {RiVuejsFill} from "react-icons/ri";
import { Tooltip } from 'react-tooltip'

const AboutMe  = () => {

  return <div>
    <div className={'container'}>
      <div className="grid md:grid-cols-2 gap-2 grid-cols-1">
        <div className="md:hidden flex pt-2">
          <img src={banner} className="border-primary-2 border-[4px] rounded-full"/>
        </div>
        <div>
          <div className="md:pt-[70px] pt-2"> <span className="md:text-4xl text-1xl">Greetings!  I'm </span>
            <span className="text-primary text-3xl font-semibold">Ulyana </span><br/>
            <span className="text-primary text-3xl font-semibold">
             Saparbayeva.</span><br/>
            <div className="pt-4 text text-[16px] font-medium">a passionate Frontend Developer
              who embarked on my journey in the dynamic field of web development in 2022.
              My fascination for crafting dynamic websites has kept me engaged and ever-learning.
              My skill set has been sharpened at Na'jot Ta'lim Learning Center, a
              hub that aligns education with the demands of the modern job market.
              I'm proficient in using technologies like HTML, CSS, TailwindCSS, SCSS,
              Bootstrap, ReactJS, NextJS, and JavaScript, with a particular affection for writing code in ReactJS.
              <div className="flex pt-5 gap-5">
                <Tooltip id="my-tooltip" />
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Html">
                  <DiHtml5 className="text-[#B9B4C7] hover:text-amber-700 cursor-pointer" color="" size="30px"/>
                </a>
                <Tooltip id="my-tooltip" />
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Css">
                  <MdOutlineCss className="text-[#B9B4C7] cursor-pointer hover:text-blue-300"  size="30px"/>
                </a>
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Tailwindcss">
                  <SiTailwindcss className="text-[#B9B4C7] cursor-pointer hover:text-sky-600" color="" size="30px"/>
                </a>
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Bootstrap">
                  <FaBootstrap className="text-[#B9B4C7] hover:text-secondary-3 cursor-pointer" size="30px"/>
                </a>
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Javascript">
                  <IoLogoJavascript className="text-[#B9B4C7] hover:text-yellow-500 cursor-pointer"  size="30px"/>
                </a>
                <a data-tooltip-id="my-tooltip" data-tooltip-content="React">
                  <BiLogoReact  className="text-[#B9B4C7] hover:text-sky-600 cursor-pointer" size="30px"/>
                </a>
                 <a data-tooltip-id="my-tooltip" data-tooltip-content="Nextjs">
                   <TbBrandNextjs className="text-[#B9B4C7] hover:text-black cursor-pointer" size="30px"/>
                 </a>
                <a data-tooltip-id="my-tooltip" data-tooltip-content="Vuejs">
                  <RiVuejsFill className="hover:text-green-700 text-[#B9B4C7] cursor-pointer" size="30px"/>
                </a>
              </div>
            </div>
           </div>
          <div className="flex gap-2.5 pt-6">
            <button className="bg-primary p-2 text-secondary hover:bg-white hover:animate-pulse  contact-btn hover:rounded-2xl "
                    >
              <Link to="CV .pdf" target="_blank">
                Download Sv
              </Link>
            </button>
            <button className="bg-primary p-2 text-secondary
         hover:rounded-2xl hover:bg-white contact-btn">
              <Link to="/contact">
                Contact
              </Link>
              </button>
          </div>
          <div className="md:pb-0 pb-4 flex items-center pt-2 gap-2">
            <Link to="https://t.me/usaparbayeva" target="_blank" className="">
              <FaTelegram className="text-primary hover:text-sky-600 w-[30px] h-[30px]
        " />
            </Link>
            <Link to="https://github.com/ulyanasaparbayeva" target="_blank">
              <FaGithub className="w-[30px] hover:text-black h-[30px] text-primary" />
            </Link>
            <Link to="https://www.linkedin.com/in/ulyana-saparbayeva-844124263/" target="_blank">
              <FaLinkedin className="text-[#004182] hover:text-blue-800  text-primary w-[30px] h-[30px]" />
            </Link>
          </div>
        </div>
        <div className="mt-[40px] mb-[40px] md:flex hidden">
         <img src={banner} className="border-primary-2 border-[4px] rounded-full"/>
        </div>
      </div>
    </div>
  </div>
};

export default AboutMe