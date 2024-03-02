
import React, { useState } from 'react'
import Input from '../../common/Input'


const Navigationmaincontent = () => {
    const [openDropdown2,setopenDropdown2] = useState(false)
    const [openDropdown1,setopenDropdown1] = useState(false)
    const [openDropdown3,setopenDropdown3] = useState(false)
    const [openDropdown4,setopenDropdown4] = useState(false)
    const [openDropdown5,setopenDropdown5] = useState(false)
    const otherMedicineList1 = [1,2,3]
    const otherMedicineList2 = [4,5,6]
    const otherMedicineList3 = [7,8,9]
    const otherMedicineList4 = [10,11,12]
    const otherMedicineList5 = [13,14,15]
  return (
    <>
    <div className='flex justify-center align-middle gap-11   bg-green-700  text-white  p-6 font-normal font-serif font-extrabold'>
    <div>
    <h1 > Other Medicines
    <button className='dropdown-toggle'   onMouseOver={()=>setopenDropdown1(true)}  onMouseLeave={()=>setopenDropdown1(false)}></button>
    </h1>
    </div>

 
   

    <div>
    <h1>Care<button  className='dropdown-toggle'   onMouseOver={()=>setopenDropdown2(true)}  onMouseLeave={()=>setopenDropdown2(false)}></button>
   
    </h1>  
   </div>


    <div>
     <h1>Medical Devices<button  className='dropdown-toggle'   onMouseOver={()=>setopenDropdown3(true)}  onMouseLeave={()=>setopenDropdown3(false)}></button></h1> 
    </div>

    <div>
      <h1>Deit Nutrition<button  className='dropdown-toggle'   onMouseOver={()=>setopenDropdown4(true)}  onMouseLeave={()=>setopenDropdown4(false)}></button> </h1>
    </div>

    <div>
      <h1> Diabetic care<button  className='dropdown-toggle'   onMouseOver={()=>setopenDropdown5(true)}  onMouseLeave={()=>setopenDropdown5(false)}></button></h1>
    </div>

  
    </div>

    <div>
  {openDropdown1&&otherMedicineList1.map((items)=>(
        <div className='bg-green-100  text-gray-600   '  style={{width:"200px",padding:"20px  40px",marginLeft:"460px"}}>{items}</div>
    ))}

    {openDropdown2&&otherMedicineList2.map((items)=>(
        <div className='bg-green-100  text-gray-600   '  style={{width:"200px",padding:"20px  40px",marginLeft:"630px"}}>{items}</div>
    ))}
    {openDropdown3&&otherMedicineList3.map((items)=>(
        <div className='bg-green-100  text-gray-600   '  style={{width:"200px",padding:"20px  40px",marginLeft:"710px"}}>{items}</div>
    ))}
    {openDropdown4&&otherMedicineList4.map((items)=>(
        <div className='bg-green-100  text-gray-600   '  style={{width:"200px",padding:"20px  40px",marginLeft:"880px"}}>{items}</div>
    ))}
    {openDropdown5&&otherMedicineList5.map((items)=>(
        <div className='bg-green-100  text-gray-600   '  style={{width:"200px",padding:"20px  40px",marginLeft:"1040px"}}>{items}</div>
    ))}
    </div>

<Input  type="text"  placeholder="...search anything"/>
    </>
  )
}

export default Navigationmaincontent