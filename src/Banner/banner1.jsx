import React, { useState,useMemo } from 'react';

const Banner1 = () => {
 
  const banner = [
    {
      "id": 1,
      "banner": "https://images.apollo247.in/pub/media/magestore/ba…rip_web17feb24.jpg?tr=w-400,q-100,f-webp,c-at_max"
    },
    {
      "id": 2,
      "banner": "https://images.apollo247.in/pub/media/magestore/ba…tion_bestdeals.jpg?tr=w-400,q-100,f-webp,c-at_max"
    },
    {
      "id": 3,
      "banner": "https://images.apollo247.in/pub/media/magestore/ba…um_care_diaper.jpg?tr=w-400,q-100,f-webp,c-at_max"
    },
    {
      "id": 4,
      "banner": "https://via.placeholder.com/150/d32776"
    },
    {
      "id": 5,
      "banner": "https://via.placeholder.com/150/f66b97"
    },
    {
      "id": 6,
      "banner": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "id": 7,
      "banner": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "id": 8,
      "banner": "https://via.placeholder.com/150/54176f"
    },
    {
      "id": 9,
      "banner": "https://via.placeholder.com/150/51aa97"
    },
    {
      "id": 10,
      "banner": "https://via.placeholder.com/150/810b14"
    },
    {
      "id": 11,
      "banner": "https://via.placeholder.com/150/1ee8a4"
    },
    {
      "id": 12,
      "banner": "https://via.placeholder.com/150/66b7d2"
    },
    {
      "id": 13,
      "banner": "https://via.placeholder.com/150/197d29"
    },
    {
      "id": 14,
      "banner": "https://via.placeholder.com/150/61a65"
    },
    {
      "id": 15,
      "banner": "https://via.placeholder.com/150/f9cee5"
    }
  ]
  const bannerLimits = 3;
  const [bannerCurrIndex, setBannerCurrIndex] = useState(0);
// const getApi = useMemo(()=>{
   

//     if(bannerCurrIndex===0){
//       console.log("warn , why rendering on second state update ")
//     }
   


//   },[bannerCurrIndex])

  const currentBannerShow =  useMemo(()=>{ return banner.slice(bannerCurrIndex, bannerCurrIndex + bannerLimits);},[banner,bannerCurrIndex])


  function handlePrev() {
    setBannerCurrIndex((prev) => (prev - bannerLimits + banner.length) % banner.length);
  }
  
  function handleNext() {
    const nextIndex = (bannerCurrIndex + bannerLimits) % banner.length;
  
    if (nextIndex < banner.length - bannerLimits) {
      setBannerCurrIndex(nextIndex);
    }
  }
 //count1  evenfun for delayling effect on 2 count  , 2 count 


 
  
   const [count2, setCount2] = useState(0);


  const clickMe = () => {
    setCount2((prevCount2) => prevCount2 + 1);
  
  };
  return (
    <>
      {/* {getApi?'suprising':""}
  <button onClick={clickMe}>click me:{count2}</button> */}
      <div className="d-flex justify-content-between align-items-center gap-2 " style={{ padding: "20px 40px" }} >
        <button onClick={handlePrev} style={{ marginRight: "-60px" }} disabled={bannerCurrIndex === 0}>{'<'}</button>
        {currentBannerShow.length > 0 && currentBannerShow.map((img) => (
            <div className="slider-container " style={{width:"18rem"}} key={img.id}>
          <div className="text-center"  style={{padding:"70px"}} > 

  <img src={img.banner} className="card-img-top" alt="..." width="100px"  height="200"/>
  
  </div>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
       
        ))}
        <button onClick={handleNext} className='btn-primary' disabled={bannerCurrIndex + bannerLimits >= banner.length}>{'>'}</button>
      </div>
  
    </>
  );
};

export default Banner1;
