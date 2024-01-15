import React from 'react'
import road from "../Assets/road.png"


const Company = () => {
  return (
    <section id='company' className='py-[136px] bg-wh'>
      <div className="max-w-container mx-auto">
   <div className=" flex flex-wrap">
  <div className="lg:w-[35%] w-full">
   <div className="lg:w-[413px] w-auto lg:h-[361px] h-auto bg-cmbg"> 
   <div className="  lg:mx-[55px] w-full">
   <h2 className='py-[78px]  text-center lg:leading-[54px] text-white font-pops font-bold text-[30px] lg:text-[36px] lg:w-[262px] w-auto '>Learn more about our company</h2>
  
   </div>
    </div>

  </div>
  <div className="lg:w-[65%] w-full lg:mx-[-49px] xxs:px-[120px] xxs:py-[130px] xs:px-[230px] xs:py-[140px] sm:px-[230px] sm:py-[140px] " style={{backgroundImage: `url(${road})` , width: "full", backgroundRepeat:"no-repeat"} }>
   
   <div className=" w-full lg:ml-[120px]  ml-6 mt-[56px]  lg:mt-[40px]">
    <a href="#" className='border-3 border-transparent p-4 xxs:p-1 bg-white text-center lg:leading-[24px] text-[red] font-pops font-medium xxs:text-[9px] text-[16px] hover:bg-black'>Learn More</a>
   </div>
  
   
  </div>



   </div>
    

   



    </div>
    
    
    </section>
  )
}

export default Company