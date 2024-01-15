import React from 'react'


const About = () => {
  return (
    <section className='bg-white py-[78px]'>
      <div className="max-w-container mx-auto">
        <div className="flex flex-wrap xs:ms-2 xxs:ms-2">
         <div className="lg:w-1/2 w-full ">
          <h2 className='text-[#222] font-pops font-bold text-[48px] xs:text-[36px] xxs:text-[36px] w-auto xl:w-[289px]'>The biggest supplier on the country</h2>
         </div>
         <div className="lg:w-1/2 w-full flex items-center xs:mt-[70px] xxs:mt-[70px]">
          <p className=' w-auto  font-pops font-medium text-[16px] text-[rgba(108,108,108,1)]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
         </div>

        </div>
      </div>
    </section>
  )
}

export default About