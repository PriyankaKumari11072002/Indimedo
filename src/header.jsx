import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { BiSolidOffer } from "react-icons/bi";
import { Context } from "./store/contex";
import Modal from "./modals/modal";
import { Box, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useMemo } from "react";


const Header = () => {
  const { loginmodal, setloginModal } = useContext(Context);
  const [loginPage, setloginPage] = useState(false);
  const [verifyPage, setverifyPage] = useState(false);
  const [singup, setSingUp] = useState(false);
  const memorizePage = useMemo(() => {
    setloginPage(true);
  }, [verifyPage, loginPage]);

  return (
    <>
      <Modal />
      <div
        className="d-flex justify-content-between align-items-center bg-#ffffff   text-black border-bottom "
        style={{
          padding: "15px",
          backgroundColor: "#ffffff !important",
          boxShadow: "rgba(0, 0, 0, 0.04) 0px 6px 8px",
          transition: "all 0.3s ease-in 0s",
          height: "80px",
        }}
      >
        <div style={{ marginLeft: "150px" }} className="">
          <Link to="/" className="">
            <img
              src="https://indimedo.com/assets/img/logo.png"
              alt="Logo"
              style={{ width: "100PX" }}
            />
          </Link>
        </div>
        <div
          className="d-flex justify-content-around align-items-center gap-4"
          style={{ marginRight: "180px", textDecoration: "none" }}
        >
          <Link
            to="/special-offers"
            className="text-decoration-none !important  text-black lh-base fw-semibold  "
          >
            {" "}
            <span className="">
              <BiSolidOffer className="" />
              &nbsp; Offers{" "}
            </span>
          </Link>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                {/* /medicines-cart */}
                <Link
                  to=""
                  variant="contained"
                  {...bindTrigger(popupState)}
                  className="text-decoration-none  text-black  lh-base fw-semibold"
                >
                  {" "}
                  <span className="">
                    <BsCart2 className=" " />
                    &nbsp;Carts
                  </span>
                </Link>

                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography sx={{ p: 2 }}>Your Carts Is Empty</Typography>
                </Popover>
              </div>
            )}
          </PopupState>
          <Link
            to="/upload-prescription"
            className="text-decoration-none  text-black  lh-base fw-semibold"
          >
            {" "}
            <span className="">&nbsp;Upload</span>
          </Link>

          <Link
            className="text-decoration-none text-black  lh-base fw-semibold"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span className="">
              <FaUser className="" />
              &nbsp;Sign up/Sign in{" "}
            </span>
          </Link>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div
              className="modal-body  d-flex justify-content-around align-items-center    "
              style={{ padding: "10px 40px" }}
            >
              <div>
                <div>
                  <img
                    src="https://www.netmeds.com/images/cms/wysiwyg/cms/1680000865_New_Dest_deal.png"
                    alt="sign-in banner"
                    width="180"
                    height="200"
                  />
                </div>

                <div>
                  <h1>Welcome to Indimedo website</h1>
                  <p>
                    Sign up with us get exclusive offers,discounts and savings
                    on medicine ,get express delivery on same day
                  </p>
                </div>
              </div>


              {singup && (
                <div className="">
                  <h1>Sign up</h1>
                  <p>Please enter your mobile number to login</p>
                  {/* <form action=""> */}
                  {/* <label htmlFor="phone">Enter a phone number:</label> */}
                  <Box
                    component="div"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="Enter Your Number"
                      variant="standard"
                    />
                  </Box>

                  {/* <input type="tel" id="phone" name="phone" placeholder="...8565476546" required  style={{border:"none",padding:'10px',borderBottomColor:"#24aeb1"}}/> */}

                  <br />
                  <br />
                  <input
                    type="checkbox"
                    id="healthCare"
                    name="healthCare"
                    value="healthCare"
                  />
                  <label htmlFor="healthCare">Are you a healthcare </label>
                  <input
                    type="submit"
                    value="Send otp"
                    onClick={() => memorizePage}
                  />
                  <p className="">
                    OTP will be sent to this number by SMS and WhatsApp.
                  </p>
                  <p>
                    Have an account?{" "}
                    <span onClick={() => memorizePage}>Login</span>
                  </p>
                  <p>
                    By signing up, you agree to our Terms and Conditions &
                    Privacy Policy pri
                  </p>

                  {/* </form> */}
                </div>
              )}

              {loginPage && !singup && !verifyPage && (
                <div>
                  <h1>Login</h1>
                  <p>
                    Sign up or Sign in to access your orders, special offers,
                    health tips and more!
                    <Box
                      component="form"
                      sx={{
                        "& > :not(style)": { m: 1, width: "25ch" },
                      }}
                      noValidate
                      autoComplete="off"
                    >
                      <TextField
                        id="standard-basic"
                        label="Enter Email Id or Mobile Number"
                        variant="standard"
                      />
                      <button onClick={() => setverifyPage(true)} type="button">
                        Continue
                      </button>
                      <p>
                        New on Indimedo Website?{" "}
                        <Link to="" onClick={() => setSingUp(true)}>
                          Sign Up
                        </Link>
                      </p>
                      <p>
                        By signing In, you agree to our Terms and Conditions &
                        Privacy Policy pri
                      </p>
                    </Box>
                  </p>
                </div>
              )}

              {verifyPage && (
                <div>
                  <h1>Enter OTP</h1>
                  <p>Enter OTP We have sent an OTP on +91 8787689678</p>

                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      id="standard-basic"
                      label="One Time Password"
                      variant="standard"
                    />
                  </Box>

                  <p>Get OTP on SMS | Get OTP on Call</p>
                  <button>Done</button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
