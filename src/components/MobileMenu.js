import React, { useState } from 'react';
import img from "../images/img.png"
import img_1 from "../images/img_1.png"
import { Link } from 'react-router-dom';
import {FaGithub, FaLinkedin, FaTelegram} from "react-icons/fa";


const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="relative bg-primary">
        <button className="md:hidden bg-primary p-3.5" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <img src={img_1} width={40} height={40}/>  : <img src={img} width={40} height={40} />}
        </button>
      </div>
      <ul className={`absolute z-40 left-0 h-[100vh] w-full bg-[#d7d4df] transition-transform ease-out duration-300
         transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <li><Link className="block p-4 hover:bg-primary  font-semibold hover:text-[#9b5ad8] text-right" to="/">About me</Link></li>
        <li><Link className="block p-4 hover:bg-primary  font-semibold hover:text-[#9b5ad8] text-right" to="/Resume">Resume</Link></li>
        <li><Link className="block p-4 hover:bg-primary  font-semibold hover:text-[#9b5ad8] text-right" to="/Portfolio">Porfolio</Link></li>
        <li><Link className="block p-4 hover:bg-primary  font-semibold hover:text-[#9b5ad8] text-right" to="/Contact">Contact</Link></li>
        <div className="text-right p-4 font-semibold">Ulyana Saparbayeva</div>
        <div className="md:pb-0 pb-2 flex justify-end pr-2 items-center pt-2 gap-2 ">
          <Link to="https://t.me/usaparbayeva" target="_blank" className="">
            <FaTelegram className="text-primary  w-[30px] h-[30px]
        " />
          </Link>
          <Link to="https://github.com/ulyanasaparbayeva" target="_blank">
            <FaGithub className="w-[30px] h-[30px] text-primary" />
          </Link>
          <Link to="https://www.linkedin.com/in/ulyana-saparbayeva-844124263/" target="_blank">
            <FaLinkedin className="text-[#004182] text-primary w-[30px] h-[30px]" />
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default MobileMenu;
