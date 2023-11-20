import React from 'react'
import bgImage from "../../../public/assets/Hilti.jpg"

const UxClientSuccess = () => {
  return (
    <div className='bg-[#f4f9fc] py-[35px]'>
        <h1 className='text-center text-[#e84924] text-[30px] font-bold mb-[30px]'>Client Success</h1>
        <div className=' px-[20px] md:mr-[60px] flex flex-col md:flex-row items-center md:justify-end relative'>
            <div className='bg-white my-[20px] md:w-1/2 md:ml-[60px] max-h[250px] p-[20px] shadow-xl md:absolute left-0'>
                <h3 className='mb-[10px] text-[20px] text-[#e34d28] font-bold'>Asset-tracking solution with engaging user experience for construction companies </h3>
                <p className='text-base'>The client, is a billion-dollar company servicing various industries such as agriculture, building, construction, geospacial, government, transportation, etc.</p>
                <button className='bg-[#33d796] px-[20px] py-[10px] rounded border my-[10px] text-[18px]'>Download</button>
            </div>
            <div>
                <img src={bgImage.src} className='border-white border-8 shadow-xl'/>
            </div>
        </div>
    </div>
  )
}

export default UxClientSuccess