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

const Household = () => {

   return (
      <>
         <Helmet>
            <meta charSet="utf-8" />
            <title>Household Task Support- NDIS Services</title>
            <link rel="canonical" href="https://toranacareaustralia.com.au/household" />
         </Helmet>
         <HomeHeader />

         <div className="service-details-area pt-10 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-7 col-lg-8">
                     <article className="service-details-box">
                        <div className="service-details-thumb shadow-sm border border-5 mb-80">
                           <img className="img" src="img/services/service-main-5.jpeg" alt="" />
                        </div>
                        <div className="section-title pos-rel mb-45">

                           <div className="section-text pos-rel">
                              <h1>Household Task Support</h1>
                           </div>
                           <div className="section-line pos-rel">
                              <img src="img/shape/section-title-line.png" alt="" />
                           </div>
                        </div>
                        <div className="service-details-text mb-30">
                           <p>
                              Household task refers to the management of duties and chores involved in the running of a household, such as cleaning, cooking, home maintenance, shopping, and bill payment. These tasks may be performed by members of the household, or by
                              other persons hired for the purpose. The term is also used to refer to the money allocated for such use.
                           </p>
                           <p>
                              Persons living with a disability sometimes find housekeeping very challenging and require different levels of support, to maintain their homes. Housekeeping can be personal to persons requiring support. Carer givers having
                              access to sensitive area in their homes may not be their personal choice but necessary to get by.
                           </p>
                           <p>
                              At Torana Care Australia we understand how hard it can be to have carer at your home to take care of all your household tasks. Our disability support professionals are given relevant
                              information and training to provide quality household support to our participants.
                           </p>
                           <p>
                              We have a team of warm and hardworking support workers, passionate about your well-being,
                              ready to support you with your house-hold tasks, in the comfort of your home.
                           </p>
                        </div>
                        <div className="service-details-feature fix mb-35">
                           <div className="ser-fea-box f-left">
                              <div className="ser-fea-icon f-left">
                                 {/* <img src="img/services/ser-fea-icon-1.png" alt="" /> */}
                              </div>
                              <div className="ser-fea-list fix">
                                 <h3>OUR SERVICES</h3>
                                 <ul>
                                    <li><i className="fas fa-check"></i>Cleaning</li>
                                    <li><i className="fas fa-check"></i>Gardening</li>
                                    <li><i className="fas fa-check"></i>Meal preparation</li>
                                    <li><i className="fas fa-check"></i>Shopping</li>
                                    <li><i className="fas fa-check"></i>Laundry</li>
                                    <li><i className="fas fa-check"></i>dish-washing and other household tasks</li>
                                 </ul>
                                 <p>
                                    Let us know how we can help!
                                 </p>
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

export default Household;