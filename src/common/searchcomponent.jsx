import React, { useState, useRef } from "react";
import axios from "axios";

const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [QueryNotFound,setQueryNotFound] = useState("")

  const debounceTimeout = useRef(null);

  const debouncedSearch = (searchQuery) => {
    setLoading(true);
    clearTimeout(debounceTimeout.current);
    debounceTimeout.current = setTimeout(async () => {
      try {
        const response = await axios.get(
          `https://indimedo.onrender.com/product/search?query=${searchQuery}`
        );
        setResults(response.data);
        setQueryNotFound("")
      } catch (error) {
        setResults([])
        setQueryNotFound("No data found related your query")
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }, 100); // Adjust debounce delay as needed
  };

  // const handleInputChange = (event) => {
  //   const newQuery = event.target.value;
  //   setQuery(newQuery);
  //   debouncedSearch(newQuery);
  // };


  const handleSubmit = (event) => {
    event.preventDefault();
    debouncedSearch(query)
    setQuery("")
  };

console.log(results.length,'results')
  return (
    <div>
        <form  onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
       // onChange={handleInputChange}
       
      //  onChange={(e)=>{ const newQuery = e.target.value;
      //   setQuery(newQuery);
      //   debouncedSearch(newQuery);}}
      onChange={(e)=>{ const newQuery = e.target.value;
        setQuery(newQuery);}}

   
      />
      <button type="submit">submit</button>
</form>

      {loading && <p>Loading...</p>}

      <ul>
  {results.length > 0 &&(
    results.map((result, index) => (
      <li key={index}>{result.title}</li>
    ))
  ) 
  }
</ul>
{QueryNotFound&&<h1>{QueryNotFound}</h1>}
      {/* <ul>
        {results?results.map((result,index) => (
          <li key={index} >{result.title}</li>
        )):(<h1>No data</h1>)}

        
      </ul> */}



    </div>
  );
};

export default SearchComponent;