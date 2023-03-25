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

const GroupShared = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Group/Shared Supported Living, Supported Independent Living/Respite- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.org.au/group-shared-living-shared-independent-living-and-respite" />
         </Helmet>
         <HomeHeader />
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-10.jpg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h1> Group/Shared Supported Living, Supported Independent Living/Respite</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                              At Torana Care Australia, we are committed to providing excellent support and services to our
                              participants at all times. A high quality of service is guaranteed irrespective of location and time.
                           </p>

                           <p>
                              <b>
                                 GROUP/SHARED SUPPORTED LIVING
                              </b>
                           </p>

                           <p>
                              Group/Shared Supported Living is a type of accommodation arrangement where individuals living with a
                              disability can live together under a roof, in the comfort of their private bedrooms but may share certain
                              common areas such as kitchen, lounge rooms, wet rooms and other parts of the house. This living style
                              is usually cost effective as the accommodation and other living costs are shared among all residents.
                           </p>

                           <p>
                              This style of living creates an avenue for socialisation and makes the living space more lively.
                              Each resident is supported as required in their own privacy and based on their choice. Support and
                              services provided
                              in shared living setting is similar to support being delivered in a private accommodation.
                           </p>
                           <p>
                              <b>
                                 SUPPORTED INDEPENDENT LIVING
                              </b>
                           </p>

                           <p>
                              Supported Independent Living is a type of support provided to NDIS participants in the comfort of their
                              homes which may me
                              private or shared accommodations. These supports aim to assist the participant maintain their independence.
                           </p>

                           <p>
                              <b>
                                 RESPITE
                              </b>
                           </p>

                           <p>
                              Respite support and services are provided in a group/shared supported living setting usually for a
                              short period of time. This gives carer and family carers some time off caring for their loved once. Respite care creates an avenue for participants to socialise and be cared for just as they would being at home.
                              They are engaged in many interesting activities as well as community outings.
                           </p>

                           <p>
                              Let us know how we can help..
                           </p>
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

export default GroupShared;