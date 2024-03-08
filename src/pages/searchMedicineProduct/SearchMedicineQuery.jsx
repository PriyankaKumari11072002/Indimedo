import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchMedicineQuery = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();



  const handleChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
        if (query.length >3) { 
          navigate(`/product/search/${query}`);
         }
     
 
          
        
  };


  return (
    <form>
      <input
        type="text"
        value={query}
        onChange={ handleChange }
        placeholder="Enter search term"
      />
    </form>
  );
};

export default SearchMedicineQuery;
