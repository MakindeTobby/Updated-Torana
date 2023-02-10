import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../hooks/useGlobalContext';

const HomeTwoNavBar = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            {/* <!-- menu-area --> */}
            <div className={stickyMenu ? "sticky_menu header-menu-area header-padding transparrent-header sticky_navBar_bg" :
               "header-menu-area header-padding transparrent-header"}>
               <div className="container-fluid">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-2 col-lg-2 col-md-3 col-6">
                        <div className="logo pos-rel">
                           <Link to="/"><img src="img/logo/torana white.png" alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-8 col-md-6 col-6">
                        <div className="header__menu header-menu-white">
                           <nav id="mobile-menu">
                              <ul>
                                 {/* <li><Link to="/">Home +</Link> */}
                                 {/* <ul className="submenu"> */}
                                 {/* <li><Link to="/">Home style 1</Link></li> */}
                                 {/* <li><Link to="/homeTwo">Home style 2</Link></li>
                                       <li><Link to="/homeThree">Home style 3</Link></li>
                                       <li><Link to="/homeFour">Home style 4</Link></li>
                                       <li><Link to="/homeFive">Home style 5</Link></li> */}
                                 {/* </ul> */}
                                 {/* </li> */}
                                 <li><Link to="/about">About +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/background">Background</Link></li>

                                    </ul>
                                 </li>
                                 <li><Link to="/services">NDIS Services +</Link>
                                    <ul className="submenu">
                                       <li><Link to="/community-nursing">Community Nursing</Link></li>
                                       <li><Link to="/complex-health-care-support">Complex Health Care Support</Link></li>
                                       <li><Link to="/social-support">Social Support and Services</Link></li>
                                       <li><Link to="/therapeutic">Therapeutic Support</Link></li>
                                       <li><Link to="/household">Household Task Support</Link></li>
                                       <li><Link to="/exercise-phy">Exercise Physiologist</Link></li>
                                       <li><Link to="/services">More Services</Link></li>
                                    </ul>
                                    {/* Accommodation/Tenancy Assistance */}
                                    {/* Assistive Support and Services





Specialist Support Coordination
Support Coordination
Specialist Behaviour Support
Capacity Building Support & Services
CALD Community Participation
Exercise Physiology & Personal Training
Group & Centre-based Activities
Group/Shared Independent Living */}
                                 </li>
                                 <li><Link to="/contact">Contact</Link>
                                    {/* <ul className="submenu">
                                       <li><Link to="/shop">Shop Page</Link></li>
                                       <li><Link to="/shopDetails">Shop Details</Link></li>
                                       <li><Link to="/shoppingCart">Shopping Cart</Link></li>
                                       <li><Link to="/checkout">Checkout</Link></li>
                                       <li><Link to="/wishList">Wishlist</Link></li>
                                       <li><Link to="/login">Login</Link></li>
                                       <li><Link to="/register">Register</Link></li>
                                    </ul> */}
                                 </li>
                                 <li><Link to="/career">Careers </Link>
                                    {/* <ul className="submenu">
                                       <li><Link to="/blogs">Blog Right Sidebar</Link></li>
                                       <li><Link to="/blogLeftSideBar">Blog Left Sidebar</Link></li>
                                       <li><Link to="/blogNoSideBar">Blog No Sidebar</Link></li>
                                       <li><Link to="/blogTwoColumn">Blog 2 Column</Link></li>
                                       <li><Link to="/blogTwoMasonry">Blog 2 Col Masonry</Link></li>
                                       <li><Link to="/blogThreeColumn">Blog 3 Column</Link></li>
                                       <li><Link to="/blogThreeColMasonry">Blog 3 Col Masonry</Link></li>
                                       <li><Link to="/blogDetails">Blog Details</Link></li>
                                       <li><Link to="/blogDetailsLeftSidebar">Details Left Sidebar</Link></li>
                                       <li><Link to="/blogDetailsAudio">Details Audio</Link></li>
                                       <li><Link to="/blogDetailsVideo">Details Video</Link></li>
                                       <li><Link to="/blogDetailsGallery">Details Gallery</Link></li>
                                    </ul> */}
                                 </li>
                                 <li><Link to="/covid19-updates">Covid-19 Updates</Link>
                                    {/* <ul className="submenu">
                                       <li><Link to="/about">About</Link></li>
                                       <li><Link to="/appoinment">Appoinment</Link></li>
                                       <li><Link to="/portfolioTwoColumn">Portfolio 2 column</Link></li>
                                       <li><Link to="/portfolioThreeColumn">Portfolio 3 column</Link></li>
                                       <li><Link to="/portfolioSlider">Portfolio Slider</Link></li>
                                       <li><Link to="/contact">Contact</Link></li>
                                       <li><Link to="/notMatch">404 page</Link></li>
                                    </ul> */}
                                 </li>
                              </ul>
                           </nav>
                        </div>
                        <div onClick={handleShow} className="side-menu-icon d-lg-none text-end">
                           <button className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars text-white"></i> </button>
                        </div>
                     </div>
                     <div className="col-xl-4 col-lg-2 d-none d-lg-block d-xl-block">
                        <div className="header-right f-right d-flex">
                           <Link to="/contact" className="primary_btn btn-icon btn-icon-green"><span>+</span>contact
                              us</Link>
                           <a href="tel:+61499322078" className="primary_btn btn-icon btn-icon-white">
                              <i className="fas fa-phone"></i>Make A Call</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>

         <Sidebar show={show} handleClose={handleClose} />
      </>
   );
};

export default HomeTwoNavBar;