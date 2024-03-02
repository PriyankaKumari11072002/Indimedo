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

const App = () => {
  return (
  <>
  {/* <SearchProducts/> */}
  {/* <Search/> */}
  {/* <Debouncing/> */}
  {/* <DebouncingReal/> */}
<Routing/>


  </>

  )
}

export default App;