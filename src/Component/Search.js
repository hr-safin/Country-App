import React, { useEffect, useState } from 'react'

const Search = (props) => {
    const [change, setChange] = useState("")

    const handleChange = (e) => {
        setChange(e.target.value)
        
       
    }

    useEffect(() => {
        props.onChange(change)
    }, [change])
  return (
    <div className='flex justify-center mt-10'>
      <input onChange={handleChange} type="text" placeholder='Search here' value={change} className="border-2 border-white pr-8 p-2" />
    </div>
  )
}

export default Search
