import React from 'react'
import worker from "../Assets/worker.png"
import plan from "../Assets/plan.png"
import rope from "../Assets/rope.png"

const Lorem = () => {
  return (
    <section id='lorem'>
      <div className="max-w-container mx-auto">
     <div className="flex flex-wrap gap-x-2 xl:gap-x-6">


     <div className="lg:w-[32%] w-full px-[60px] py-[100px] relative z-[1] after:top-0 after:absolute after:left-0 after:content-[''] after:h-full after:w-full after:bg-gr after:z-[-1] " style={  {backgroundImage : `url(${worker})`, backgroundSize : "cover", width: "full", backgroundPosition: "center", backgroundRepeat:'no-repeat'}}>
                
                <h2 className=' lg:leading-[36px]   text-white font-pops lg:w-[249px] w-auto font-bold text-[24px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                <div className="mt-5">
                <a className='border-2 border-transparent bg-lr p-2 hover:bg-[green] text-white text-[12px] xxs:ms-2 xs:ms-2' href="#">Read More</a>
                
              
                </div>
                
               
               </div>

               <div className="lg:w-[32%] w-full px-[60px] py-[100px] relative z-[1] after:top-0 after:absolute after:left-0 after:content-[''] after:h-full after:w-full after:bg-gr after:z-[-1] " style={  {backgroundImage : `url(${plan})`, backgroundSize : "cover", width: "full", backgroundPosition: "center", backgroundRepeat:'no-repeat'}}>
                
                <h2 className=' lg:leading-[36px]   text-white font-pops lg:w-[249px] w-auto font-bold text-[24px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                <div className="mt-5">
                <a className='border-2 border-transparent bg-lr p-2 hover:bg-[green] text-white text-[12px]  xxs:ms-2 xs:ms-2' href="#"> Read More</a>
                
              
                </div>
                
               
               </div>

               <div className="lg:w-[32%] w-full px-[60px] py-[100px] relative z-[1] after:top-0 after:absolute after:left-0 after:content-[''] after:h-full after:w-full after:bg-gr after:z-[-1] " style={  {backgroundImage : `url(${rope})`, backgroundSize : "cover", width: "full", backgroundPosition: "center", backgroundRepeat:'no-repeat'}}>
                
                <h2 className=' lg:leading-[36px]   text-white font-pops lg:w-[249px] w-auto font-bold text-[24px]'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</h2>
                <div className="mt-5">
                <a className='border-2 border-transparent bg-lr p-2 hover:bg-[green] text-white text-[12px] xxs:ms-2 xs:ms-2' href="#">Read more</a>
                
              
                </div>
                
               
               </div>





     </div>



      </div>
    </section>
  )
}

export default Lorem