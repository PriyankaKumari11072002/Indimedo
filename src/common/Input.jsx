import React from 'react'

const Input = ({placeholder,type,onChange,value}) => {

  return (

    <div>
    <input
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      className='focus:ring-2 focus:ring-purple-600 focus:outline-none focus:border-red-600 ...  fixed'
     
      style={{ width: '630px',padding:"10px" ,borderRadius:"20PX", color: 'green' ,border:'none'}} />


   
 
    </div>
    
    // https://www.apollopharmacy.in/
    // https://pharmeasy.in/health-care?src=homecard
  )
}

export default Input