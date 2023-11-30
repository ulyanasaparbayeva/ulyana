import {FaGithub, FaLinkedin, FaTelegram,FaGitlab } from 'react-icons/fa';
import {AiFillMail} from "react-icons/ai";
import { Link } from 'react-router-dom';



const  Contact = () =>{
  return <div className={'container'}>
    <h3 className="text-center font-semibold text-primary pt-4 text-[30px] pb-2">Contact</h3>
    <div className="grid md:grid-cols-3 grid-cols-1 gap-5 pt-4 cursor-pointer">
    <div className="box-shadow p-4  rounded-3xl text-center h-[200px]">
      <Link to="https://t.me/usaparbayeva" target="_blank" className="">
        <FaTelegram className="text-center m-auto text-sky-600  w-[40px] h-[40px]
        " />
        <div>@usapabarbayeva</div>
      </Link>
    </div>
      <div className="box-shadow p-4 rounded-3xl text-center h-[200px]">
        <Link to="https://www.linkedin.com/in/ulyana-saparbayeva-844124263/" target="_blank">
          <FaLinkedin className="text-center m-auto text-[#004182] w-[40px] h-[40px]" />
          <div>ulyana-saparbayeva</div>
        </Link>
      </div>
      <div className="box-shadow p-4 rounded-3xl text-center h-[200px]">
        <Link to="https://github.com/ulyanasaparbayeva" target="_blank">
          <FaGithub className="text-center m-auto w-[40px] h-[40px]" />
          <div>Github</div>
        </Link>
            </div>
         <div className="box-shadow p-4 rounded-3xl text-center h-[200px] md: mb-0 mb-4">
        <Link to="mailto:ulyanasaparbayeva@gmail.com" target="_blank">
          <AiFillMail className="text-center m-auto w-[40px] h-[40px]"/>
          <div>ulyanasaparbayeva@gmail.com</div>
        </Link>
      </div>
      <div className="box-shadow p-4 rounded-3xl text-center h-[200px] md: mb-0 mb-4">
        <Link to="https://gitlab.com/ulyanasaparbayeva" target="_blank">
          <FaGitlab     className="text-center text-orange-700 m-auto w-[40px] h-[40px]"/>
          <div>ulyanasaparbayeva</div>
        </Link>
      </div>
    </div>
  </div>
}
export default Contact