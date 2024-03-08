import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Landing from '../pages/Landing';
// import Home from '../pages/home/home';
// import SearchMedicineList from '../pages/searchMedicineProduct/SearchMedicineList';
// import UploadPrescription from '../common/UploadPrescription';

import {lazy,Suspense} from 'react'

//const LoginPage = lazy(()=>import('./Pages/Login'))

const SearchMedicineList  = lazy(()=>import('../pages/searchMedicineProduct/SearchMedicineList'))
const UploadPrescription = lazy(()=>import('../common/UploadPrescription'))
const Home = lazy(()=>import('../pages/home/home'))
// const = lazy(()=>import())


const Routing = () => {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<Suspense><Home/></Suspense>}/>
   <Route path='/product/search/:query' element={<Suspense><SearchMedicineList/></Suspense>}/>
{/* 
   <Route path='/users/:id' element={<SearchMedicineList/>}/> */}
   <Route path='/upload-prescription' element={<Suspense><UploadPrescription/></Suspense>}/>

   </Routes>
   </BrowserRouter> 
  )
}

export default Routing;