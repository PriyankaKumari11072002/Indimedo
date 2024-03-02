import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from '../pages/Landing';
import Home from '../pages/home/home';
import SearchMedicineList from '../pages/searchMedicineProduct/SearchMedicineList';



const Routing = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path='/product/search/:query' element={<SearchMedicineList/>}/>

   {/* <Route path='/users/:id' element={<SearchMedicineList/>}/> */}

   </Routes>
   </BrowserRouter> 
  )
}

export default Routing;