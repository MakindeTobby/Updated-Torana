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

const CaldCommunity = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>CALD community participation- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.org.au/cald-community-participation" />
         </Helmet>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-15.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

                           <div className="section-text pos-rel">
                              <h5 className="green-color text-up-case"></h5>
                              <h2> CALD(Culturally And Linguistically Diverse) Community Participation</h2>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                              We support our CALD(Cultural And Linguistically Diverse) participants engage with their communities.
                              We understand the importance of being actively involved in your cultural activities which forms part of
                              your value system. Each participant is supported
                              to express their cultural needs and their expectation. We are open to learning new cultures and values.
                           </p>
                           <p>
                              We have a team of passionate professionals trained to support your values and beliefs in a way that suits you.
                           </p>

                           <p>
                              We would like to hear from you.
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

export default CaldCommunity;