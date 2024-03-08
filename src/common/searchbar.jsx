// import React, { useCallback, useEffect, useMemo, useState } from 'react';
// import axios from 'axios';

// const SearchProducts = () => {
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);
//   const [click, setClick] = useState(0);

//   useCallback(()=>{},[])
//   const handleSearch = useMemo(async () => {
//     try {
//       const response = await axios.get(`https://indimedo.onrender.com/product/search?query=${query}`)
//       setResults(response.data);
//       console.log(results,'res')
//     } catch (error) {
//       console.error('Error searching products:', error);
//     }
//     return 
//   },[query]);



//   const handleKeyPress = (query) => {
   
// //console.log('this is not working')
// let timeout ;
// clearTimeout(timeout);
//  timeout =  setTimeout(async()=>{
//     // if (e.key === 'Enter') {   }
//       try {
          
//         const response = await axios.get(`https://indimedo.onrender.com/product/search?query=${query}`)
//         setResults(response.data);
//         console.log(query,'queryquery')
//         console.log(results,'res')
//       } catch (error) {
//         console.error('Error searching products:', error);
//       }
   
//    },1000)
   
//   }

 
//   // useEffect(() => {
//   //   const delayDebounceFn = setTimeout(() => {
//   //     fetch(`https://indimedo.onrender.com/product/search?query=${query}`)
//   //       .then(response => response.json()).then(response => console.log(response,'response'))
//   //     console.log(query,'queryquery');
//   //     // Send Axios request here
//   //   }, 1000);

//   //   return () => clearTimeout(delayDebounceFn);
//   // }, [query]);



// //console.log(handleSearch,'handlesearch')

//   const handleKey = useMemo((e) => {
//    // console.log('....warn keyup')
//   },[click]);


//   const handleChange = (e) => {
//     const query = e.target.value
//     setQuery(query)
//     handleKeyPress(query)
//    };
//   return (
//     <div>
//       <input
//         type="text"
//         value={query}
//         onChange={handleChange}
//         // onKeyPress={handleKeyPress}
//         placeholder="Enter search term"
//       />
//       {/* <button onClick={handleSearch}>Search</button> */}
//       <ul>
//         {results.map((product) => (
//           <li key={product._id}>
//             <p>Product Title</p>
//             {product.title}
//             <p>Product category</p>
//             {product.category}
//           </li>
//         ))}
//       </ul>

//       <button onClick={()=>{setClick(click+1),{handleKey}}}>click:{click}</button>
//     </div>
   
//   );
// };

// export default SearchProducts;

import React, { useState, useRef } from 'react';
import axios from 'axios';

const SearchProducts = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const debounceTimeout = useRef(null);

  const debouncedSearch = (searchQuery) => {
    setLoading(true);
    clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(async () => {
      try {
        const response = await axios.get(`https://indimedo.onrender.com/product/search?query=${searchQuery}`);
        setResults(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }, 300); 
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    if (newQuery.trim() === '') {
      setResults([]);
    } else {
      debouncedSearch(newQuery);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    debouncedSearch(query);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
      {loading && <p>Loading...</p>}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchProducts;