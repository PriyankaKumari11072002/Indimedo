import React, { useContext } from 'react'
import { Context } from '../store/contex'
import { useNavigate } from 'react-router-dom'
const Modal = () => {
    const {loginmodal,setloginModal} = useContext(Context)
    const Navigate = useNavigate()
    console.log(loginmodal,'l')
  return (
    <>
    {loginmodal&&(
        <>
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
         
         launch
        </button>
      
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>

              <div className="modal-body  d-flex justify-content-around align-items-center  p-4  " >
                <div>
               <div><img src="https://www.netmeds.com/images/cms/wysiwyg/cms/1680000865_New_Dest_deal.png" alt="sign-in banner" width="180" height="200"/>
               </div> 
               <div>
               <h1>Welcome to Indimedo website</h1>
               <p>Sign up with us get exclusive offers,discounts  and savings  on medicine ,get express delivery on same day</p>
               </div>
                </div>


                <div>
                <h1>Sign up</h1>
                <p>Please enter your mobile number to login</p>
                <form action="">
                <label htmlFor="phone">Enter a phone number:</label>
                <input type="tel" id="phone" name="phone" placeholder="...8565476546" required  style={{border:"none",padding:'10px',borderBottomColor:"#24aeb1"}}/>
            
                <br /><br />

                <input type="submit" value="Send otp"  onClick={()=>Navigate('/login/verify-otp')}/>
              </form>
              

         <p class="">OTP will be sent to this number by SMS and WhatsApp.</p>
                </div>
              </div>
            </div>


          </div>
        </div>


        
        </>
        )}
    </>
  )
}

export default Modal
