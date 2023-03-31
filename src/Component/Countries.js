import React from 'react'
import { FaTimes } from 'react-icons/fa';

const Countries = (props) => {
    const {countri} = props
    const {name, flags, area, capital , population} =  countri

    const handleRemove = (name) => {
      props.handleRemove(name)
    }
  return (
    <div className=' text-white rounded-lg bg-[#0a192f]'>
      
        <div className='max-w-[1100px] w-full h-full mx-auto p-2 flex flex-col justify-center bg-[#0a192f] rounded-md font-sans hover:scale-110 duration-300 shadow-lg shadow-[#040c16] cursor-pointer'>
        <div onClick={() => handleRemove(name.common)} className='flex justify-end pt-1 cursor-pointer text-xl'>
        <FaTimes />
        </div>
        
              <div className='px-6 py-2'>
              
            <div>
            <img src={flags.png} alt={name.common} className=" w-44 h-28"  />
            </div>
            <div>
            <h1 className='text-lg pt-4 font-bold sm:text-lg md:text-lg'>Name: {name.common}</h1>
            </div>
                <div>
                <h1>Capital: {capital}</h1>
                </div>
        <div>
        <h1>Population: {population}</h1>
        </div>
        
        <div>
        <h1>Area: {area}</h1>
        </div>
        <div>

        </div>
        
             
        
            </div>
        
            
      
    </div>
    </div>
    
  )
}

export default Countries
