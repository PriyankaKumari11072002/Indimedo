import React, { useContext ,useState} from 'react'
import Store from '../store/store'

const Search = () => {
    // const {searchValue, setSearchValue}  = useContext(Store)
    const [searchValue, setSearchValue]  = useState('')
    const [searchList, setsearchList]  = useState([])

    const fetchApi  = async(searchQuery)=>{
       
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => {const results = json.filter((user)=>{
            return  user&&user.name&&user.name.toLowerCase().includes(searchQuery)
        })
        setsearchList(results)
    
    })
   
       }

     
    const handleSubmit = (e)=>{
     e.preventDedault();

    }
  return (
    <>
    <div>
     <form  onSubmit={handleSubmit}> 
    <input
      placeholder="...search anything"
      type="search"
      value={searchValue}
      onChange={(e)=>{  const value = e.target.value;
        setSearchValue(value);
        fetchApi(value);}}
      className='focus:ring-2 focus:ring-purple-600 focus:outline-none focus:border-red-600 ...  fixed'
     
      style={{ width: '630px',padding:"10px" ,borderRadius:"20PX", color: 'green' ,border:'none'}} />
<button type="submit">search</button></form>  

   
 
    </div>
    {searchList.length > 0 && searchList.map((searchList) => (
          <div className='scroll'>
         {searchList.name}
          </div>
       
        ))}
  
</>
  )
}

export default Search