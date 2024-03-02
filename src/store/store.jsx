
import React, { useState } from 'react'
import { Context } from './contex';

const Store = ({children}) => {
    const [searchValue, setSearchValue] = useState('pihu');   
    const [loginmodal, setloginModal] = useState(false);   
const value = "context"
  return (
    <>
    <Context.Provider  value={{searchValue,setSearchValue,loginmodal, setloginModal}}>{children}</Context.Provider>
    </>
  
  )
}

export default Store;