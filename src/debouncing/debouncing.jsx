import React, { useState } from 'react'

const Debouncing = () => {
    const [query, setQuery] = useState(''); 
 let count = 0   

const handleChange = (e)=>{
  e.preventDefault()
    setQuery(e)
console.log(query,count++,'query')
}

function debouncingfun(fun,time){
  let timer;
    return function(...args){
        console.log(...args,'args')
        if(timer)clearTimeout;
        setTimeout(()=>{
          fun(...args)  
        },time)
    }
    
}
const debouncefun = debouncingfun(handleChange,5000)
  return (
    <div>
        <input
        type="text"
        value={query}
        onChange={(e)=>debouncefun(e.target.value)}
       
        placeholder="Enter search term"
      />
    </div>
  )
}

export default Debouncing