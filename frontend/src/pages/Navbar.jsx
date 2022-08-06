// import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
// import {GiHamburgerMenu} from 'react-icons/gi'
// import{FaTimes} from 'react-icons/fa'
// import {FaWhatsapp,FaTwitter,FaInstagramSquare,FaFacebook,FaGithub} from 'react-icons/fa'
// import { setLogout } from "../redux/features/authSlice"

// import {BiPhoneCall} from 'react-icons/bi'
// import './index.css'
// import { useDispatch, useSelector } from 'react-redux'
// const Navbar = () => {
//   const { user} = useSelector((state) => ({ ...state.auth }));
// const dispatch=useDispatch()
// const handleLogout= ()=>{
//  dispatch(setLogout())   
// }
//   const [show,setShow]=useState(false)
  
//   const activeNav=()=>{
//     setShow(!show)
//   }
//   return (
//     <div className="navbar">
//       <div className="title">
//       <h1 class="head"> 
//           <span className="abb">SBA</span>
//           <br></br>
//           <span class="intro">SWIFT BOOKING AMBLANCE</span> 
//           </h1>
//         </div>
//         <div className="sidebar">
//           <div onClick={activeNav}  className={show ? 'side-icons' :'header-list' }>
//            {!show ? (<GiHamburgerMenu />):<FaTimes/> }
//           </div>
//          { show ? 

        
//           <div className="side-links">
         
          
          
//          <Link className='decor'  to='/'><li className='link' id="link">Home</li></Link>
//                 {user?.result?._id ? (
//                  <>
              
//                  <Link className='decor' to="/login">
//                    <li className='link' onClick={() => handleLogout()}>
//                      Logout
//                    </li>
//                  </Link>
//                  {!user?.result?.isAdmin ?   (  
//                <Link className='decor' to='/book'><li className='link'id="link">Booking</li></Link>
//            )
//  :     null    
 
//                } 
//  </>
               
               
              
//             ) : (
//               <>
//               <Link className='decor' to='/login'><li className='link'id="link">Login</li></Link>

//               <Link className='decor' to='/register'><li className='link'id="link">Register</li></Link>

//               </>
              
//             )}
//              {user?.result?.isAdmin ?   (  
//               <Link className='decor' to='/admin'><li className='link'id="link">Admin Dashboard</li></Link>
//           )
// :     null    

//               }    
      
//           </div>:null }
//         </div> 
//         <div className="nav-links">
//             <ul className="links">
                
//             <Link className='decor'  to='/'><li className='link' id="link">Home</li></Link>
//                 {user?.result?._id ? (
              
//               <>
              
//               <Link className='decor' to="/login">
//                 <li className='link' onClick={() => handleLogout()}>
//                   Logout
//                 </li>
//               </Link>
//               {!user?.result?.isAdmin ?   (  
//             <Link className='decor' to='/book'><li className='link'id="link">Booking</li></Link>
//         )
// :     null    

//             } 
// </>
              
//             ) : (
//               <>
//               <Link className='decor' to='/login'><li className='link'id="link">Login</li></Link>

//               <Link className='decor' to='/register'><li className='link'id="link">Register</li></Link>

//               </>
              
//             )}
//          {user?.result?.isAdmin ?   (  
//               <Link className='decor' to='/admin'><li className='link'id="link">Admin Dashboard</li></Link>
//           )
// :     null    

//               }                 
                
//                 </ul>
//         </div>
//         {/* <div className="contact-link">
//         <Link to='/contact'>
//               <button className='btn'>
//                 Contact
//             </button>      
//                     </Link>
//                     <Link to='/group'>
//               <button className='btn'>
//                 Join Us
//             </button>      
//                     </Link>
                   
            
//         </div> */}
//     </div>
//   )
// }

// export default Navbar




























// // import React from 'react';

// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // export const Navbar= ()=>{
// //   const notify = () => toast("Wow so easy!");

// //   return (
// //     <div>
// //       <button onClick={notify}>Notify!</button>
// //       <ToastContainer />
// //     </div>
// //   );
// // }








// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import { setLogout } from "../redux/features/authSlice"
// // import { useDispatch, useSelector } from "react-redux";
// // import { MDBNavbarItem, MDBNavbarLink } from 'mdb-react-ui-kit';

// // const Navbar = () => {
 
// //   const { user} = useSelector((state) => ({ ...state.auth }));
// // const dispatch=useDispatch()
// // const handleLogout= ()=>{
// //  dispatch(setLogout())   
// // }

// //   return (
// //     <div className="navbar">
        
// //         <div class="title">
// //           <h1 class="head"> 
// //           <span className="abb">SBA</span>
// //           <br></br>
// //           <span class="intro">SWIFT BOOKING AMBLANCE</span> 
// //           </h1></div>
// //           <div className="sidebar">
// //           <div className="menu">
// //             <h2 className='t'>hello</h2>
// //           </div>
// //         </div>
// //         <div className="right">
        
// //             <ul className="navlinks">
// //                 <Link className='decor'  to='/'><li className='link' id="link">Home</li></Link>
// //                 {user?.result?._id ? (
              
// //                 <Link className='decor' to="/login">
// //                   <li className='link' id="link"onClick={() => handleLogout()}>
// //                     Logout
// //                   </li>
// //                 </Link>
              
// //             ) : (
// //               <>
// //               <Link className='decor' to='/login'><li className='link'id="link">Login</li></Link>

// //               <Link className='decor' to='/register'><li className='link'id="link">Register</li></Link>

// //               </>
              
// //             )}
// //                  <Link className='decor' to='/book'><li className='link'id="link">Booking</li></Link>
                
                
// //             </ul>
            
// //         </div>
        
// //     </div>
// //   )
// // }

// // export default Navbar