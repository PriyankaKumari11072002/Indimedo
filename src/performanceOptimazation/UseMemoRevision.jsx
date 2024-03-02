import React, { useMemo, useState } from 'react';
//any func ,if else condition , props , any variable which is performing something effect on other state update 
const UseMemoRevision = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const anyfunctionality = useMemo(() => {
    if(count1<20){
        console.warn('...............warn')  
     }
     
  },[count1]);
  
  const evenNum = useMemo(()=>{
    {evenNum?"even":"odd"}
    console.warn('....................only this logic apply on button 1 ')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error('Error fetching data:', error));

  for (let i = 0; i <= 10; i++) {
    console.log(i, 'i');
  }
    return count1%2==0

 },[count1])
 
 
  return (
    <div>
      <button onClick={()=> setCount1((prevCount1) => prevCount1 + 1) }>count1: {count1}</button>
         {anyfunctionality()}
         {evenNum()?"even":"odd"}
      <button onClick={() => setCount2((prevCount2) => prevCount2 + 1)}>
        count2: {count2}
      </button>


    </div>
  );
};

export default UseMemoRevision;
