import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"

const SocialSupport = () => {

    return (
        <>
            <HomeHeader />

            <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-main-3.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Social Support And Services</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                           We provide innovative community participation planning and support provision to our participants. 
                           We will work with you and your support network,
                            to determine the best kind of social support you may engage in, to help you achieve your goals
                           </p>
                           <p>
                           Are you worried about being home most of the time?
                           </p>
                           <p>
                           Are you unsure about what social activities to engage in?
                           </p>
                           <p>
                           We would like to hear from you.
                           </p>
                        </div>
                        
                     </article>
                  </div>
                  <div className="col-xl-5 col-lg-4">
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">More Services</h3>
                        </div>
                        <div className="more-service-list">
                           <ul>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-1.png" alt="" /></div>
                                    <div className="more-service-title">Body Surgery</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-2.png" alt="" /></div>
                                    <div className="more-service-title">Dental Care</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-3.png" alt="" /></div>
                                    <div className="more-service-title">Eye Care</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-4.png" alt="" /></div>
                                    <div className="more-service-title">Blood cancer</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-5.png" alt="" /></div>
                                    <div className="more-service-title">Neurology Sargery</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/services">
                                    <div className="more-service-icon"><img src="img/services/more-ser-6.png" alt="" /></div>
                                    <div className="more-service-title">Allergic Issue</div>
                                 </Link>
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="service-widget mb-50">
                        <div className="widget-title-box mb-30">
                           <h3 className="widget-title">Get Some Advice?</h3>
                        </div>
                        <form className="service-contact-form" action="">
                           <div className="row">
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-user mb-20">
                                    <input type="text" placeholder="Enter your name" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-mail mb-20">
                                    <input type="text" placeholder="Enter your email" />
                                 </div>
                              </div>
                              <div className="col-xl-12">
                                 <div className="contact-input contact-icon contact-hourglass">

                                    <select className="form-select select_style" aria-label="Default select example">
                                       <option defaultValue="Select type of care">Select type of care</option>
                                       <option defaultValue="1">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                       <option defaultValue="2">Select type of care</option>
                                    </select>
                                 </div>
                              </div>
                           </div>
                        </form>
                        <div className="ser-form-btn text-center mt-40">
                           <a href="#" className="primary_btn btn-icon ml-0"
                              style={{ animationDelay: '0.6s' }}
                              tabIndex="0"><span>+</span>Request for call</a>
                        </div>
                     </div>
                     {/* <div className="service-widget mb-50 border-0 p-0">
                        <div className="banner-widget">
                           <Link to="/contact">
                              <img src="img/services/services-banner.png" alt="" />
                           </Link>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
            <HomeTwoFooter />
        </>
    );
}

export default SocialSupport