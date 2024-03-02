
import React, { useMemo, useState } from 'react';


const UseMemothappa = () => {
    const [count1, setCount1] = useState(0);
 
    const [count2, setCount2] = useState(0);
  
    const handleChange = () => {
      setCount1((prevCount1) => prevCount1 + 1);
    
    };

    
    const expensivefunction = ()=>{
        if(count1<10){
            console.log('expensivefunction')
        
            for (let i = 0; i <= 1000; i++) {
              console.log(i, 'i');
            }
        }


      
    }


//     const evenNum = useMemo(()=>{
     
  
//    },[count1])

  return (
    <div>
 <div>
      <button onClick={handleChange}>count1: {count1}</button>
      {/* <button onClick={() => setCount2((prevCount2) => prevCount2 + 1)}>
        count2: {count2}
      </button> */}
      {expensivefunction()}

      <button onClick={() => setCount2((prevCount2) => prevCount2 + 1)}>
        pls click me
      </button>
    </div>

    </div>
  )
}

export default UseMemothappa