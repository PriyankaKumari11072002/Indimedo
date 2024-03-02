import React, { useMemo, useState } from 'react'

const Banner = () => {
  const [count1, setCount1] = useState(0);
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
  
  const bannerLimits = 3
 const [bannerCurrIndex,setBannerCurrIndex] = useState(0)
 const currentBannerShow =  useMemo(()=>{

  return banner.slice(bannerCurrIndex,bannerCurrIndex+bannerLimits)
 },[banner,bannerCurrIndex])


  function handlePrev(){
    setBannerCurrIndex((prev)=>(prev-bannerLimits+banner.length)%banner.length)
  }
  
function handleNext(){
setBannerCurrIndex((prev)=>(prev+bannerLimits+banner.length)%banner.length)
}

  return (
    <>
 <div className="d-flex justify-content-between align-items-center gap-2  bg-white " style={{padding:"20px 40px"}}>   
 <button  onClick={handlePrev}  style={{marginRight:"-9px",zIndex:"0"}}>{'<'}</button>
   {currentBannerShow.length>0&&currentBannerShow.map((img)=>(
     <div className="  " style={{}} key={img.id} >
     <img src={img.banner} alt="" className="src"  style={{width:"350px",height:"180px",borderRadius:"10px"}}/>
     </div>  

   ))}

     <button  onClick={handleNext} className='btn-primary'  style={{marginLeft:"-95px",zIndex:"0"}}>{'>'}</button>
    </div>  

    </>
  )
}

export default Banner;