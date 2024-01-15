import React from 'react'
import bridge from "../Assets/bridge.png"
import fuel from "../Assets/fuel.png"
import oil from "../Assets/oil.png"

const Service = () => {
  return (
    <section id='service' className='py-[28px]'>
        <div className=" mx-auto">
            <div className="flex flex-wrap ">
                <div className="lg:w-[50%] w-full ">
                  <div className=" mt-[30px] xl:mx-[200px]">
                  <h2 className='xl:w-[509px] w-auto  font-pops xl:leading-[96px] font-bold text-[rgba(0, 0, 0, 0.6] text-[56px] xs:text-[36px] xxs:text-[55px] sm:text-[36px] xl:text-[64px]'>Our Services</h2>
                    <p className='xl:w-[405px] w-auto lg:px-2  font-pops xl:leading-[24px]  text-[16px] text-[rgba(108, 108, 108, 1)] font-medium'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                  </div>
              
                  
                </div>
                <div className="lg:w-[50%] w-full px-[60px] py-[100px] relative z-[1] after:top-0 after:absolute after:left-0 after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.66)] after:z-[-1] " style={  {backgroundImage : `url(${bridge})`, backgroundSize : "cover", width: "full", backgroundPosition: "center", backgroundRepeat:'no-repeat'}}>
                
                 <h2 className=' xl:leading-[54px]   text-white text-center font-pops xl:w-[691px] w-auto font-bold text-[36px]'>Modern natural oil and gas refineries.</h2>
                 <div className="mt-4">
                 <a className='border-2 border-transparent bg-[red] p-2 hover:bg-[green] text-white  xxs:ms-2 xs:ms-2' href="#">Learn More</a>
                 
               
                 </div>
                 
                
                </div>
             
              


            </div>
            <div className="flex  flex-wrap ">
                
                <div className="lg:w-[50%] xs:w-full xxs:w-full  px-[60px] py-[100px] relative z-[1] after:top-0 after:absolute after:left-0 after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.66)] after:z-[-1] " style={  {backgroundImage : `url(${fuel})`, backgroundSize : "cover", width: "full", backgroundPosition: "center", backgroundRepeat:'no-repeat'}}>
                
                 <h2 className=' xl:leading-[54px]   text-white text-center font-pops xl:w-[691px] w-auto font-bold  text-[36px]'>Supply of national industries.</h2>
                 <div className="mt-4 lg:mx-[70px]">
                 <a className='border-2 border-transparent bg-[red] p-2 hover:bg-[green] text-white  xxs:ms-2 xs:ms-2' href="#">Learn More</a>
                 
                 </div>
                 
                
                </div>
                <div className="lg:w-[50%] xs:w-full xxs:w-full w-full px-[60px] py-[100px] relative z-[1] after:top-0 after:absolute after:left-0 after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.66)] after:z-[-1] " style={  {backgroundImage : `url(${oil})`, backgroundSize : "cover", width: "full", backgroundPosition: "center", backgroundRepeat:'no-repeat'}}>
                
                <h2 className=' xl:leading-[54px]   text-white text-center font-pops xl:w-[691px] w-auto font-bold text-[36px]'>National fuel distribution and supply.</h2>
                <div className="mt-3">
                <a className='border-2 border-transparent bg-[red] p-2 hover:bg-[green] text-white  xxs:ms-2 xs:ms-2' href="#">Learn More</a>
                
                </div>
                
               
               </div>
              


            </div>
            




        </div>
    </section>
  )
}

export default Service