import React, { useState } from 'react'
import Home from './pages/home/home'
import Routing from './Routing/routing'

import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import Example from './pages/carousal';
import Banner from './Banner/banner';
import Banner1 from './Banner/banner1';
import Search from './searchBar/seach';
import SearchProducts from './common/searchbar';

import axios from 'axios'
import SearchMedicineQuery from './pages/searchMedicineProduct/SearchMedicineQuery';
import Debouncing from './debouncing/debouncing';
import DebouncingReal from './debouncing/DebouncingReal';
import { Button } from 'bootstrap';

const App = () => {
 // const [click,setClick] = useState(false)
//   var req = unirest("GET", "https://www.universal-tutorial.com/api/countries/");

// req.headers({
//   "Authorization": "Bearer JUywe90EgngUfqHgxVWM_cQ1gzDmzcNUJZVKTNzPU9Z9IrE8eF-J-3KqLWnvuu5B5Xo",
//   "Accept": "application/json"
// });
// console.log(req,'req')
// fetch("https://www.universal-tutorial.com/api/countries/", {
//   method: "GET",
//   headers: {
//     "Authorization": "Bearer JUywe90EgngUfqHgxVWM_cQ1gzDmzcNUJZVKTNzPU9Z9IrE8eF-J-3KqLWnvuu5B5Xo",
//     "Accept": "application/json"
//   }
// })
// .then(response => response.json())
// .then(data => {
//   console.log(data,'data'); // Handle the response data here
// })
// .catch(error => {
//   console.error("Error fetching countries:", error);
// });
  return (
  <>
  {/* {!click&&<button onClick={()=>setClick(true)}>click</button>}
  {click&&<button >page change</button>} */}
  {/* <SearchProducts/> */}



  
  {/* <Search/> */}
  {/* <Debouncing/> */}
  {/* <DebouncingReal/> */}
<Routing/>


  </>

  )
}

export default App;