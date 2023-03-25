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

const Special = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Specialist Behaviour Support- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.org.au/special" />
         </Helmet>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-2.jpg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

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

export default Special;