import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross, TbSocial, TbPhysotherapist } from "react-icons/tb";
import { Helmet } from 'react-helmet';
import Banner from '../banner';
import MoreServices from '../more';

const Specialist = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Specialist Support Coordination- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.org.au/specialist-support-coordination" />
         </Helmet>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-8.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

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
                     <MoreServices />
                     <Banner />

                  </div>
               </div>
            </div>
         </div>
         <HomeTwoFooter />
      </>
   );
}

export default Specialist;