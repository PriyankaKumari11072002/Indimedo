import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { searchApi } from '../../utils/productApi';
import axios from 'axios';

const SearchMedicineList = () => {
const [queryProductList,setqueryProductList]  = useState([])
    const {query} = useParams()
  //   useEffect(() => {
  // let timer ;
  // timer =  setTimeout( async()=>{
  //       try {
  //             const response = await searchApi(`/product/search?q=${query}`)
  //           setqueryProductList(response.data)
  //           console.log(response.data,'res')
  //         } catch (error) {
  //           console.error('Error searching products:', error);
  //         }

  //      },100)
    
  //  return    ()=>{clearTimeout(timer)} 
  //  }, [query]);
   
    const handleSearch = async () => {
      // try {
      
      //   //   "https://indimedo.onrender.com/product/search",
      //   //   { query }
      //   // );
      //   const response = await searchApi(`/users?q=${id}`)
      //   console.log(response.data,'res')
      // } catch (error) {
      //   console.error('Error searching products:', error);
      // }

      try {
                    const response = await searchApi(`/product/search?q=${query}`)
                  setqueryProductList(response.data)
                  console.log(response.data,'res')
                } catch (error) {
                  console.error('Error searching products:', error);
                }
      
    };
  //   handleSearch()
 
  return (
    <div>

<ul>
        {queryProductList.map((product) => (
    
          <li key={product._id}>
  <p>Product Title</p>
            {product.title}
            <p>Product category</p>
            {product.category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SearchMedicineList