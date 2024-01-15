import React from 'react'
import ban from "../Assets/unsplash_vEoMKBdUIzs.png"
const Banner = () => {
    return (
    <section id='banner' className=' w-full py-[240px] z-[1] relative after:absolute after:top-0 after:left-0 after:content-[""] after:h-full after:w-full after:bg-[rgba(0,0,0,0.64)] after:z-[-1] xs:w-auto xxs:w-auto'style={{ backgroundImage: `url(${ban})`, backgroundSize: "cover", backgroundRepeat: "no-repeat",backgroundPosition: "center",width: "full", backgroundAttachment: "fixed" }} >
  
   
  <div className="max-w-container mx-auto">
    <h1 className=' text-[rgba(255,255,255,1)] font-[pops] font-bold lg:text-[64px] xs:text-[55px] xxs:text-[55px] w-auto lg:w-[842px] pb-[31px] xxs:ms-2 xs:ms-2'>We exist since 1975 on the oil and gas industry.</h1>
    <a className='border-2 border-transparent bg-[red] p-2 hover:bg-[green] text-white xxs:ms-2 xs:ms-2'>LEARN MORE</a>
  </div>


    </section>
  )
}

export default Banner