import React, { useEffect, useState } from 'react';

const UseEffect = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleChange = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  
  };
// useEffect(()=>{
//     console.log('initially render only , dont go on infinitive mode')
// })

 const evenNum =  useEffect(()=>{
    console.warn('....................only this logic apply on button 1 ')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error('Error fetching data:', error));

//   for (let i = 0; i <= 10000; i++) {
//     console.log(i, 'i');
//   }
//useEffect must not return anything besides a function means ()=> any function just like delete,edit ,add fun, which is used for clean-up.
//console.log(evenNum,'evenNum') it will provide undefined because useeffect can't memorized value if you want only retun variable for memorizing variable value so used useMemo hook
    return ()=>count1%2==0

 },[count1])
  return (
    <div>
      <button onClick={handleChange}>count1: {count1}</button>
      {evenNum?"even":"odd"}
      <button onClick={() => setCount2((prevCount2) => prevCount2 + 1)}>
        count2: {count2}
      </button>
    </div>
  );
};

export default UseEffect;
