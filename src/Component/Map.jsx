import React from 'react'
import map from "../Assets/Maps.png"

const Map = () => {
  return (
    <section id='map' className='py-[160px]  '>


      <div className="w-full"style={  {backgroundImage : `url(${map})`, backgroundSize : "cover", width: "full",  backgroundPosition: "center", height: "400px", backgroundRepeat:'no-repeat'}}>

        
      </div>
   
    
    </section>
  )
}

export default Map