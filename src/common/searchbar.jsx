import React, { useCallback, useMemo, useState } from 'react';
import axios from 'axios';

const SearchProducts = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [click, setClick] = useState(0);

  useCallback(()=>{},[])
  const handleSearch = useMemo(async () => {
    try {
      const response = await axios.get(`https://indimedo.onrender.com/product/search?query=${query}`)
      setResults(response.data);
      console.log(results,'res')
    } catch (error) {
      console.error('Error searching products:', error);
    }
    return 
  },[query]);


  const handleKeyPress = useMemo(async(e) => {
console.log('this is not working')
   if (e.key === 'Enter') {
    try {
 
      const response = await axios.get(`https://indimedo.onrender.com/product/search?query=${query}`)
      setResults(response.data);
      console.log(results,'res')
    } catch (error) {
      console.error('Error searching products:', error);
    }
    }
    return 
  },[query]);

 
console.log(handleSearch,'handlesearch')

  const handleKey = useMemo((e) => {
    console.log('....warn keyup')
  },[click]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter search term"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((product) => (
          <li key={product._id}>
            <p>Product Title</p>
            {product.title}
            <p>Product category</p>
            {product.category}
          </li>
        ))}
      </ul>

      <button onClick={()=>{setClick(click+1),{handleKey}}}>click:{click}</button>
    </div>
   
  );
};

export default SearchProducts;