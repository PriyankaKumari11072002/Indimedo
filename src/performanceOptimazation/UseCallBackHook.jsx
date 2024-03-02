import React, { useCallback, useMemo, useState } from 'react';

const UseCallback = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleChange = () => {
    setCount1((prevCount1) => prevCount1 + 1);
  
  };

  const evenNum = useMemo(()=>{
    console.warn('....................only this logic apply on button 1 ')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error('Error fetching data:', error));

//   for (let i = 0; i <= 10000; i++) {
//     console.log(i, 'i');
//   }

return count1%2==0

 },[count1])
 console.log(evenNum,'evennum')
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

export default UseCallback;
