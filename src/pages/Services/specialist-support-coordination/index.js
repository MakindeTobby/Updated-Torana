import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross,TbSocial,TbPhysotherapist } from "react-icons/tb";

const Specialist = () => {
   
    return (
        <>
            <HomeHeader />

            <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-main-8.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Specialist Support Coordination</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                            <h3> SPECIALIST SUPPORT COORDINATION</h3>
                           <p>
                           This support is delivered utilising an expert or specialist approach, necessitated by specific high 
                           complex needs or high-level risks in a participant’s situation. Our Specialist support coordinator will 
                           support the participant to manage challenges in their support environment which may include health,
                            education and Capacity building.We work with our participants,in collaboration with other providers and
                             professionals to develop a robust plan that meet set goals both on short and long term bases. We follow 
                             through this process with our 
                           participants via support monitoring and assessments till desired results are achieved.
                             </p>
                             <p>
                             Our Specialist Support Coordinators negotiate appropriate support solutions 
                             with multiple stakeholders and seek to achieve well-coordinated plan implementation. 
                             We also provide assistance to stakeholders with resolving points of crisis for participants, 
                             assist to ensure a consistent delivery of service and access to relevant supports during crisis 
                             situations.Our Specialist Support Coordination is generally delivered through an intensive and time 
                             limited period necessitated by the participant’s immediate and significant barriers to plan implementation. Depending on individual circumstances, our Specialist Support Coordinator may also design a complex service plan that focuses on how all the stakeholders in a participant’s life will interact to resolve barriers and promote appropriate plan implementation. Once developed, our Specialist Support Coordinator will continue to monitor the plan,
                              which may be maintained by the participant’s support workers or other care supports.
                             </p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
                              </div>
                              <div className="ser-fea-list fix">
                              <h3>OUR SPECIALIST SUPPORT COORDINATION SERVICES INCLUDES, BUT IS NOT LIMITED TO</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i> Understand the participant’s plan;</li>
                                    <li><i className="fas fa-check"></i> Connect with Supports and Services;</li>
                                    <li><i className="fas fa-check"></i> Design Support Approaches;</li>
                                    <li><i className="fas fa-check"></i> Establish Supports;</li>
                                    <li><i className="fas fa-check"></i> Coach, Refine, Reflect;</li>
                                    <li><i className="fas fa-check"></i> Targeted Support Coordination;</li>
                                    <li><i className="fas fa-check"></i> Crisis: Planning, Prevention, Mitigation and Action;</li>
                                    <li><i className="fas fa-check"></i> Address Complex Barriers;</li>
                                    <li><i className="fas fa-check"></i> Design Complex Service Plan;</li>
                                    <li><i className="fas fa-check"></i> Build Capacity and Resilience; and</li>
                                    <li><i className="fas fa-check"></i> Report to the NDIA.</li>
                                 </ul>
                              </div>
                           </div>
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
                                 <Link to="/community-nursing">
                                 <FaWheelchair className="fs-1 text-danger" />
                                    <div className="more-service-title">Community Nursing</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/special">
                                    <TbMedicalCross className="fs-1 text-danger" />
                                    <div className="more-service-title">SPECIALIST BEHAVIOUR SUPPORT</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/social-support">
                                    <TbSocial className="fs-1 text-danger" />
                                    <div className="more-service-title">SOCIAL SUPPORT AND SERVICES</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/therapeutic">
                                        <TbPhysotherapist className="fs-1 text-danger" />
                                    <div className="more-service-title">THERAPEUTIC SUPPORT</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/household">
                                    <MdAddTask className="fs-1 text-danger" />
                                    <div className="more-service-title">HOUSEHOLD TASK SUPPORT</div>
                                 </Link>
                              </li>
                              <li>
                                 <Link to="/exercise-phy">
                                    <SiOpenaigym className="fs-1 text-danger" />
                                    <div className="more-service-title">EXERCISE PHYSIOLOGY AND PERSONAL TRAINING</div>
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
                     <div className="service-widget mb-50 border-0 p-0">
                        <div className="banner-widget">
                           <Link to="/contact">
                              <img src="img/services/services-banner.png" alt="" />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
            <HomeTwoFooter />
        </>
    );
}

export default Specialist;