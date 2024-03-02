import React, { useEffect ,useState} from 'react'

const DEBOUNCINGConcept = () => {
    const [query, setQuery] = useState(''); 
    const [api, setApi] = useState([]); 

    
function handleChange(e){
    setQuery(e.target.value)
  
  
}



useEffect(()=>{
  let timer;
 timer =    setTimeout(()=>{
      
      fetch(`https://jsonplaceholder.typicode.com/users?q=${query}`)
          .then(response => response.json())
          .then(json=>console.log(json,'j'))
          // .then(json => json.filter(filterApi => {
          //   console.log(filterApi.includes(query));
          // }))
          
          .catch((error) => console.error('Error fetching data:', error));
   
          console.log(query,api,'value')
      
        },1000)

   return ()=>clearTimeout(timer)
},[query])
  return (
    <>
         <input
        type="text"
        value={query}
        onChange={handleChange}
       
        placeholder="Enter search term"
      />
    
    </>
  )
}

export default DEBOUNCINGConcept