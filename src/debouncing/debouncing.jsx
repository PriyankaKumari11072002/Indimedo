import React, { useState } from 'react'
import { useRef } from 'react';

const Debouncing = () => {
    const [query, setQuery] = useState(''); 
 let count = 0   

// const handleChange = (query)=>{
//   // e.preventDefault()
//     setQuery(query)

// }
let timer = useRef(null)
function  debouncedSearch(query){
  // let timer;
  clearTimeout(timer.current);
      timer.current  =  setTimeout(()=>{
        console.log(query,'queryquery')
          // fun()  
        },1000)
    // return function(){
    //    // console.log(...args,'args')
        
    // }
    
}
//const debouncefun = debouncingfun(handleChange,1000)
  return (
    <div>
        <input
        type="text"
        value={query}
        //onChange={(e)=>{const newquery = e.target.value; setQuery(newquery);debouncingfun(newquery)}}
        onChange={(e)=>{ const newQuery = e.target.value;
            setQuery(newQuery)
            debouncedSearch(newQuery)}}
        placeholder="Enter search term"
      />
    </div>
  )
}

export default Debouncing