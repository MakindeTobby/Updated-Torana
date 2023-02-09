import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross, TbSocial, TbPhysotherapist } from "react-icons/tb";

const ExercisePhy = () => {

   return (
      <>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-main-6.png" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Exercise Physiology And Personal Training</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                              Exercise physiologists/personal trainer specialise in clinical exercise interventions for
                              people with a broad range of health issues. Persons needing these services may be at risk of developing,
                              or have existing, medical conditions and injuries. The aims of exercise physiology interventions are to
                              prevent or manage acute, sub- acute or chronic disease or injury, and assist in restoring one’s optimal
                              physical function, health or wellness. These interventions are exercise-based and include health and
                              physical activity education, advice and support and lifestyle modification with a strong focus on
                              achieving behavioural change. There are a wide range of reasons why a person may benefit from consulting
                              an accredited exercise physiologist. <b>
                                 These include
                                 chronic disease management referrals after diagnosis of a range of conditions
                                 including:
                              </b>
                           </p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
                              </div>
                              <div className="ser-fea-list fix">
                                 <ul>
                                    <li><i className="fas fa-check"></i>Cardiovascular disease</li>
                                    <li><i className="fas fa-check"></i>Pulmonary disease</li>
                                    <li><i className="fas fa-check"></i>Metabolic disease</li>
                                    <li><i className="fas fa-check"></i>Neurological disease</li>
                                    <li><i className="fas fa-check"></i>Musculoskeletal disease (including arthritis, osteoporosis/osteopenia, acute and/or chronic musculoskeletal issues)</li>
                                    <li><i className="fas fa-check"></i>Depression and other mental health conditions</li>
                                    <li><i className="fas fa-check"></i>Cancer</li>
                                    <li><i className="fas fa-check"></i>Accredited exercise physiologists may also assist with:</li>
                                    <li><i className="fas fa-check"></i>Assessments of functional capacity</li>
                                    <li><i className="fas fa-check"></i>Advice on lifestyle modification to improve health status</li>
                                    <li><i className="fas fa-check"></i>Exercise prescriptions for strength and function improvement pre- and post- surgery</li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 {/* <img src="img/services/ser-fea-icon-2.png" alt="" /> */}
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>OUR SERVICES</h3>
                                 <p> Our Exercise Physiologist and Personal Trainer will work with our participants in the delivery of exercise physiology services including:</p>
                                 <ul>
                                    <li><i className="fas fa-check"></i>chronic disease self-management and rehabilitation</li>
                                    <li><i className="fas fa-check"></i>Individualised treatments that help our client gain as much movement and physical independence as possible</li>
                                    <li><i className="fas fa-check"></i>coordinating the delivery of physical and health education via tailored exercise sessions targeted to assist clients self-manage chronic disease</li>
                                 </ul>
                                 <p>We are happy to discuss your need in relation to your physical health goals.</p>
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

export default ExercisePhy;