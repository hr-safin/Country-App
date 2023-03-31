import React, {useEffect, useState} from 'react'
import Country from './Country'
import Search from "./Search"


const url = "https://restcountries.com/v3.1/all"
const Hero = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [country, setCountry] = useState([])
    const [filterCountry, setFilter] = useState(country)

    const fetchData = async (url) => {
        setLoading(true)
        
        try{
        const res = await fetch(url)
        const data = await res.json()
        setCountry(data)
        setFilter(data)
        setLoading(false)
        setError(null)
       
        }catch (error) {
            setLoading(false)
            setError(error)
           
        }
    }

    useEffect(() => {
           fetchData(url)
    }, [])
    const handleRemove = (name) => {
       const filter = filterCountry.filter((country) => 
        country.name.common !== name
       )
       setFilter(filter)
    }
    const handleChange = (searchValue) => {
      let value=searchValue.toLowerCase()
      const countryNew = country.filter((count) => {
        const countryName = count.name.common.toLowerCase()
        return countryName.startsWith(value)
      })
      setFilter(countryNew)
    }
  return (
    <div>
      <Search onChange={handleChange} />
      {loading && <h2>loading</h2>}
      {error && <h2>{error.message}</h2>}
      {country && <Country country ={filterCountry}
      handleRemove = {handleRemove} />}
    </div>
  )
}

export default Hero
