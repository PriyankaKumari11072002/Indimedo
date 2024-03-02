import React, { useEffect ,useState} from 'react'

const Landing = () => {
    const [pharmacyApi,setpharmacyApi] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/photos').then(res=>res.json()).then(pharmacyApi=>setpharmacyApi(pharmacyApi))
    },[])
    const showpharmacyApi = pharmacyApi.slice(0,6)

   // console.log(pharmacyApi.title,pharmacyApi.thumbUrl,'pharmacy')
  return (
    <div>
  
   {showpharmacyApi&&showpharmacyApi.length>0?showpharmacyApi.map((items)=>( <div >
    <img  src={items.url}/>
    <p>{items.title}</p>

    </div>)):<h1>data is loading</h1>}
    </div>
  )
}

export default Landing