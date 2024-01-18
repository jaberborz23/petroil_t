import React, { useState } from 'react'
import logo from "../Assets/Logo.png"
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import ScrollspyNav from "react-scrollspy-nav";

const Navbar = () => {
  let [show,setShow] = useState(false)
  let handleShow = ()=>{
    setShow(!show)
  }
  return (
    <section className='py-[20px] bg-nvbg w-full fixed z-50'>
       <div className="max-w-container  mx-auto">
        <div className='flex justify-between items-center  '>
      <div className="w-1/2"> <img src={logo} alt="logo" />
      </div>
      <div className="w-1/2">
      <ScrollspyNav
       scrollTargetIds={["banner", "service", "car","company", "lorem","map" ]}
       offset={100}
       activeNavClass="is-active"
       scrollDuration="1000"
       headerBackground="true"
      
      
      >
      <ul className={` lg:flex sm:flex xs:flex xs:justify-evenly sm:justify-evenly items-center    gap-x-5 absolute left-0 top-0 lg:static ${show == true ? "top-[50px] sm:top-[80px] xxs:top-[70px] md:top-[80px] left-0 w-full bg-[#222]  transition duration-300 ease-in-out py-4 text-center z-[100]" : "top-[-370px] w-full left-0 transition duration-300 ease-in-out "}  ` } >
        <li className='lg:py-0 py-2'> <a href="#banner" className='font-pops text-white font-semibold text-[16px] lg:hover:text-[#222] hover:text-[green]' >Home</a></li>
        <li className='lg:py-0 py-2'><a href="#service" className='font-pops text-white lg:hover:text-[#222] font-semibold text-[16px] hover:text-[green]' >About</a></li>
        <li className='lg:py-0 py-2'><a href='#car' className='font-pops text-white lg:hover:text-[#222]  font-semibold text-[16px] hover:text-[green]' >Service</a></li>
        <li className='lg:py-0 py-2'><a href='#company' className='font-pops text-white lg:hover:text-[#222] font-semibold text-[16px] hover:text-[green]' >Gallery</a></li>
        <li className='lg:py-0 py-2'><a href='#lorem' className='font-pops text-white lg:hover:text-[#222] font-semibold text-[16px] hover:text-[green]' >Blog</a></li>
        <li className='lg:py-0  py-4'><a href="#map" className='font-pops text-white lg:hover:text-[#222] font-semibold text-[16px] hover:text-[black] border-2 border-white-600 px-3 py-3 hover:bg-[green]' >Contact</a></li>
       </ul>
       </ScrollspyNav>
      </div>
      <div className="lg:hidden mx-2" onClick={handleShow}>
        {show == true ? <ImCross /> : <FaBars />}
      </div>
        </div>
       


       </div>

    </section>
  )
}

export default Navbar