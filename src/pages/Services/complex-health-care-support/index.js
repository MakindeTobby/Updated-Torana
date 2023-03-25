import React from 'react';
import { Link } from 'react-router-dom';
import HomeHeader from "../../Home/Home/HomeHeader/HomeHeader"
import HomeTwoFooter from "../../HomeTwo/HomeTwoFooter/HomeTwoFooter"
import { FaWheelchair } from "react-icons/fa";
import { MdAddTask } from "react-icons/md";
import { SiOpenaigym } from "react-icons/si";
import { TbMedicalCross, TbSocial, TbPhysotherapist } from "react-icons/tb";
import Banner from '../banner';
import { Helmet } from 'react-helmet';
import MoreServices from '../more';

const ComplexHealth = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Complex health care support- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.org.au/complex-health-care-support" />
         </Helmet>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-9.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Complex Health Care & Support</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                              High Intensity daily personal activity represents the most complex and highest risk support and service
                              delivery to participants having health conditions that require continuous care. Some participants may
                              have multiple complex and fragile health needs, requiring highly skilled health professionals to take on
                              the role of care giving. Safely assisting with and/or supervising personal tasks of daily life to enable
                              the participant to live as autonomously as possible is significant in promoting the participant’s
                              independence and improving the quality of life. These supports are provided by a worker with additional
                              qualifications and experience relevant to the participants’ complex health needs. These individual
                              supports can be provided in a range of environments, including but not limited to, the participant’s own home, shared and supported living accommodations.
                           </p>
                           <p>
                              Owing to the complexities involved in providing daily support to individuals with
                              challenging health needs, Torana Care Australia has built
                              a team of healthcare professionals, managed by a <b> Specialist GP 24/7, to ensure our participants gets quality healthcare at all times.</b>
                           </p>
                           <p>
                              We are committed to providing the best and safe complex health supports and services in collaboration with other health care professions, to our participants and their families.We understand the importance of partnership with the participant’s support network
                              in achieving set goals. In all we do, our participants remain at the centre of their support and services.
                           </p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3> OUR COMPLEX HEALTH SERVICES INCLUDE:</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i> Complex Bowel Care Management</li>
                                    <li><i className="fas fa-check"></i> Complex Wound Care Management</li>
                                    <li><i className="fas fa-check"></i> Enteral Feeding Care and Management</li>
                                    <li><i className="fas fa-check"></i> Ventilator Care and Management</li>
                                    <li><i className="fas fa-check"></i> Tracheotomy Care and Management</li>
                                    <li><i className="fas fa-check"></i> Urinary Catheter Care and Management</li>
                                    <li><i className="fas fa-check"></i> Subcutaneous Injection Administration and Management.</li>
                                 </ul>
                              </div>
                              <p>
                                 Get in touch with us today to discuss your needs.
                              </p>
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

export default ComplexHealth;