import React, { useState ,useCallback} from 'react'

const DebouncingReal = () => {
    const [query, setQuery] = useState(''); 
    const [api, setApi] = useState([]); 
 let count = 0   

const handleChange = (query)=>{
//     e.preventDefault()
//   const value  = e.target.value
//     console.log(value,'val') 
    setQuery(query)
  
  fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
  .then(response => response.json())
  .then(json => setApi(json))
  console.log(query,api,'value')

}
const debounce = (func)=>{
    let timer;
    return function(...args){
        const context = this
        if(timer)clearTimeout(timer);
        timer = setTimeout(()=>{
            timer = null
           //func.apply(context,args)
           func(...args)

        },1000)

    }
}

const optimizeversion = useCallback(debounce(handleChange))

  return (

    <div>
        <input
        type="text"
        value={query}
        onChange={(e)=>optimizeversion(e.target.value)}
       
        placeholder="Enter search term"
      />
      <ul>
        {api.map((product) => (
    
          <li key={product._id}>
  <p>Product Title</p>
            {product.name}
            <p>Product category</p>
            {product.username}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DebouncingReal