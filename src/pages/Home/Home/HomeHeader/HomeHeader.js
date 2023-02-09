import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../../../components/Shared/Sidebar/Sidebar';
import useGlobalContext from '../../../../hooks/useGlobalContext';

const HomeHeader = () => {
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const { stickyMenu } = useGlobalContext();
   return (
      <>
         <header>
            <div className="top-bar d-none d-md-block">
               <div className="container">
                  <div className="row d-flex align-items-center">
                     <div className="col-xl-6 offset-xl-1 col-lg-6 offset-lg-1 col-md-7 offset-md-1">
                        <div className="header-info">
                           <span><i className="fas fa-phone"></i> +61 499 322 078</span>
                           <span><i className="fas fa-envelope"></i> info@toranacareaustralia.org.au</span>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-5 col-md-4">
                        <div className="header-top-right-btn f-right">
                           <Link to="/contact" className="primary_btn">Make Appointment</Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className={stickyMenu ? "header-menu-area sticky_menu" : "header-menu-area"}>
               <div className="container menu_wrapper">
                  <div className="row align-items-center">
                     <div className="col-xl-3 col-lg-3 col-md-6 col-6 d-flex align-items-center">
                        <div className="logo logo-circle pos-rel">
                           <Link to="/"><img src="img/logo/Torana color.png" alt="" /></Link>
                        </div>
                     </div>
                     <div className="col-xl-9 col-lg-9 col-md-6 col-6">
                        <div className="header-right f-right">
                           <div className="header-lang f-right pos-rel d-none d-lg-block">
                              <div className="lang-icon">
                                 <img src="img/icon/flag.png" alt="" width="100%" />
                                 <span>EN<i className="fas fa-angle-down"></i></span>
                              </div>
                              <ul className="header-lang-list">
                                 {/* <li><a href="#">USA</a></li>
                                 <li><a href="#">UK</a></li>
                                 <li><a href="#">CA</a></li>
                                 <li><a href="#">AU</a></li> */}
                              </ul>
                           </div>
                           <div className="header-social-icons f-right d-none d-xl-block">
                              <ul>
                                 <li><a href="https://web.facebook.com/Toranacareaustralia?_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></a></li>
                                 {/* <li><a href="#"><i className="fab fa-behance"></i></a></li> */}
                                 {/* <li><a href="#"><i className="fab fa-youtube"></i></a></li> */}
                                 <li><a href="https://www.linkedin.com/in/torana-care-australia-baa2571a9/"><i className="fab fa-linkedin"></i></a></li>
                                 {/* <li><a href="#"><i className="fab fa-pinterest"></i></a></li> */}
                              </ul>
                           </div>
                        </div>
                        <div className="header__menu f-right">
                           <nav id="mobile-menu">
                              <ul>

                                 <li><Link to="/about">About</Link>

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
                                 </li>
                                 <li><Link to="/contact">Contact</Link>

                                 </li>
                                 <li><Link to="/career">Careers</Link>

                                 </li>
                                 <li><Link to="/covid19-updates">Covid-19 Updates</Link>

                                 </li>
                              </ul>
                           </nav>
                        </div>

                        <div className="side-menu-icon d-lg-none text-end">
                           <button onClick={handleShow} className="side-toggle border-0 bg-transparent">
                              <i className="fas fa-bars"></i> </button>
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

export default HomeHeader;