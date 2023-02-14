import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross, TbSocial, TbPhysotherapist } from "react-icons/tb";

const SuppoertCo = () => {

   return (
      <>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-main-14.jpg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1> Support Coordination</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                              Torana Care Australia Provides two(2) levels of Support coordination such as:
                           </p>

                           <p>
                              <b>
                                 LEVEL 1: SUPPORT CONNECTION
                              </b>
                           </p>

                           <p>
                              This support assists a participant to implement their plan by strengthening their ability to connect with
                              the broader systems of supports and to understand the purpose of the funded supports. Our Support
                              Connection assists a participant to understand their NDIS plan, connect participants with broader
                              systems of supports, and provide assistance to connect with providers. This service will also
                              assist participants to achieve effective utilisation of their NDIS plan and answer questions as they arise.
                           </p>

                           <p>
                              Support Connection helps to increases a participant’s capacity to maintain (or in some cases change)
                              support relationships, resolve service delivery
                              issues, and participate independently in NDIA processes. Our services include, but is not limited to:
                           </p>

                           <div className="service-details-feature fix mb-35">
                              <div className="ser-fea-box f-left">
                                 <div className="ser-fea-icon f-left">
                                    {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
                                 </div>
                                 <div className="ser-fea-list fix">
                                    <ul>
                                       <li><i className="fas fa-check"></i> Understand the participant’s plan;</li>
                                       <li><i className="fas fa-check"></i> Connect with Supports and Services;</li>
                                       <li><i className="fas fa-check"></i> Establish Supports;</li>
                                       <li><i className="fas fa-check"></i> Coach, Refine, Reflect; and</li>
                                       <li><i className="fas fa-check"></i> Report to the NDIA.</li>
                                    </ul>
                                 </div>
                                 <p>
                                    <b>
                                       LEVEL 2: COORDINATION OF SUPPORTS
                                    </b>
                                 </p>
                                 <p>
                                    This support strengthens a participant’s ability to design and then build their supports with an
                                    emphasis on linking the broader systems of support across a complex service delivery environment.
                                    Our Coordination of Supports focuses on supporting participants to direct their lives, not just their
                                    services, and also focuses on assisting participants to build and maintain a resilient network of formal and informal supports. This involves working together with the participant to understand the funding, identify what participants expect from services, and how participants want this designed. This service also includes coaching participants,
                                    and working with participants to develop capacity and resilience in their network.
                                 </p>
                                 <p>
                                    <b>
                                       OUR SPECIALIST SUPPORT COORDINATION SERVICES INCLUDES, BUT IS NOT LIMITED TO
                                    </b>
                                 </p>
                                 <div className="ser-fea-list fix">
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
                                       <option defaultValue="Select type of care" hidden>Select type of care</option>
                                       <option className="level-0"> Accommodation</option>
                                       <option className="level-0"> Assistive Support</option>
                                       <option className="level-0"> Household Task Support</option>
                                       <option className="level-0"> Social Support and Services</option>
                                       <option className="level-0"> Therapeutic Support</option>
                                       <option className="level-0"> Community Nursing</option>
                                       <option className="level-0"> Complex Health Care</option>
                                       <option className="level-0"> Support Coordination</option>
                                       <option className="level-0">  Specialist Behaviour</option>
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

export default SuppoertCo;