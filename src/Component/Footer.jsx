import React from 'react'
import logo from "../Assets/Logo.png"
import { FaFacebook,FaTwitter,FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiMailUnreadLine } from "react-icons/ri";
import { FiMapPin } from "react-icons/fi";


const Footer = () => {
  return (
    <section id='footer' className='py-[160px] bg-fot'>
      <div className="max-w-container mx-auto">
   <div className="flex flex-wrap items-center ">
   <div className="lg:w-1/4 w-[75%]">
    <img src={logo} alt="logo" />
  
    <div className='flex items-center gap-2 mt-4 ml-1 lg:gap-2'>
          <  RiMailUnreadLine className='text-white' />
          <p className='text-white '> mail@yourcompany.com</p>
          </div>
        
          <div className=' w-full flex items-center mt-2 ml-2 lg:gap-2 gap-1 sm:gap-2'>
          <FaPhoneVolume className='text-white'/>
          <p className='text-white'>   +896 120 5889 (Toll free)</p>
          </div>
          <div className=' w-full flex items-center mt-2 ml-2 lg:gap-2 gap-1 sm:gap-2'>
          <FiMapPin className='text-white mb-6' />
          <p className='text-white'> 101 Baker Street, New York, USA, 12345</p>
          </div>
          
          
       
        <div className='flex mt-4 ml-2   gap-x-6 sm:py-4'>
        <i><FaFacebook className='text-[red]' /></i>
        <i><FaTwitter className='text-[red]' /></i>
        <i><FaLinkedinIn className='text-[red]'  /></i>
        <i><FaInstagram className='text-[red]' /></i>
        

      </div>

   
   
   </div>
   <div className=" lg:w-1/4 w-1/4 mt-1">

    <ul className='lg:px-[45px] xxs:w-full'>
      <li><a href="#" className='font-pops lg:leading-[24px] font-bold xxs:text-[14px] text-[16px] text-white '> Company </a></li>
      <li><a href="#" className='font-pops lg:leading-[21px] font-normal text-[14px] text-white '> Home </a></li>
      <li><a href="#" className='font-pops lg:leading-[21px] font-normal text-[14px] text-white '> About </a></li>
      <li><a href="#" className='font-pops lg:leading-[21px] font-normal  text-[14px] text-white '> Service </a></li>
      <li><a href="#" className='font-pops lg:leading-[21px] font-normal  text-[14px] text-white '> Galllery </a></li>




    </ul>



   </div>
   <div className="lg:w-[20%] w-[40%] lg:mt-1  ">

<ul className='lg:mt-1 mt-5 xxs:w-full '>
  <li><a href="#" className='font-pops lg:leading-[24px] font-bold xxs:text-[14px] text-[16px] text-white '> Others </a></li>
  <li><a href="#" className='font-pops lg:leading-[21px] font-normal xxs:text-[13px] text-[14px] text-white '> Blog </a></li>
  <li><a href="#" className='font-pops lg:leading-[21px] font-normal xxs:text-[13px] text-[14px] text-white '> Contact </a></li>
  <li><a href="#" className='font-pops lg:leading-[21px] font-normal xxs:text-[13px] text-[14px] text-white '> Terms & Conditions </a></li>
  <li><a href="#" className='font-pops lg:leading-[21px] font-normal xxs:text-[13px] text-[14px] text-white '> Privacy Policy </a></li>




</ul>



</div>
   <div className="lg:w-[30%] w-[60%] xs:mt-[-75px]   lg:mt-1 ">

    <div className="w-full lg:mx-[-65px]">
  <ul className='lg:mt-[-35px] mt-[65px]  xs:text-center  xxs:text-center  sm:text-center'>
  <li><a href="#" className='  font-pops lg:leading-[24px] font-bold text-[16px] text-white '> Certificate </a></li>
  </ul>
  </div>
 
  <div className="lg:mt-[42px] mt-3 flex w-full  lg:gap-x-2 gap-x-1">
 
  
  
  
  <div className='border-2 border-white px-3 xxs:px-1 bg-[#FFFF]   hover:bg-black font-pops font-semibold' style={{borderRadius: "0.25rem"}}>
   <h6 className='lg:leading:[36px] font-pops font-bold text-bl text-[17px] lg:text-[24px]'>ISO 88</h6>
   <p className='lg:leading:[12px] font-pops text-bl font-medium lg:text-[8px] text-[7px]'>Environmentally Safe</p>

  </div>
  <div className='border-2 border-white lg:px-3 xxs:px-0 px-2 bg-[#FFFF]  hover:bg-black ' style={{borderRadius:'0.25rem', }}>
    <div className="flex items-center mt-[8px]">
   <h6 className='lg:leading:[21px] font-pops font-bold text-gr text-[14px]'>Liquid</h6>
   <h6 className='lg:leading:[21px] font-pops font-bold text-vi text-[14px]'>Green</h6>
   </div>
  </div>
 


  </div>
  
  
   </div>
   

   </div>


      </div>
    </section>
  )
}

export default Footer