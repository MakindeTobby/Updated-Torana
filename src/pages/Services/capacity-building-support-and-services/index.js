import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross,TbSocial,TbPhysotherapist } from "react-icons/tb";

const CapacityBuilding = () => {
   
    return (
        <>
            <HomeHeader />

            <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb mb-80">
                           <img className="img" src="img/services/service-main-12.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-icon">
                              <img className="section-back-icon back-icon-left" src="img/section/section-back-icon-sky.png" alt="" />
                           </div>
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1> Capacity Building Support And Services</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                           At Torana Care Australia, we believe that every person living with a disability 
                           should be given the opportunity to live independently and explore their environment 
                           in every way they can. Achieving this goal may be challenging without support. 
                           We have a team of skilled and experienced professionals ready to work with you, 
                           with the aim of building your capacity to take on the coordination of your support
                            and making decisions relating to your life. We apply individualised and holistic 
                            model of care in determining ways to build the capacity of our participants 
                            effectively.
                             </p>
                             <p>
                             <b>
                             Assistance to Access and maintain employment or higher Education
                             </b>
                             </p>
                             <p>
                             Our support and services are designed to provide workplace assessment or counselling to assist
                              participants successfully engage in employment. Making life easier
                              is our priority and we will provide all necessary support required to help you achieve set goals.
                             </p>
                             <p>
                                <b>
                                Workplace Assistance
                                </b>
                             </p>

                             <p>
                             We provide workplace assistance that enables our participant to successfully obtain or retain
                              employment in the open or supported labour market. 
                             This support is provided to our participants with an employment goal. This may include supports to:
                             </p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
                              </div>
                              <div className="ser-fea-list fix">
                                 <ul>
                                    <li><i className="fas fa-check"></i> explore different work options;</li>
                                    <li><i className="fas fa-check"></i> build essential foundation skills for work;</li>
                                    <li><i className="fas fa-check"></i> managing complex barriers to obtaining and sustaining employment;</li>
                                    <li><i className="fas fa-check"></i> specialised job customisation;</li>
                                    <li><i className="fas fa-check"></i> supports to transition from an Australian Disability Enterprise (ADE) to open employment;</li>
                                    <li><i className="fas fa-check"></i> develop a career plan; and</li>        
                                    <li><i className="fas fa-check"></i> other capacity building supports that are likely to lead to successful engagement in a Disability Employment Service (DES).</li>     
                                 </ul>

                                 <p>
                                 <b>
                                 Assistance in coordinating or managing life stages, transitions and supports
                                 </b>
                                 </p>
                                 <p>
                                 Our support and services are provided in a way that promotes independence and capacity building. 
                                 Our skilled professionals will work with our participants, helping them develop the capacity to 
                                 coordinate and manage life stages.We understand the challenges our participants may face during the 
                                 transition. Our support and services include: mentoring, peer-support and individual skill development. 
                                 For instance, providing assistance in attending appointments, 
                                 shopping, bill paying, taking part in social activities and maintaining contact with others.
                                 </p>

                                 <p>
                                 We are here to provide all required support and services to ensure that necessary skills are 
                                 gained to be independent as much as possible.
                                 </p>
                                 
                                 <p>
                                    <b>
                                    Development of daily living and life skills
                                    </b>
                                 </p>

                                 <p>
                                 We will work with our participants, actively supporting and assisting with daily living and life 
                                 skill development such as budgeting, cleaning, laundry, gardening, relationship building, meal preparation,
                                 developing skills for community, social and recreational participation, 
                                 with the aim of promoting independence and building their confidence.
                                 </p>
                              </div>
                              <p> 
                              Let us know how we can help!
                               </p>
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

export default CapacityBuilding;