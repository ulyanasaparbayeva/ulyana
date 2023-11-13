import React from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return <div>
     <header className="bg-[#B9B4C7] md:block hidden ">
       <div className={'container'}>
       <div className="flex">
       </div>
       <nav className="flex justify-between text-secondary p-[19px]">
         <ul>
           <li className="font-semibold cursor-pointer">
             <Link to="/">
               ULYANA SAPARBAYEVA
             </Link>
            </li>
         </ul>
         <ul className="flex gap-[50px]">
           <li className="font-semibold">
             <Link to="/">About me </Link>
           </li>
           <li className="font-semibold">
             <Link to="/Resume">Resume</Link>
           </li>
           <li className="font-semibold">
             <Link to="/Portfolio">Portfolio</Link>
           </li>
           <li className="font-semibold">
             <Link to="/Contact">Contact</Link>
           </li>
         </ul>
       </nav>
   </div>
     </header>
  </div>
};

export default Navbar;