import React from "react";
import Najot from "../images/Najot.png";
import {Link} from "react-router-dom";
import {BiLogoReact, } from 'react-icons/bi';
import {TbBrandNextjs, } from 'react-icons/tb';
import {SiTailwindcss, } from 'react-icons/si';
import {MdOutlineCss, } from 'react-icons/md';
import {DiHtml5, } from 'react-icons/di';
import {FaBootstrap, } from 'react-icons/fa';
import {IoLogoJavascript, } from 'react-icons/io';
import {RiVuejsFill, } from 'react-icons/ri';



const Resume  = () => {
  return (
    <div className={'container'}>
      <div className="text-center pt-8 text-primary text-[30px]">Resume_</div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-10 gap-5 pt-5 pb-5">
        <div className="border-primary education border-[1px] rounded-2xl p-4 mt-2 md:w-full cursor-pointer w-full">
          <div className="pb-5">Education</div>
          <span className="text-sm text-gray-400  pt-5">June 2023</span>
          <Link to="https://najottalim.uz/" target="_blank">
              <span className="flex uppercase font-semibold md:text-2xl text-lg">Na'jot Talim</span>
          </Link>
          <div className="pt-2 text-sm text-gray-400">React Frontend Course</div>
        </div>
        <div className="border-primary education border-[1px] rounded-2xl p-4 mt-2 md:w-full cursor-pointer w-full">
          Experience
          <div className="text-sm text-gray-400 pt-5">December 2022 - April 2023</div>
          <Link to="https://alulastra.com/"  target="_blank">
            <div className="font-semibold md:text-2xl text-lg">AlulAstra
              <span className="text-sm text-secondary-3 pl-5">IT Services and IT Consulting</span></div>
          </Link>
          <div>Frontend Developer</div>
           <ul className="text-sm text-gray-400 pl-5 pt-5 list-disc">
             <li>
               Converting Figma to web pages
             </li>
             <li>
               Developing dynamic and reusable components
             </li>
             <li>
               Bug fixing and new feature implementations
             </li>
             <li>
               Pagespeed optimization
             </li>
           </ul>
        </div>
      </div>
      <div className="text-center font-medium text-2xl text-primary">Skills_</div>
      <div className={'grid md:grid-cols-2 grid-cols-1  pt-[40px] pb-2 gap-4'}>
        <div>
          <div className=" pt-5">
            <div className="flex justify-between">
              <div className="flex  items-center gap-2">
                <div className="border-primary border-[1px] w-8 h-8 items-center flex justify-center rounded-full">
                  <DiHtml5 color="#B9B4C7" size="25px"/>
                </div>
                <div>Html</div>
              </div>
            </div>
          </div>
          <div className=" pt-5">
            <div className="flex justify-between">
              <div className="flex  items-center gap-2">
                <div className="border-primary border-[1px] w-8 h-8 items-center flex justify-center rounded-full">
                  <MdOutlineCss color="#B9B4C7" size="25px"/>
                </div>
                <div>Css</div>
              </div>
            </div>
          </div>
          <div className=" pt-5">
            <div className="flex justify-between">
              <div className="flex  items-center gap-2">
                <div className="border-primary border-[1px] w-8 h-8 items-center flex justify-center rounded-full">
                  <SiTailwindcss color="#B9B4C7" size="25px"/>
                </div>
                <div>tailwindcss</div>
              </div>
            </div>
          </div>
          <div className=" pt-5">
            <div className="flex justify-between">
              <div className="flex  items-center gap-2">
                <div className="border-primary border-[1px] w-8 h-8 items-center flex justify-center rounded-full">
                  <FaBootstrap color="#B9B4C7" size="25px"/>
                </div>
                <div>Bootstrap</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="">
            <div className="flex justify-between">
              <div className="flex  items-center gap-2">
                <div className="border-primary border-[1px] w-8 h-8 items-center flex justify-center rounded-full">
                  <IoLogoJavascript color="#B9B4C7" size="25px"/>
                </div>
                <div>Javascript</div>
              </div>
            </div>
          </div>
          <div className=" pt-5">
            <div className="flex justify-between">
              <div className="flex  items-center gap-2">
                <div className="border-primary border-[1px] w-8 h-8 items-center flex justify-center rounded-full">
                  <BiLogoReact  color="#B9B4C7" size="25px"/>
                </div>
                <div>Reactjs</div>
              </div>
            </div>
          </div>
          <div className=" pt-5">
            <div className="flex justify-between">
              <div className="flex  items-center gap-2">
                <div className="border-primary border-[1px] w-8 h-8 items-center flex justify-center rounded-full">
                  <TbBrandNextjs  color="#B9B4C7" size="25px"/>
                </div>
                <div>Nextjs</div>
              </div>
            </div>
          </div>
          <div className=" pt-5">
            <div className="flex justify-between">
              <div className="flex  items-center gap-2">
                <div className="border-primary border-[1px] w-8 h-8 items-center flex justify-center rounded-full">
                  <RiVuejsFill color="#B9B4C7" size="25px"/>
                </div>
                <div>Vue.js(basic)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )





};

export default Resume