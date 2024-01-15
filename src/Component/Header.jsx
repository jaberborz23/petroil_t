import React from 'react'
import { FaFacebook,FaTwitter,FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiMailUnreadLine } from "react-icons/ri";

const Header = () => {
  return (
   <section className='py-1 bg-headerbg'>
     <div className='max-w-container mx-auto'>
     <div className='flex flex-wrap items-center'>
   
      <div className=' w-full   sm:w-1/2  md:w-[30%] lg:w-1/3'>
          <div className='flex items-center gap-1 lg:gap-2'>
          <  RiMailUnreadLine className='text-white' />
          <p className='text-white '> mail@yourcompany.com</p>

          </div>
        
          
        </div>
        <div className=" mt-2 w-1/9 xxs:hidden  lg:block">
        <div className="  relative  after:absolute after:content-[''] after:h-[16px] after:top-[-15px] after:left-[-128px] after:w-[2.5px] border-1  after:rotate-[-90] after:bg-hd after:z-[10] ">
           
           </div> 
           </div>
       
        <div className='w-1/9   sm:w-1/2 md:w-[30%] lg:w-1/3'>
          <div className=' flex items-center lg:gap-2 gap-1 sm:gap-2'>
          <FaPhoneVolume className='text-white' />
          <p className='text-white'>   +896 120 5889 (Toll free)</p>
          </div>
          
        </div>
     
        <div className='w-1/9  md:w-[30%]  lg:w-[30%] xs:my-2 xxs:mx-4 '>
      <div className='flex sm:justify-center justify-end  gap-x-6 sm:py-4'>
        <i className='text-white'><FaFacebook  /></i>
        <i className='text-white' ><FaTwitter  /></i>
       
        <i className='text-white'><FaLinkedinIn    /></i>
        <i className='text-white'><FaInstagram   /></i>
        

      </div>
        </div>
     </div>
    </div>
   </section>
  )
}

export default Header