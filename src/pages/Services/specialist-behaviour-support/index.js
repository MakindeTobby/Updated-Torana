import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"

const Special = () => {

    return (
        <>
            <HomeHeader />

            <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-main-2.jpg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Specialist Behaviour Support</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                           We offer clinical social help to decrease the danger of hurtful 
                           conduct and produce positive results. Our clinicians give proficient individualized
                            examination and techniques that advance pro-social conduct and improve general well-being.
                           </p>
                           <p>
                           Our support and services include specialist behavioural intervention support, which is an intensive
                            support for a participant, intending to address significantly harmful or persistent behaviours of concern. We develop a Behaviour support plan that aims to limit the likelihood of behaviours of concern developing or increasing once identified. This plan outlines the specifically designed positive behavioural support strategies for a participant, their family and 
                           support persons that will achieve the intended outcome of eliminating or reducing behaviours of concern.
                           </p>
                           <p>
                           Our team of behaviour support practitioners are ready to manage our participants’ specialist
                            behaviour support 
                           needs Individually and holistically.
                           </p>
                           <p>
                           We are committed to working through this process with you in collaboration with 
                           other professionals and main stream agents.
                           </p>
                           <p>
                           Let us know how we can help.
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

export default Special;