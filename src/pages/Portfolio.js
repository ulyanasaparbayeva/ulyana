import agroinvest from "../images/agroinvest.png"
import alulastras from "../images/alulastras.png"
import avtozaem from "../images/avtozaem.png"
import serbiz from "../images/serbiz.png"
import mold from "../images/mold.png"
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return <div className="container">
    <div className="h-[68vw]">
      <div className="text-center pt-4 font-semibold text-primary text-[30px] pb-2">Portfolio</div>
      <div className="grid md:grid-cols-3 grid-cols-1 pt-4 gap-5 mb-[40px]">
           <div className={'relative group bg-primary rounded-2xl cursor-pointer'}>
             <div className="group-hover:opacity-0 group-hover:blur-2xl translate-y-0 group-hover:translate-y-full
                    ease-in-out duration-300 transition-all rounded-2xl  crews-secondary">
               <div className="crews-idea">
                 <img src={agroinvest}  className="w-full h-[320px] object-cover rounded-3xl" />
               </div>
             </div>
             <article
               className="opacity-0  group-hover:opacity-100  group-hover:translate-y-0
                translate-y-full crews-bottom ease-in duration-300
                    transition-all absolute inset-0  rounded-2xl">
               <h2 className="pt-[26px] text-center font-semibold text-2xl leading-[34px]   text-secondary">
                 agroinvest.uz</h2>
               <div className="pt-4 font-normal text-center m-auto md:text-xl text-xs md:leading-7 leading-5
                text-secondary gap-[10px] flex justify-center">
                 <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">React</span>
                 <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">NextJs</span>
                 <span className="border-[1px] text-sm border-secondary rounded-3xl p-2"> Tailwindcss </span>
                 <span className="border-[1px] text-sm  border-secondary rounded-3xl p-2"> Axios</span>
                 <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">
                    118n
                 </span>
               </div>
               <button className="mt-[140px] flex justify-center text-center m-auto  p-2 rounded-2xl bg-white">
                 <Link to={'https://agroinvesttna.uz/ru'}
                target="_blank"
                 className="text-secondary md:text-xl text-xs md:leading-7 leading-5 "
               >Live Demo</Link></button>
             </article>
           </div>
        <div className={'relative group bg-primary rounded-2xl cursor-pointer'}>
          <div className="group-hover:opacity-0 group-hover:blur-2xl translate-y-0 group-hover:translate-y-full
                    ease-in-out duration-300 transition-all rounded-2xl  crews-secondary">
            <div className="crews-idea">
              <img src={alulastras} className="w-full h-[320px]  object-cover rounded-3xl"/>
            </div>
          </div>
          <article
            className="opacity-0  group-hover:opacity-100  group-hover:translate-y-0
                translate-y-full crews-bottom ease-in duration-300
                    transition-all absolute inset-0  rounded-2xl">
            <h2 className="pt-[26px] font-semibold text-2xl leading-[34px] flex justify-center   text-secondary">
             alulastra.com</h2>
            <div className="pt-4 font-normal md:text-xl text-xs md:leading-7 leading-5 text-secondary gap-5 flex justify-center">
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">React</span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">NextJs</span>
              <span className="border-[1px]  text-sm border-secondary rounded-3xl p-2"> Tailwindcss </span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2"> Axios</span>
            </div>
            <button className="mt-[140px] p-2  text-center m-auto  flex justify-center
            rounded-2xl bg-white">
              <Link to={'https://alulastra.com/'} target="_blank"
          className="text-secondary  md:text-xl text-xs md:leading-7 leading-5 "
            >Live Demo</Link></button>
          </article>
        </div>
        <div className={'relative group bg-primary rounded-2xl cursor-pointer'}>
          <div className="group-hover:opacity-0 group-hover:blur-2xl translate-y-0 -group-hover:translate-y-full
                ease-in-out duration-300 transition-all rounded-2xl crews-secondary">
            <div className="crews-idea">
              <img src={avtozaem} className="w-full  h-[320px] object-cover rounded-2xl "/>
            </div>
          </div>
          <article
            className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                 md:translate-y-full translate-y-0 crews-bottom ease-in duration-300
                 transition-all absolute inset-0 rounded-2xl">
            <h2 className="pt-[26px] flex justify-center font-semibold text-2xl leading-[34px] text-secondary">
              avtozaem.ru</h2>
            <div className="pt-4 font-normal md:text-xl text-xs md:leading-7 leading-5 text-secondary gap-5 flex
            justify-center">
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">React</span>
              <span className="border-[1px] text-sm  border-secondary rounded-3xl p-2">NextJs</span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2"> Tailwindcss </span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2"> Axios</span>
            </div>
            <button className="mt-[140px] flex justify-center text-center m-auto p-2 rounded-2xl bg-white">
              <Link to={'https://avtozaem24.ru'}
                    target="_blank" className="text-secondary md:text-xl text-xs md:leading-7 leading-5">
                Live Demo
              </Link>
            </button>
          </article>
        </div>
        <div className={'relative group bg-primary rounded-2xl cursor-pointer'}>
          <div className="group-hover:opacity-0 group-hover:blur-2xl translate-y-0 -group-hover:translate-y-full
                ease-in-out duration-300 transition-all rounded-2xl crews-secondary">
            <div className="crews-idea">
              <img src={serbiz} className="w-full  h-[320px] object-cover rounded-2xl "/>
            </div>
          </div>
          <article
            className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                 md:translate-y-full translate-y-0 crews-bottom ease-in duration-300
                 transition-all absolute inset-0 rounded-2xl">
            <h2 className="pt-[26px] flex justify-center font-semibold text-2xl leading-[34px] text-secondary">
              serbiz.ru</h2>
            <div className="pt-4 font-normal md:text-xl text-xs md:leading-7 leading-5 text-secondary gap-5 flex
            justify-center">
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">React</span>
              <span className="border-[1px] text-sm  border-secondary rounded-3xl p-2">NextJs</span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2"> Tailwindcss </span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2"> Axios</span>
            </div>
            <button className="mt-[140px] flex justify-center text-center m-auto p-2 rounded-2xl bg-white">
              <Link to={'https://serbiz.uz/'}
                    target="_blank" className="text-secondary md:text-xl text-xs md:leading-7 leading-5">
                Live Demo
              </Link>
            </button>
          </article>
        </div>
        <div className={'relative group bg-primary rounded-2xl cursor-pointer'}>
          <div className="group-hover:opacity-0 group-hover:blur-2xl translate-y-0 -group-hover:translate-y-full
                ease-in-out duration-300 transition-all rounded-2xl crews-secondary">
            <div className="crews-idea">
              <img src={mold} className="w-full  h-[320px] object-cover rounded-2xl "/>
            </div>
          </div>
          <article
            className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0
                 md:translate-y-full translate-y-0 crews-bottom ease-in duration-300
                 transition-all absolute inset-0 rounded-2xl">
            <h2 className="pt-[26px] flex justify-center font-semibold text-2xl leading-[34px] text-secondary">
              mold-components</h2>
            <div className="pt-4 font-normal md:text-xl text-xs md:leading-7 leading-5 text-secondary gap-5 flex
            justify-center">
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">React</span>
              <span className="border-[1px] text-sm  border-secondary rounded-3xl p-2">Redux</span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2"> I18n</span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">Axios</span>
              <span className="border-[1px] text-sm border-secondary rounded-3xl p-2">Scss
              </span>
            </div>
            <button className="mt-[140px] flex justify-center text-center m-auto p-2 rounded-2xl bg-white">
              <Link to={'https://mold-cart-8hwf.vercel.app/'}
                    target="_blank" className="text-secondary md:text-xl text-xs md:leading-7 leading-5">
                Live Demo
              </Link>
            </button>
          </article>
        </div>
      </div>
      </div>
  </div>
}

export  default Portfolio