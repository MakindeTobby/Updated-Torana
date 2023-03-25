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

const AssistiveSuppoert = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Assistive Support And Services- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.org.au/assistive-support-and-services" />
         </Helmet>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-11.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">
                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1>Assistive Support And Services</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <h3> WE ARE DEDICATED TO CARING FOR YOUR NEEDS!</h3>
                           <p>
                              Assistive Technology (AT) provides the support a person with a disability might use to reach
                              their potential at home, in the community and the workplace. AT may be equipment or systems which help
                              you with moving around your home or community, communicating with other people, processing information,
                              and other daily tasks. Supports may be included in your NDIS plan
                              where it is a reasonable and necessary support that will meet your needs and help you pursue your goals.
                           </p>
                           <p>
                              Torana Care Australia helps persons with a disability identify their AT needs. We have a
                              specialist team of professional who would work with you to determine the right AT solution
                              in line with your specific AT needs, how complex your AT needs are and how you manage your NDIS budget.
                           </p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3> Participants are able to use their existing NDIS funding to purchase an item if:</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i> it will maintain funded NDIS supports like a program, therapy
                                       or requirement
                                       (for example physiotherapy or Auslan interpreting provided via video conferencing), and</li>
                                    <li><i className="fas fa-check"></i> the provider of supports has confirmed in writing the device is
                                       necessary to continue supports and services while maintaining physical distancing requirements, and</li>
                                    <li><i className="fas fa-check"></i> it is the lowest specification that will maintain funded supports, and</li>
                                    <li><i className="fas fa-check"></i> they do not already have the item, another suitable item or access to the item, and</li>
                                    <li><i className="fas fa-check"></i> the item has not been funded by another service system (such as education), and</li>
                                    <li><i className="fas fa-check"></i> the item or circumstances are not specifically excluded from their plans.</li>
                                 </ul>

                                 <p>
                                    At Torana Care Australia, we take care of all aspects of our participants needs that support their
                                    well-being. We understand how challenging it may be to organise assistive equipment and services.We will
                                    work with you as we explore all options available to meet your needs. We have a team of qualified
                                    professionals, in collaboration with other services/professionals ready to conduct a comprehensive
                                    assessment,
                                    of what is appropriate for you, inline with your needs and goals.Our services include but not limited to:
                                 </p>
                                 <ul>
                                    <li><i className="fas fa-check"></i> Assistive Products for Household Task</li>
                                    <li><i className="fas fa-check"></i> Communication and information equipment</li>
                                    <li><i className="fas fa-check"></i> Personal Mobility Equipment</li>
                                    <li><i className="fas fa-check"></i> Assistive Products for Personal Care and Safety</li>
                                    <li><i className="fas fa-check"></i> Assistance with daily personal activities</li>
                                    <li><i className="fas fa-check"></i> Assistive equipment for recreation</li>
                                    <li><i className="fas fa-check"></i> Assistance with daily life tasks in a group or shared living arrangement</li>
                                    <li><i className="fas fa-check"></i> Hearing Equipment</li>
                                    <li><i className="fas fa-check"></i> Assistance with travel/transport arrangements</li>
                                 </ul>
                              </div>
                              <p>
                                 We are here to support you live your best life by bridging the gap between the thought of achieving set goals and meeting these goals. Get in touch we us today so we could discuss your needs.
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

export default AssistiveSuppoert;