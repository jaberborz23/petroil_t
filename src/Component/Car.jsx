import React from 'react'
import car from "../Assets/car.png"
import pump from "../Assets/pump.png"
import pipe from "../Assets/pipe.png"
import ship from "../Assets/ship.png"

const Car = () => {
  return (
    <section id='car' className='py-25'>
        <div className=" flex gap-x-7  xxs:gap-x-3 xs:gap-x-3">
   <div className="w-1/4">
 <img src={car} alt="car"  className='w-full'/>
   </div>
   <div className="w-1/4"><img src={pump}  className='w-full' alt="pump" /></div>
   <div className="w-1/4"><img src={pipe}  className='w-full' alt="pipe" /></div>
   <div className="w-1/4"> <img src={ship}  className='w-full' alt="ship" /></div>
   </div>


    </section>
  )
}

export default Car