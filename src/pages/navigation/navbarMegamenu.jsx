// import React, { useContext, useState ,memo} from 'react';
// import Input from '../../common/Input';
// import { Context } from '../../store/contex';
// import {Link} from 'react-router-dom'

// import './navigation.css'



// const Navigation = () => { 
//   const {searchValue,setSearchValue,value} =  useContext(Context)
//   //console.log(searchValue,'search')

//   return (
//     <>
//     <nav className="navbar navbar-expand-lg navbar-light  text-white bg-body-secondary  ">
//     <div className="container-fluid">
  
     
//       <div className="" id="navbarSupportedContent">

//         <ul className="navbar-nav  mb-2 mb-lg-0   d-flex justify-content-center align-items-center gap-4"  style={{paddingLeft:'430PX'}}>
         
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//             Other Medicines
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><a className="dropdown-item" href="#">Action</a></li>
//               <li><a className="dropdown-item" href="#">Another action</a></li>
//               <li><hr className="dropdown-divider"/></li>
//               <li><a className="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
        
//           <li className="nav-item dropdown">
//           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//          Personal Care
//           </a>
//           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//             <li><a className="dropdown-item" href="#">Action</a></li>
//             <li><a className="dropdown-item" href="#">Another action</a></li>
//             <li><hr className="dropdown-divider"/></li>
//             <li><a className="dropdown-item" href="#">Something else here</a></li>
//           </ul>
//         </li>   

//         <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//          Medical devices
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><a className="dropdown-item" href="#">Action</a></li>
//               <li><a className="dropdown-item" href="#">Another action</a></li>
//               <li><hr className="dropdown-divider"/></li>
//               <li><a className="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>

//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//            Diet Nutrition
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><a className="dropdown-item" href="#">Action</a></li>
//               <li><a className="dropdown-item" href="#">Another action</a></li>
//               <li><hr className="dropdown-divider"/></li>
//               <li><a className="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>

//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//          Diabetic Care
//             </a>
//             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <li><a className="dropdown-item" href="#">Action</a></li>
//               <li><a className="dropdown-item" href="#">Another action</a></li>
//               <li><hr className="dropdown-divider"/></li>
//               <li><a className="dropdown-item" href="#">Something else here</a></li>
//             </ul>
//           </li>
//         </ul>
    
//       </div>
//     </div>
//   </nav>

//     </>
//   );
// };

// export default memo(Navigation);
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/* <Navbar.Brand href="#home"><img src="https://indimedo.com/assets/img/logo.png" alt="Logo" style={{ width: '100PX'}} /></Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Order Medicine" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>

              
            </NavDropdown>
       
            <NavDropdown title="Personal Care" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>

              
            </NavDropdown>
            <NavDropdown title="Medical Devices" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>

              
            </NavDropdown>
            <NavDropdown title="Diet Nutrition" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>

              
            </NavDropdown>
            <NavDropdown title="Diabetes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>

              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;