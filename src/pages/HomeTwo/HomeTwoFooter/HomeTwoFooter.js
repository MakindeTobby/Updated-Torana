import React from 'react';
import { Link } from 'react-router-dom';

const HomeTwoFooter = () => {
   return (
      <>
         <footer>
            <div className="footer-top theme-bg pt-100">
               <div className="container">
                  <div className="footer-top-form mb-60">
                     <div className="row align-items-center">
                        <div className="col-xl-4 col-lg-4 col-md-4">
                           <div className="footer-logo-2">
                              <Link to="/"><img src="img/logo/new-logo.png" alt="" width={'50%'} /></Link>

                           </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 d-none d-lg-block d-xl-block">
                           <div className="footer-subscribe-title">
                              <span>Subscribe to Our Newsletter</span>
                           </div>
                        </div>
                        <div className="col-xl-5 col-lg-5 col-md-8">
                           <form className="footer-newsletter" action="#">
                              <input type="text" placeholder="Your Email Address...." />
                              <button className="primary_btn">subscribe</button>
                           </form>
                        </div>
                     </div>
                  </div>
                  <div className="footer-mid pb-60">
                     <div className="row">
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="footer-widget mb-40">
                              <div className="footer-contact-info-2">
                                 <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-1.png" alt="" />
                                    </div>
                                    <div className="footer-co-content">
                                       <span>Mon to Fri : 08h30 - 18h00</span>
                                       <a href='tel:+610261098099'><h4>+61 026 109 8099</h4></a>
                                    </div>
                                 </div>
                                 <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-2.png" alt="" />
                                    </div>
                                    <div className="footer-co-content">
                                       <span>do you have a question?</span>
                                       <a href='mailto:info@toranacareaustralia.com.au'><h5 className='text-white'>info@toranacareaustralia.com.au</h5></a>
                                    </div>
                                 </div>
                                 <div className="f-contact-info-box fix mb-30">
                                    <div className="footer-co-icon f-left">
                                       <img src="img/icon/footer-co-icon-2.png" alt="" />
                                    </div>
                                    <div className="footer-co-content">
                                       <span>socials network</span>
                                       <ul>
                                          <li><a href="https://web.facebook.com/Toranacareaustralia?_rdc=1&_rdr"><i className="fab fa-facebook-f"></i></a></li>
                                          {/* <li><a href="#"><i className="fab fa-behance"></i></a></li> */}
                                          <li><a href="https://www.linkedin.com/in/torana-care-australia-baa2571a9/"><i className="fab fa-linkedin"></i></a></li>
                                          {/* <li><a href="#"><i className="fab fa-youtube"></i></a></li> */}
                                          {/* <li><a href="#"><i className="fab fa-twitter"></i></a></li> */}
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="footer-widget mb-40">
                              <div className="footer-title">
                                 <h5 className='text-white'>Links</h5>
                              </div>

                              <div className="footer-menu footer-menu-2 fix">
                                 <ul>
                                    <li><a href="https://www.xero.com/au">Xero Login</a></li>
                                    <li><a href="https://1467a717015014.au.deputy.com/login?noredirechrefnce=1">Deputy Scheduling</a></li>
                                    <li><a href="https://workpro.com.au">Work pro login</a></li>
                                    <li><a href="/background">Background</a></li>

                                 </ul>
                              </div>


                           </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6">
                           <div className="footer-widget mb-40">

                              <div className="footer-menu footer-menu-2 fix">
                                 <ul>
                                    <li><Link to="/covid19-updates">Covid-19 Updates</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/careers">Careers</Link></li>
                                    <li><Link to="/services">Registered NDIS Provider</Link></li>
                                    <li><Link to="/contact">Comment and Feedback</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact#maps">Guides</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link to="/terms-and-conditions">Terms of Use</Link></li>
                                 </ul>
                              </div>


                           </div>
                        </div>



                     </div>
                  </div>
                  <div className="footer-bottom-0">
                     <div className="row">
                        <div className="col-xl-6">
                           <div className="footer-copyright-area text-center">

                              <p className='text-white'>
                                 Copyright ©2023
                                 <Link to={'/'} className="white-color">  Torana Care Australia. <strong>
                                 </strong> </Link>
                                 All rights reserved
                              </p>
                           </div>
                        </div>
                        <div className="col-xl-6">
                           <div className="footer-copyright-area text-center">
                              <p className="white-color"><b>Powered by: </b>
                                 <a href='https://promaxsolutions.com.au/' className='text-white'>  Promax solutions</a>
                              </p>

                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default HomeTwoFooter;