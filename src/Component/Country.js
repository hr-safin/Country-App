import React from 'react'

import { v4  as uuidv4} from "uuid"
import Countries from './Countries'

const Country = (props) => {
  return (
    <div className=' px-8 grid sm:grid-cols-3 md:grid-cols-3 grid-cols-1 w-full gap-6 py-8  rounded-md '>
      {props.country.map((countri) => {
           const counryNew = {countri , id:uuidv4()}

           return <Countries {...counryNew} key={counryNew.id} handleRemove={props.handleRemove} />
      })}
      
    </div>
  )
}

export default Country
